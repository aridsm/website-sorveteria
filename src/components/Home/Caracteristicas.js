import React, { useEffect } from 'react'
import ImgSorvete from '../../assets/bolasorvete.webp';
import classes from './Caracteristicas.module.css'
import "aos/dist/aos.css"
import AOS from 'aos'

const Caracteristicas = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, [])

  return (
    <div className='container'>
    <section className={classes.container}>
      <div className={classes.img}data-aos='fade-down'>
        <img src={ImgSorvete} alt="bola de sorvete" />
      </div>
      <ul className={classes.listaCaracteristicas} data-aos='fade-up'>
        <li>Curabitur commodo nibh ligula.</li>
        <li>Morbi ornare, sem sed facilisis semper.</li>
        <li>Curabitur id metus non dui tempor pharetra. </li>
      </ul>
    </section>
    </div>
  )
}

export default Caracteristicas