import React from 'react'
import LayoutRotas from '../components/Utility/LayoutRotas'
import classes from './Galeria.module.css'

const Galeria = () => {
  return (
    <LayoutRotas titulo='Conheça nosso ambiente!' descricao='Lorem ipsum dolor sit amet lorem ipsum dolor sit amet'>
      <ul className={classes.galeria}>
        <li>
          <button>
            img
          </button>
        </li>
        <li>
          <button>
            img
          </button>
        </li>
        <li>
          <button>
            img
          </button>
        </li>
        <li>
          <button>
            img
          </button>
        </li>
        <li>
          <button>
            img
          </button>
        </li>
        <li>
          <button>
            img
          </button>
        </li>

        <li>
          <button>
            img
          </button>
        </li>
        <li>
          <button>
            img
          </button>
        </li>
      </ul>
    </LayoutRotas>
  )
}

export default Galeria