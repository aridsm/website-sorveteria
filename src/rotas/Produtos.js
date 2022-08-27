import React from 'react'
import LayoutRotas from '../components/Utility/LayoutRotas';
import Slider from '../components/Utility/Slider';
import classes from './Produtos.module.css';
import produtos from '../produtos/produtos';

const Produtos = () => {
  return (
    <LayoutRotas titulo='O que você encontra aqui!' descricao='Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'>

      <div className={classes.produtos}>

        <section>
          <h2>Picolés</h2>
          <Slider colorsBtn={{backgroundColor: '#FBEE7C', color: '#5f581d'}} items={produtos.picoles}/>
        </section>

        <section>
          <h2>Sorvetes</h2>
          <Slider colorsBtn={{backgroundColor: '#53D6CE', color: '#1c5753'}} items={produtos.sorvetes}/>
        </section>

        <section>
          <h2>Especiais</h2>
          <Slider colorsBtn={{backgroundColor: '#F5F5F5', color: 'grey'}} items={produtos.especiais}/>
        </section>

        <section>
          <h2>Açaís</h2>
          <Slider  items={produtos.acais}/>
        </section>
      </div>
    </LayoutRotas>
  )
}

export default Produtos