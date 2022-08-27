import React from 'react'
import classes from './Contato.module.css'
import { ReactComponent as InstagramIcon } from '../assets/instagram.svg'
import { ReactComponent as FacebookIcon } from '../assets/facebook.svg'
import { ReactComponent as WhatsappIcon } from '../assets/whatsapp.svg'
import LayoutRotas from '../components/Utility/LayoutRotas'

const Contato = () => {
  return (
    <LayoutRotas titulo='Fale com a gente!' descricao='Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'>
      <form className={classes.form}>
        <div className={classes.inputField}>
          <label htmlFor='nome'>Nome completo</label>
          <input type='text' name='nome_completo' id='nome' placeholder='Ex: Ana de Souza' />
        </div>
        <div className={classes.inputField}>
          <label htmlFor='email'>Email de contato</label>
          <input type='text' name='email' id='email' placeholder='Ex: seuemail@email.com' />
        </div>
        <div className={`${classes.inputField} ${classes.inputFieldMensagem}`}>
          <label htmlFor='mensagem'>Sua mensagem</label>
          <textarea name='mensagem' id='mensagem' cols='30' placeholder='Ex: Ola. Gostaria de saber sobre...' ></textarea>
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