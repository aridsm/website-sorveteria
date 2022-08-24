import React from 'react'
import classes from './LayoutRotas.module.css';

const LayoutRotas = ({ children, titulo, descricao }) => {
  return (
    <main className={classes.main}>
      <div className='container'>
        <div className={classes.tituloRotas}>
          <h1>{titulo}</h1>
          <p>{descricao}</p>
        </div>
        {children}
      </div>
    </main>
  )
}

export default LayoutRotas