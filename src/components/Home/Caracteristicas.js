import React from 'react'
import ImgSorvete from '../../assets/bolasorvete.png';
import classes from './Caracteristicas.module.css'

const Caracteristicas = () => {
  return (
    <section className={`container ${classes.container}`}>
      <div className={classes.img}>
        <img src={ImgSorvete} alt="bola de sorvete" />
      </div>
      <ul className={classes.listaCaracteristicas}>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </section>
  )
}

export default Caracteristicas