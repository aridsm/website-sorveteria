import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <nav className='container'>
        <Link to='/' className={classes.logo}>Sorveteria</Link>

        <ul className={classes.itensMenu}>
          <li><NavLink to='/produtos'>Produtos</NavLink></li>
          <li><NavLink to='/lojas'>Lojas</NavLink></li>
          <li><NavLink to='/galeria'>Galeria</NavLink></li>
          <li><NavLink to='/contato'>Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header