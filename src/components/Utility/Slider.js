import React from 'react'
import classes from './Slider.module.css'

const Slider = () => {
  return (
    <div className={classes.wrapSlider}>
      <button className={classes.btnAnt}>Ant</button>
      <button className={classes.btnDep}>Dep</button>
      <div className={classes.sliderContainer}>
        <ul className={classes.slider}>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </div>
    </div>
  )
}

export default Slider