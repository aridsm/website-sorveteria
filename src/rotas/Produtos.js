import React from 'react'
import Slider from '../components/Utility/Slider';
import classes from './Produtos.module.css'

const Produtos = () => {
  return (
    <main className='container'>

      <div className='titulo-rotas'>
        <h1>O que voce encontra aqui!</h1>
        <p>Lorem ipsum dolor sit amet lorem ipsum dolor sit amet</p>
      </div>

      <div className={classes.produtos}>
        <section>
          <h2>Açais</h2>
          <Slider />
        </section>

        <section>
          <h2>Picolés</h2>
          <Slider />
        </section>

        <section>
          <h2>Sorvetes</h2>
          <Slider />
        </section>

        <section>
          <h2>Especiais</h2>
          <Slider />
        </section>
      </div>
    </main>
  )
}

export default Produtos