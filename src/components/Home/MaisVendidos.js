import React from 'react'
import { Link } from 'react-router-dom';
import Slider from '../Utility/Slider';
import classes from './MaisVendidos.module.css';

const MaisVendidos = () => {
  return (
    <section className={classes.container}>
      <div className='container'>
        <h2>Mais vendidos</h2>
        <Slider/>
        <Link to="/produtos" className='btn-amarelo'>Confira todos os produtos</Link>
      </div>
    </section>
  )
}

export default MaisVendidos