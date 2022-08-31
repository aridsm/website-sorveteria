import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Footer.module.css'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg'
import { ReactComponent as WhatsappIcon } from '../assets/whatsapp.svg'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={`container ${classes.container}`}>
        <nav className={classes.navMenuFooter}>
          <p className={classes.titulosMenu}>Menu</p>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/produtos'>Produtos</Link></li>
            <li><Link to='/lojas'>Lojas</Link></li>
            <li><Link to='/galeria'>Galeria</Link></li>
            <li><Link to='/contato'>Contato</Link></li>
          </ul>
        </nav>
        <div className={classes.iconsMade}>
        <a href="https://www.flaticon.com/packs/ice-cream-menu-2" title="Ice Cream Menu icons">Icons created by tulpahn - Flaticon</a>
        </div>
        <address className={classes.contato}>
          <p className={classes.titulosMenu}>Contato</p>
          <ul>
            <li>Email: contato@contato.com</li>
            <li>Telefone: +00 12 12345-1234</li>
            <li className={classes.redesSociais}>
              <a href='/' aria-label='acessar instagram'><InstagramIcon /></a>
              <a href='/' aria-label='acessar facebook'><FacebookIcon /></a>
              <a href='/' aria-label='acessar whatsapp'><WhatsappIcon /></a>
            </li>
          </ul>
        </address>
      </div>
      <div className={classes.madeBy}>
        Projeto feito por <a href='https://github.com/aridsm'>Ariane Morelato</a>
      </div>
    </footer>
  )
}

export default Footer