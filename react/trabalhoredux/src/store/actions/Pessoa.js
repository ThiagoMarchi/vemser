import { api } from "../../api";
import { SET_LOADING } from './Loading'

export const POST_USER = async (values, auth, dispatch) => {
  SET_LOADING(true, dispatch)
  const token = auth.token

  await api.post('/pessoa', values, {
    headers: {
      'Authorization': token
    }
  }).then(resp => {
    const post = {
      type: 'POST_USER',
      data: resp.data
    }

    dispatch(post)
  }).finally(() => {
    SET_LOADING(false, dispatch)
  })
}

export const GET_USERS = async (auth, dispatch) => {
  SET_LOADING(true, dispatch)

  const token = auth.auth ? auth.token : ''
  await api.get('/pessoa', {
    headers: {
      'Authorization': token
    }
  }).then(resp => {
    const set_pessoas = {
      type: 'SET_USERS',
      data: resp.data
    }
  
    dispatch(set_pessoas)
  }).finally(() => {
    SET_LOADING(false, dispatch)
  })
}

export const PUT_USER = async (values, auth, dispatch) => {
  SET_LOADING(true, dispatch)
  const token = auth.token
  const body = {
    nome: values.nome,
    cpf: values.cpf,
    dataNascimento: values.dataNascimento,
    email: values.email
  }
  await api.put(`/pessoa/${values.idPessoa}`, body ,{
    headers: {
      'Authorization': token
    }
  }).then(resp => {

    const putUser = {
      type: 'PUT_USER',
      data: resp.data
    }

    dispatch(putUser)
  }).finally(() => {
    SET_LOADING(false, dispatch)
  })

}

export const DELETE_USER = async (idPessoa, auth, dispatch) => {
  SET_LOADING(true, dispatch)
  const token = auth.token

  await api.delete(`/pessoa/${idPessoa}`,{
    headers: {
      'Authorization': token
    }
  }).then(() => {

    const del = {
      type: 'DELETE_USER',
      idPessoa
    }

    dispatch(del)
  }).finally(() => {
    SET_LOADING(false, dispatch)
  })
}