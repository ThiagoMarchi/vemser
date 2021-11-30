import React from 'react'
import Img from '../images/erro-404.png'
import './NotFound.modules.css'

export default function NotFound() {
  return (
    <div className="div-img-not-found">
      <img src={Img} alt="404"/>
    </div>
  )
} 