import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = () => {

  return (
    <header className={classes.header}> 
      <nav className='container'>
        <Link to='/' className={classes.logo}>Sorveteria</Link>

        <ul className={classes.itensMenu}>
          <li><NavLink to='/produtos' className={({isActive}) => isActive ? classes.active : ''}>Produtos</NavLink></li>
          <li><NavLink to='/lojas' className={({isActive}) => isActive ? classes.active : ''}>Lojas</NavLink></li>
          <li><NavLink to='/galeria' className={({isActive}) => isActive ? classes.active : ''}>Galeria</NavLink></li>
          <li><NavLink to='/contato' className={({isActive}) => isActive ? classes.active : ''}>Contato</NavLink></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header