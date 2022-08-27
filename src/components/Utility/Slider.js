import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import classes from './Slider.module.css'
import {ReactComponent as IconArrowRight} from '../../assets/arrow-right-short.svg'
import {ReactComponent as IconArrowLeft} from '../../assets/arrow-left-short.svg'
import PropTypes from 'prop-types'

const Slider = ({items, colorsBtn}) => {

  const totalItens = items.length;
  const [itensShown, setItensShown] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const [itemWidth, setItemWidth] = useState(0);

  const mediaQuerySizes = useMemo(() => 
   [
   {windowSize: 900, itensToShow: 4}, 
   {windowSize: 750, itensToShow: 3}, 
   {windowSize: 550, itensToShow: 2}, 
   {windowSize: 360, itensToShow: 1}, 
  ]
  , [])
  
  useEffect(() => {
 
    setItemWidth(slideRef.current.offsetWidth / itensShown)

    slideRef.current.style.transform = `translateX(-${currentIndex * itemWidth}px)`

  }, [currentIndex, itemWidth, itensShown])


const debounce = useCallback((func, wait, immediate) => {
	let timeout;
	return function() {
		const context = this, args = arguments;
		const later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}, [])


  useEffect(() => {

    const changeSlideItemsToShown = debounce(() => {

      const reverseOrderMediaQueries = [...mediaQuerySizes].reverse()

      const windowMatch = reverseOrderMediaQueries.find(mediaQuery => mediaQuery.windowSize > window.innerWidth);  

      if (windowMatch) {
        setItensShown(windowMatch.itensToShow)
      } else {
        setItensShown(5)
      }

      setItemWidth(slideRef.current.offsetWidth / itensShown)
      setCurrentIndex(0);

    }, 300)

    changeSlideItemsToShown();

    window.addEventListener('resize', changeSlideItemsToShown)
    return () => {
      window.removeEventListener('resize', changeSlideItemsToShown)
    }
  }, [debounce, itensShown, mediaQuerySizes])
  
  
  const nextSlideHandler = () => {
    if(currentIndex > totalItens - itensShown - 1) return
    setCurrentIndex(state => state + 1)
  }

  const previousSlideHandler = () => {
    if(currentIndex === 0) return;
    setCurrentIndex(state => state - 1)
  } 

  const canSlide = totalItens <= itensShown

  return (
    <div className={classes.wrapSlider}>
      {!canSlide && <>
        <button className={classes.btnAnt} onClick={previousSlideHandler} style={colorsBtn}><IconArrowLeft/></button>
        <button className={classes.btnDep} onClick={nextSlideHandler} style={colorsBtn}><IconArrowRight/></button>
      </>}
    <div className={classes.sliderContainer}>
        <ul className={classes.slider} ref={slideRef}>
          {items.map(item =>
            <li style={{minWidth:`${itemWidth}px`}} key={item.nome}>
            <img src={require(`../../assets/img-produtos/${item.img}.webp`)} alt={item.nome}/>
            </li>)}
        </ul>
      </div>
    </div>
  )
}

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  colorsBtn: PropTypes.exact({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  })
}

Slider.defaultProps = {
  colorsBtn: {
    backgroundColor: '#BC7BEF',
    color: '#4B1F6D'
  }
}
export default Slider