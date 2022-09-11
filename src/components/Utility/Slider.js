import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import classes from "./Slider.module.css";
import { ReactComponent as IconArrowRight } from "../../assets/arrow-right-short.svg";
import { ReactComponent as IconArrowLeft } from "../../assets/arrow-left-short.svg";
import PropTypes from "prop-types";
import "aos/dist/aos.css";
import AOS from "aos";
import SliderModal from "./SliderModal";

const ItemsSlider = memo(({ itemWidth, item, openModal }) => {
  return (
    <li style={{ minWidth: `${itemWidth}px` }}>
      <button
        className={classes.btnSlideImg}
        onClick={() => openModal(item)}
        draggable="false"
      >
        <img
          src={require(`../../assets/img-produtos/${item.img}.webp`)}
          alt={item.nome}
          draggable="false"
        />
        <p className={classes.nomeItem}>{item.nome}</p>
      </button>
    </li>
  );
});

const Slider = ({ items, colorsBtn }) => {
  const totalItens = items.length;
  const [itensShown, setItensShown] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const [itemWidth, setItemWidth] = useState(0);
  const [currentItemModal, setCurrentItemModal] = useState(null);
  const [modalIsShown, setModalIsShown] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 0,
    });
  }, []);

  useEffect(() => {
    setItemWidth(slideRef.current.offsetWidth / itensShown);

    slideRef.current.style.transform = `translateX(${-(
      currentIndex * itemWidth
    )}px)`;
  }, [currentIndex, itemWidth, itensShown]);

  const debounce = useCallback((func, wait, immediate) => {
    let timeout;
    return function () {
      const context = this,
        args = arguments;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }, []);

  useEffect(() => {
    const mediaQuerySizes = [
      { windowSize: 900, itensToShow: 4 },
      { windowSize: 750, itensToShow: 3 },
      { windowSize: 550, itensToShow: 2 },
      { windowSize: 360, itensToShow: 1 },
    ];

    const changeSlideItemsToShown = debounce(() => {
      const reverseOrderMediaQueries = [...mediaQuerySizes].reverse();

      const windowMatch = reverseOrderMediaQueries.find(
        (mediaQuery) => mediaQuery.windowSize >= window.innerWidth
      );

      if (windowMatch) {
        setItensShown(windowMatch.itensToShow);
      } else {
        setItensShown(5);
      }

      setItemWidth(slideRef.current.offsetWidth / itensShown);
      setCurrentIndex(0);
    }, 300);

    changeSlideItemsToShown();

    window.addEventListener("resize", changeSlideItemsToShown);
    return () => {
      window.removeEventListener("resize", changeSlideItemsToShown);
    };
  }, [debounce, itensShown]);

  const nextSlideHandler = () => {
    if (currentIndex > totalItens - itensShown - 1) return;
    setCurrentIndex((state) => state + 1);
  };

  const previousSlideHandler = () => {
    if (currentIndex === 0) return;
    setCurrentIndex((state) => state - 1);
  };

  const handleOpenModal = useCallback((item) => {
    setModalIsShown(true);
    setCurrentItemModal(item);
  }, []);

  const handleCloseModal = () => {
    setModalIsShown(false);
  };

  const canSlide = totalItens <= itensShown;

  return (
    <>
      {modalIsShown && (
        <SliderModal
          currentItemModal={currentItemModal}
          onClose={handleCloseModal}
        />
      )}
      <div className={classes.wrapSlider} data-aos="fade-up">
        {!canSlide && (
          <>
            <button
              className={classes.btnAnt}
              onClick={previousSlideHandler}
              style={colorsBtn}
              aria-label="item anterior"
            >
              <IconArrowLeft />
            </button>
            <button
              className={classes.btnDep}
              onClick={nextSlideHandler}
              style={colorsBtn}
              aria-label="item posterior"
            >
              <IconArrowRight />
            </button>
          </>
        )}
        <div className={classes.sliderContainer}>
          <ul className={classes.slider} ref={slideRef}>
            {items.map((item) => (
              <ItemsSlider
                key={item.id}
                item={item}
                openModal={handleOpenModal}
                itemWidth={itemWidth}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

Slider.propTypes = {
  items: PropTypes.array.isRequired,
  colorsBtn: PropTypes.exact({
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
  }),
};

Slider.defaultProps = {
  colorsBtn: {
    backgroundColor: "#ac83fa",
    color: "#4b1688",
  },
};
export default Slider;
