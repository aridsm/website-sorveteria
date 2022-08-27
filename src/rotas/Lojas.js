import React from 'react';
import LayoutRotas from '../components/Utility/LayoutRotas';
import classes from './Lojas.module.css'

const Lojas = () => {
  return (
    <LayoutRotas titulo='Encontre a loja mais perto de você!' descricao='Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'>
      <ul className={classes.listaLojas}>
        <li>
          <h2>Bairro Lorem</h2>
          <span>Rua Ipsum - 123</span>
          <span>12345-123</span>
          <span>Telefone: +00 12 12345-1234</span>
        </li>

        <li>
          <h2>Bairro Lorem</h2>
          <span>Rua Ipsum - 123</span>
          <span>12345-123</span>
          <span>Telefone: +00 12 12345-1234</span>
        </li>

        <li>
          <h2>Bairro Lorem</h2>
          <span>Rua Ipsum - 123</span>
          <span>12345-123</span>
          <span>Telefone: +00 12 12345-1234</span>
        </li>
      </ul>
    </LayoutRotas>
  )
}

export default Lojas