import React, { useCallback, useEffect, useRef, useState } from 'react'
import classes from './Slider.module.css'
import {ReactComponent as IconArrowRight} from '../../assets/arrow-right-short.svg'
import {ReactComponent as IconArrowLeft} from '../../assets/arrow-left-short.svg'
import PropTypes from 'prop-types';
import Modal from './Modal'

const Slider = ({items, colorsBtn}) => {

  const totalItens = items.length;
  const [itensShown, setItensShown] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const [itemWidth, setItemWidth] = useState(0);
  const [currentItemModal, setCurrentItemModal] = useState(items[0]);
  const [modalIsShown, setModalIsShown] = useState(false)

  
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
    const mediaQuerySizes = [
      {windowSize: 900, itensToShow: 4}, 
      {windowSize: 750, itensToShow: 3}, 
      {windowSize: 550, itensToShow: 2}, 
      {windowSize: 360, itensToShow: 1}, 
     ]

    const changeSlideItemsToShown = debounce(() => {

      const reverseOrderMediaQueries = [...mediaQuerySizes].reverse()

      const windowMatch = reverseOrderMediaQueries.find(mediaQuery => mediaQuery.windowSize >= window.innerWidth);  

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
  }, [debounce, itensShown])
  
  
  const nextSlideHandler = () => {
    if(currentIndex > totalItens - itensShown - 1) return
    setCurrentIndex(state => state + 1)
  }

  const previousSlideHandler = () => {
    if(currentIndex === 0) return;
    setCurrentIndex(state => state - 1)
  } 

  const handleOpenModal = (item) => {
    setModalIsShown(true);
    setCurrentItemModal(item)
  }

  const handleCloseModal = () => {
    setModalIsShown(false)
  }

  const canSlide = totalItens <= itensShown

  return (
    <>
    {modalIsShown &&
    <Modal onClose={handleCloseModal}>
      <div className={classes.modal}>
      <div className={classes.imgModal}>
        <img src={require(`../../assets/img-produtos/${currentItemModal.img}.webp`)} alt={currentItemModal.nome}/>
      </div>
      <div className={classes.infosModal}>
        <h3>{currentItemModal.nome}</h3>
        <p>{currentItemModal.descricao}</p>
        {currentItemModal.sabores && 
        <section className={classes.sabores}>
          <p>Sabores</p>
          <ul>
            {currentItemModal.sabores.map(sabor =>
              <li key={sabor}>{sabor}</li>
              )}
          </ul>
        </section>
        }

      </div>
       
       </div>
    </Modal>
     }
    <div className={classes.wrapSlider}>
      {!canSlide && <>
        <button className={classes.btnAnt} onClick={previousSlideHandler} style={colorsBtn}><IconArrowLeft/></button>
        <button className={classes.btnDep} onClick={nextSlideHandler} style={colorsBtn}><IconArrowRight/></button>
      </>}
    <div className={classes.sliderContainer}>
        <ul className={classes.slider} ref={slideRef}>
          {items.map(item =>
            <li style={{minWidth:`${itemWidth}px`}} key={item.id}>
              <button className={classes.btnSlideImg} onClick={() => handleOpenModal(item)}>
                <img src={require(`../../assets/img-produtos/${item.img}.webp`)} alt={item.nome}/>
                <p className={classes.nomeItem}>{item.nome}</p>
              </button>
            </li>)}
        </ul>
      </div>
    </div>
    </>
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
    backgroundColor: '#9063CA',
    color: '#411E70'
  }
}
export default Slider