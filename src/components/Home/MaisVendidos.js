import React from 'react'
import { Link } from 'react-router-dom';
import classes from './MaisVendidos.module.css';

const MaisVendidos = () => {
  return (
    <section className={classes.container}>
      <div className='container'>
        <h2>Mais vendidos</h2>
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
        <Link to="/produtos" className='btn-amarelo'>Confira todos os produtos</Link>
      </div>
    </section>
  )
}

export default MaisVendidos