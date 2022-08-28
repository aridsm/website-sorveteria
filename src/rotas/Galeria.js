import React, { useState } from 'react'
import LayoutRotas from '../components/Utility/LayoutRotas'
import Modal from '../components/Utility/Modal';
import classes from './Galeria.module.css';

const galeria = [
  {
    img: 'gal1.webp',
    descricao: 'lorem',
    id: 'gal1'
  },
  {
    img: 'gal2.webp',
    descricao: 'lorem',
    id: 'gal2'
  },
  {
    img: 'gal3.webp',
    descricao: 'lorem',
    id: 'gal3'
  },
  {
    img: 'gal4.webp',
    descricao: 'lorem',
    id: 'gal4'
  },
  {
    img: 'gal5.webp',
    descricao: 'lorem',
    id: 'gal5'
  },
  {
    img: 'gal6.webp',
    descricao: 'lorem',
    id: 'gal6'
  },
  {
    img: 'gal7.webp',
    descricao: 'lorem',
    id: 'gal7'
  },
  {
    img: 'gal8.webp',
    descricao: 'lorem',
    id: 'gal8'
  },
  {
    img: 'gal9.webp',
    descricao: 'lorem',
    id: 'gal9'
  }
]

const Galeria = () => {

  const [modalShown, setModalShown] = useState(false);
  const [currentImageShown, setCurrentImageShown] = useState()

  const closeModal = () => {
    setModalShown(false)
  }

  const openModal = (imagem) => {
    setModalShown(true);
    setCurrentImageShown(imagem)
  }

  return (
    <>
    {modalShown && 
    <Modal onClose={closeModal}>
      <div className={classes.modal}>
        <div className={classes.img}>
          <img src={require(`../assets/${currentImageShown.img}`)} alt={currentImageShown.descricao} />
        </div>
        <p>{currentImageShown.descricao}</p>
      </div>
    </Modal>
    }
    <LayoutRotas titulo='Conheça nosso ambiente!' descricao='Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'>
      <ul className={classes.galeria}>
        {galeria.map(imagem => 
        <li key={imagem.id}>
          <button onClick={() => openModal(imagem)}>
            <img src={require(`../assets/${imagem.img}`)} alt={imagem.descricao}/>
          </button>
        </li> 
          )}
      </ul>
    </LayoutRotas>
    </>
  )
}

export default Galeria