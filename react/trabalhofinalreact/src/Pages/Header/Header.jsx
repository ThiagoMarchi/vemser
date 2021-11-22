import React, {useState} from "react";
import '../../Components/DivPrincipal.modules.css'
import './Header.modules.css'
import { ImNewspaper } from 'react-icons/im'
import { FaHamburger } from 'react-icons/fa'
import Menu from "./Menu/Menu";
import voltarAoHome from "../../Services/Functions/voltarAoHome";

export default function Header () {

  const [height, setHeight] = useState('4rem')

  function abrirMenu() {
    setHeight(height === '4rem' ? '20rem' : '4rem')}

  return (
    <div className="divPrincipal" style = {{height: height}}>
      <a className="iconHeader" href="#Home">
        <ImNewspaper className="news"
        onClick={() => voltarAoHome()}
        />
        <FaHamburger className="hamb" 
          onClick = {() => abrirMenu()}
        />
        <h1 onClick={() => voltarAoHome()} >Home </h1>
      </a>
        <Menu />
    </div>
  )
}
