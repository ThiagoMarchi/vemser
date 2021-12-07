import React, { useEffect } from 'react'
import Img from '../images/erro-404.gif'
import './NotFound.css'
import { useNavigate } from 'react-router-dom'

export default function NotFound() {

  const navigation = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigation('/')
    }, 4000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="div-img-not-found">
      <img src={Img} alt="404"/>
    </div>
  )
} 