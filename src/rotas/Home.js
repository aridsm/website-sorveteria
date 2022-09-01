import React, { useEffect } from 'react'
import Caracteristicas from '../components/Home/Caracteristicas'
import CategoriasProdutos from '../components/Home/CategoriasProdutos'
import Entrada from '../components/Home/Entrada'
import MaisVendidos from '../components/Home/MaisVendidos'
import VemAi from '../components/Home/VemAi'
import Head from '../components/Utility/Head'

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main>
      <Head title='Home' description='A melhor sorveteria da cidade!' />
      <Entrada />
      <CategoriasProdutos />
      <MaisVendidos />
      <VemAi />
      <Caracteristicas />
    </main>
  )
}

export default Home