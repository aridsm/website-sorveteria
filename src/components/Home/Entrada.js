import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Entrada.module.css'
import { ReactComponent as IconArrow } from '../../assets/arrow-right.svg'
import {ReactComponent as SvgStar} from "../../assets/star.svg"

const Entrada = () => {
  return (
    <section className={classes.entrada}>
      <div className={classes.detalhe}><SvgStar/></div>
      <div className={classes.detalhe}><SvgStar/></div>
      <div className={classes.detalhe}><SvgStar/></div>
      <div className={classes.principal}>
        <p className={classes.funcionamento}><span>Segunda a sexta - das 15h as 21h</span> / <span>Sabado e domingo - 15h as 23h</span> </p>
        <h1>Lorem <span>i</span><span>p</span><span>s</span><span>u</span><span>m</span> <br /> dolor sit amet</h1>
        <p className={classes.descricao}>All the Lorem Ipsum generators on the <br />
          Internet tend to repeat</p>
        <Link to='/lojas'>Encontre a loja mais perto de voce <IconArrow /></Link>
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