import React from 'react'
import { Link } from 'react-router-dom'
import Head from '../components/Utility/Head'
import LayoutRotas from '../components/Utility/LayoutRotas'

const Rota404 = () => {
  return (
    <LayoutRotas titulo='Sentimos muito!' descricao='Esta página não existe...'>
      <Head title='Erro 404' description='Página não encontrada' />
        <Link to='/' className='btn-amarelo' style={{margin: '0 auto', display: 'table'}}>Voltar a página inicial</Link>
      </LayoutRotas>
  )
}

export default Rota404