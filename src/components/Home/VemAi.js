import React from 'react'
import classes from './VemAi.module.css'
import ImgSorvete from '../../assets/casquinhas.png'

const VemAi = () => {
  return (
    <section className={`container ${classes.vemAi}`}>
      <div className={classes.txt}>
        <h2 className={classes.titulo}>Vem ai</h2>
        <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
      </div>
      <div className={classes.img}>
        <img src={ImgSorvete} alt='3 casquinhas de sorvete' />
      </div>
      <div className={classes.sabores}>
        <h3>Nos sabores</h3>
        <ul className={classes.saboresLista}>
          <li>Chocolate</li>
          <li>Morango</li>
          <li>Caramelo</li>
        </ul>
      </div>
    </section>
  )
}

export default VemAi