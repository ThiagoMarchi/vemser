import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import './Header.css'
import Img from '../images/logo1.png'
import { Button } from '@material-ui/core'

function Header({ auth }) {

  return (
    <div className="header">

      <div className="conteudo_header">
        <a href="/">
          <img src={Img} alt="" />
        </a>
        <a href="/">VemSer DC</a>
      </div>

      <nav>
        <ul>
          {auth.auth && (
            <>
              <li>
                <Button variant="contained" color="primary">
                  <Link to='/'>Cadastro</Link>
                </Button>
              </li>
                
              <li>
                <Button variant="contained" color="primary">
                  <Link to='/pessoa'>Pessoas</Link>
                </Button>
              </li>

              <li>
                <Button variant="contained" color="primary">
                  <Link to='/endereco'>Endereço</Link>
                </Button>
              </li>
            </>
          )}

          {
            !auth.auth && (
              <li>
                <Button variant="contained" color="secondary">
                  <Link to='/login'>Login</Link>
                </Button>
              </li>
            )
          }
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Header)
