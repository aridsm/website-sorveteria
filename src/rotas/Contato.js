import React from 'react'
import classes from './Contato.module.css'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg'
import { ReactComponent as WhatsappIcon } from '../assets/whatsapp.svg'
import LayoutRotas from '../components/Utility/LayoutRotas'
import useInput from '../hooks/useInput'

const Contato = () => {
  

  const handleEmailValidation= (value) => {
    const rgxEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return rgxEmail.test(value)
  }

  const handleNomeValidation = (value) => {
    return value.trim().length >= 3;
  }

  const handleMessageValidation = (value) => {
    return value.trim().length > 20;
  }

  const {value: nomeValue, handleChange: changeNome, handleBlur: blurNome, error: nomeError, valueIsValid: nomeValid, setValue: setNome} = useInput(handleNomeValidation)
  const {value: emailValue, handleChange: changeEmail, handleBlur: blurEmail, error: emailError, valueIsValid: emailValid, setValue: setEmail} = useInput(handleEmailValidation)
  const {value: messageValue, handleChange: changeMessage, handleBlur: blurMessage, error: messageError, valueIsValid: messageValid, setValue: setMessage} = useInput(handleMessageValidation)


  const submitEmail = (e) => {
    e.preventDefault();

    if (nomeValid && emailValid && messageValid) {

      setNome('')
      setEmail('')
      setMessage('')
      return
    }

    blurNome();
    blurEmail();
    blurMessage();
  }

  return (
    <LayoutRotas titulo='Fale com a gente!' descricao='Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'>
      <form className={classes.form} onSubmit={submitEmail}>
        <div className={`${classes.inputField} ${nomeError ? classes.error : ''}`}>
          <label htmlFor='nome'>Nome completo</label>
          <input type='text' value={nomeValue} onChange={changeNome} onBlur={blurNome} name='nome_completo' id='nome' placeholder='Ex: Ana de Souza' />
          {nomeError && <p>Digite seu nome corretamente.</p>}
        </div>
        <div className={`${classes.inputField} ${emailError ? classes.error : ''}`}>
          <label htmlFor='email'>Email de contato</label>
          <input type='email' value={emailValue} onChange={changeEmail} onBlur={blurEmail} name='email' id='email' placeholder='Ex: seuemail@email.com' />
          {emailError && <p>O valor nao corresponde a um email.</p>}
        </div>
        <div className={`${classes.inputField} ${classes.inputFieldMensagem} ${messageError ? classes.error : ''}`}>
          <label htmlFor='mensagem'>Sua mensagem</label>
          <textarea name='mensagem' value={messageValue} onChange={changeMessage} onBlur={blurMessage} id='mensagem' cols='30' placeholder='Ex: Olá. Gostaria de saber sobre...' ></textarea>
          {messageError && <p>A mensagem deve possuir, ao menos, 20 caracteres.</p>}
        </div>
        <button type='submit' className={`btn-amarelo ${classes.btnEnviar}`}>Enviar mensagem</button>
      </form>

      <address className={classes.address}>
        <ul>
          <li>Email: contato@contato.com</li>
          <li>Telefone: +00 12 12345-1234</li>
          <li className={classes.redesSociais}>
            <a href='/' aria-label='acessar instagram'><InstagramIcon /></a>
            <a href='/' aria-label='acessar facebook'><FacebookIcon /></a>
            <a href='/' aria-label='acessar whatsapp'><WhatsappIcon /></a>
          </li>
        </ul>
      </address>
    </LayoutRotas>
  )
}

export default Contato