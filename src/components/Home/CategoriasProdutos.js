import React from 'react'
import classes from './CategoriasProdutos.module.css'

const CategoriasProdutos = () => {
  return (
    <section className={classes.container}>
      <div className='container'>
        <ul className={classes.listaCategorias}>
          <li>Açaí</li>
          <li>Picolé</li>
          <li>Sorvete</li>
          <li>Especiais</li>
        </ul>
      </div>
    </section>
  )
}

export default CategoriasProdutos