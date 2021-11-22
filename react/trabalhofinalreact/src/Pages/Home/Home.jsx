import React from "react";
import Ciencia from './Conteudo/Ciencia/Ciencia'
import Tecnologia from './Conteudo/Tecnologia/Tecnologia'
import Saude from './Conteudo/Saude/Saude'
import Politica from './Conteudo/Politica/Politica'
import './Home.modules.css'

export default function Home () {
  return (
    <div className='divDebug'>
      <div className="containerPrincipalHome" id="section">
        <Ciencia/>
        <Tecnologia/>
        <Saude/>
        <Politica/>
      </div>
      <div className="containerPrincipalHome" id="conteudo">
      </div>
    </div>
  )
}