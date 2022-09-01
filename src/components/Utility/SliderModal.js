import React from 'react'
import Modal from './Modal'
import classes from './SliderModal.module.css'

const SliderModal = ({onClose, currentItemModal}) => {
  return (
    <Modal onClose={onClose}>
    <div className={classes.modal}>
      <div className={classes.imgModal}>
        <img src={require(`../../assets/img-produtos/${currentItemModal.img}.webp`)} alt={currentItemModal.nome}/>
      </div>
      <div className={classes.infosModal}>
        <h3>{currentItemModal.nome}</h3>
        <p>{currentItemModal.descricao}</p>
      </div>
        {currentItemModal.sabores && 
        <section className={classes.sabores}>
          <p>Sabores</p>
          <ul>
            {currentItemModal.sabores.map(sabor =>
              <li key={sabor}>{sabor}</li>
              )}
          </ul>
        </section>
        }
    </div>
    </Modal>
  )
}

export default SliderModal