import React from 'react'
import ImgSorvete from '../../assets/bolasorvete.png';
import classes from './Caracteristicas.module.css'
import {ReactComponent as SvgStar} from '../../assets/star.svg'

const Caracteristicas = () => {
  return (
    <div className='container'>
    <section className={classes.container}>
      <div className={classes.detalhe}><SvgStar/></div>
      <div className={classes.img}>
        <img src={ImgSorvete} alt="bola de sorvete" />
      </div>
      <ul className={classes.listaCaracteristicas}>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
        <li>Lorem ipsum dolor sit amet</li>
      </ul>
    </section>
    </div>
  )
}

export default Caracteristicas