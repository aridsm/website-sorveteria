import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Entrada.module.css'

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <div className={classes.detalhe}></div>
      <div className={classes.principal}>
        <p className={classes.funcionamento}>Segunda a sexta - das 15h as 21h / SABADO E DOMINGO - 15h as 23h </p>
        <h1>Lorem <span>i</span><span>p</span><span>s</span><span>u</span><span>m</span> <br /> dolor sit amet</h1>
        <p className={classes.descricao}>All the Lorem Ipsum generators on the <br />
          Internet tend to repeat</p>
        <Link to='/lojas'>Encontre a loja mais perto de voce --</Link>
      </div>
      <ul className={classes.caracts}>
        <li>
          lorem lorem ipsum ipsum
        </li>
        <li>
          lorem lorem ipsum ipsum
        </li>
        <li>
          lorem lorem ipsum ipsum
        </li>
      </ul>
    </section>
  )
}

export default Entrada