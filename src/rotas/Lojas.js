import React from 'react';
import Head from '../components/Utility/Head';
import LayoutRotas from '../components/Utility/LayoutRotas';
import classes from './Lojas.module.css'

const Lojas = () => {
  return (
    <LayoutRotas titulo='Encontre a loja mais perto de você!' descricao='Mauris nec magna vulputate sem elementum lobortis'>
      <Head title='Lojas' description='Encontre a Sorveteria mais perto da sua casa!' />
      <ul className={classes.listaLojas}>
        <li>
          <h2>Bairro Vivamus finibus</h2>
          <span>Rua Duis laoreet - 123</span>
          <span>76482-153</span>
          <span>Telefone: +00 12 12345-1234</span>
        </li>

        <li>
          <h2>Bairro Maecenas</h2>
          <span>Rua Elit Risus - 321</span>
          <span>74819-434</span>
          <span>Telefone: +00 12 12345-1234</span>
        </li>

        <li>
          <h2>Bairro Etiam sodales </h2>
          <span>Rua Donec enim - 789</span>
          <span>19484-374</span>
          <span>Telefone: +00 12 12345-1234</span>
        </li>
      </ul>
    </LayoutRotas>
  )
}

export default Lojas