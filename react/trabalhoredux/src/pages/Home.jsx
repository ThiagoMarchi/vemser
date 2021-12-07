import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { useFormik } from 'formik'
import { PUT_USER, POST_USER } from '../store/actions/Pessoa'

import { TextField, Button } from '@material-ui/core'
import './Home.css'

function Home({ auth, dispatch }) {

  const navigation = useNavigate()
  const { state } = useLocation()

  const formik = useFormik({
    initialValues: {
      idPessoa: '',
      nome: '',
      cpf: '',
      dataNascimento: '',
      email: ''
    },
    onSubmit: values => {

      if (values.idPessoa) {
        PUT_USER(values, auth, dispatch)
        return navigation('/pessoa')
      } 
      
      delete values.idPessoa
      POST_USER(values, auth, dispatch)
      return navigation('/pessoa')
    }
  })

  useEffect(() => {
    if(!auth.auth) navigation('/login')
    if(state) formik.setValues(state)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  const returnPessoas = (e) => {
    e.preventDefault()

    if(formik.values.idPessoa) {
      formik.resetForm()
      return navigation('/pessoa')
    }

    formik.resetForm()
  }

  return (
    <div className="cadastro-div">
      <h1>{formik.values.idPessoa ? 'Alteração' : 'Cadastro'}</h1>
      <form className="form-post" onSubmit={formik.handleSubmit} onReset={returnPessoas}>
        <div >
          <TextField label="Nome" variant="outlined" type="text" name="nome" value={formik.values.nome} onChange={formik.handleChange} required/>
        </div>
        <div>
          <TextField label="E-mail" variant="outlined" type="email" name="email" value={formik.values.email} onChange={formik.handleChange} required/>
        </div>
        <div>
          <TextField label="CPF" variant="outlined" type="text" name="cpf" value={formik.values.cpf} onChange={formik.handleChange} required/>
        </div>
        <div>
          <TextField label={formik.values.dataNascimento ? 'Data de Nascimento' : ''} type="date" variant="outlined" name="dataNascimento" value={formik.values.dataNascimento} onChange={formik.handleChange} required/>
        </div>
        <div>
          <Button color="primary" type="submit">{formik.values.idPessoa ? 'Alterar' : 'Cadastrar'}</Button>
          <Button color="secondary" type="reset"> {formik.values.idPessoa ? 'Cancelar' : 'Limpar'} </Button>
        </div>
      </form>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Home)
