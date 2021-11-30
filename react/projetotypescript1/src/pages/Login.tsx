import { Formik, FormikHelpers, Form, Field } from 'formik';
import {AuthContext} from '../context/AuthContext';
import {useContext, useEffect} from 'react';
import { LoginDTO } from '../model/LoginDTO'
import './Login.modules.css'
import { useNavigate } from 'react-router';

const Login = () => {

  const navigate = useNavigate();
  const {handleLogin, auth} = useContext<any>(AuthContext);

  useEffect(() => {
    if(auth){
      navigate('/pessoa')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  return(
    <div className="container">
      <h1>Entrar</h1>
      <Formik className="formik"
        initialValues={{
          usuario: '',
          senha: ''
        }}
        onSubmit={(
          valores: LoginDTO,
          { setSubmitting }: FormikHelpers<LoginDTO>
        ) => {
          handleLogin(valores)
        }}
      >
        <Form className="containerLogin">
          <div >
            <div className="form-login">
              <label htmlFor="usuario">Usuário: </label>
              <Field id="usuario" name="usuario" placeholder="Digite o usuário" />
            </div>
            <div className="form-login">
              <label htmlFor="senha">Senha: </label>
              <Field id="senha" name="senha" placeholder="Digite uma senha" type="password"/>
            </div>
          </div>

          <button type="submit">Entrar</button>
        </Form>
      </Formik>
    </div>)
}

export default Login;