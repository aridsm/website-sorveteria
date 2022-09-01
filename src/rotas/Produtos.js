import React, { useEffect } from 'react'
import LayoutRotas from '../components/Utility/LayoutRotas';
import Slider from '../components/Utility/Slider';
import classes from './Produtos.module.css';
import produtos from '../produtos/produtos';
import Head from '../components/Utility/Head';

const Produtos = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <LayoutRotas titulo='O que você encontra aqui!' descricao=' Maecenas et feugiat augue. Ut sit amet nulla eu quam posuere'>
      <Head title='Produtos' description='O que temos aqui!' />
      <div className={classes.produtos}>

        <section>
          <h2>Picolés</h2>
          <Slider items={produtos.picoles}/>
        </section>

        <section>
          <h2>Sorvetes</h2>
          <Slider colorsBtn={{backgroundColor: '#FBEE7C', color: '#5f581d'}} items={produtos.sorvetes}/>
        </section>

        <section>
          <h2>Especiais</h2>
          <Slider   colorsBtn={{backgroundColor: '#53D6CE', color: '#1c5753'}} items={produtos.especiais}/>
        </section>

        <section>
          <h2>Açaís</h2>
          <Slider items={produtos.acais} colorsBtn={{backgroundColor: '#F5F5F5', color: 'grey'}}/>
        </section>
      </div>
    </LayoutRotas>
  )
}

export default Produtos