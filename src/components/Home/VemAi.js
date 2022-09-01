import React, { useEffect } from 'react'
import classes from './VemAi.module.css'
import ImgSorvete from '../../assets/casquinhas.webp'
import "aos/dist/aos.css"
import AOS from 'aos'

const VemAi = () => {

  
  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, [])
  
  return (
    <div className='container'>
    <section className={classes.vemAi}>
      <div className={classes.txt} data-aos="fade-down">
        <h2 className={classes.titulo}>Vem aí!</h2>
        <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
      </div>
      <div className={classes.img} data-aos="fade-up">
        <img src={ImgSorvete} alt='3 casquinhas de sorvete' />
      </div>
      <div className={classes.sabores}data-aos="fade-down">
        <h3>Nos sabores</h3>
        <ul className={classes.saboresLista}>
          <li>Chocolate</li>
          <li>Morango</li>
          <li>Caramelo</li>
        </ul>
      </div>
    </section>
    </div>
  )
}

export default VemAi