import React from 'react'
import CategoriasProdutos from '../components/Home/CategoriasProdutos'
import Entrada from '../components/Home/Entrada'
import MaisVendidos from '../components/Home/MaisVendidos'
import VemAi from '../components/Home/VemAi'

const Home = () => {
  return (
    <main>
      <Entrada />
      <CategoriasProdutos />
      <MaisVendidos />
      <VemAi />
    </main>
  )
}

export default Home