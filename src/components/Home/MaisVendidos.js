import React, { lazy, Suspense } from 'react'
import { Link } from 'react-router-dom';
import produtos from '../../produtos/produtos';
import classes from './MaisVendidos.module.css';
import Loading from '../Utility/Loading'
const Slider = lazy(() => import('../Utility/Slider'));

const MaisVendidos = () => {

  
  return (
    <section className={classes.container}>
      <div className='container'>
        <h2>Mais vendidos</h2>
        <p>Os mais pedidos da semana!</p>
        <Suspense fallback={<Loading />}>
        <Slider items={produtos.maisVendidos}/>
        </Suspense>
        <Link to="/produtos" className='btn-amarelo'>Confira todos os produtos</Link>
      </div>
    </section>
  )
}

export default MaisVendidos