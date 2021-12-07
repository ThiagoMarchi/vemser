import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import {connect} from 'react-redux';
import { handleLogin } from '../store/actions/AuthActions'
import { useNavigate } from 'react-router-dom'
import { TextField, Button } from '@material-ui/core'

import './Login.css'

function Login({ auth, dispatch }) {
  const navigation = useNavigate()

  useEffect(() => {
    if(auth.auth) navigation('/')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  const formik = useFormik({
    initialValues: {
      usuario: '',
      senha: '',
    },
    onSubmit: values => {
      handleLogin(values, dispatch)
    },
  });

  return (
    <div className="form-login">
      <h1>Login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <TextField
            label="Login"
            id="usuario"
            name="usuario"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.usuario}
          />
        </div>
        <div>
          <TextField
            label="Senha"
            id="senha"
            name="senha"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.senha}
          />
        </div>
      <div>
        <Button variant="contained" color="primary" type="submit">Entrar</Button>
      </div>
    </form>  
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
});

export default connect(mapStateToProps)(Login)
