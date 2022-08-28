import React from 'react'
import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const BackdropModal = ({onClose}) => {
    return (
        <div className={classes.backdrop} onClick={onClose}/>
    )
}

const ModalContent = ({children, onClose}) => {
    return (
        <>
        <button className={classes.btnClose} onClick={onClose}>x</button>
        <div className={classes.modalContainer}>
            <div className={classes.modalContent}>
            {children} 
            </div>
        </div>
        </>
    )
}

const Modal = ({children, onClose}) => {

    const modalElement = document.getElementById('modal')

  return (
    <>
    {ReactDOM.createPortal(<BackdropModal onClose={onClose}/>, modalElement)}
    {ReactDOM.createPortal(<ModalContent children={children} onClose={onClose}/>, modalElement)}
    </>
  )
}

export default Modal