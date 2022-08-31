import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import classes from './Entrada.module.css'
import ImgEntrada from "../../assets/sorvete-entrada.webp"
import { ReactComponent as ArrowSvg } from '../../assets/arrow-right.svg'
import "aos/dist/aos.css"
import AOS from 'aos'

const Entrada = () => {

  useEffect(() => {
    AOS.init({
      duration: 800
    })
  }, [])

  return (
    <section className={classes.entrada}>
      <div className={classes.container}>
        <div className={classes.principal} data-aos="fade-down">
          <p className={classes.funcionamento}>Segunda a sexta - 15h as 21h / Sábado e domingo - 15h as 23h </p>
          <h1>Lorem <span>i</span><span>p</span><span>s</span><span>u</span><span>m</span> <br /> dolor sit amet</h1>
          <p className={classes.descricao}>All the Lorem Ipsum generators on the <br />
            Internet tend to repeat</p>
          <Link to='/lojas'>Encontre a loja mais perto de você <ArrowSvg/></Link>
        </div>
      </div>
      <div className={classes.img}data-aos="fade-up">
          <img src={ImgEntrada} alt='Casquinha de sorvete' />
      </div>
      <ul className={classes.caracts} data-aos="fade-down">
        <li>
        Sed augue erat, congue et
        </li>
        <li>
        Aliquam elementum arcu ut
        </li>
        <li>
        Duis pharetra maximus lorem
        </li>
      </ul>
    </section>
  )
}

export default Entrada