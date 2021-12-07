import { api } from "../../api";
import {SET_LOADING } from './Loading'

export const handleLogin = async(values, dispatch) => {
  SET_LOADING(true, dispatch)
  const {data} = await api.post('/auth', values);
  if (data) {
    // localStorage.setItem('token', data);
    const logado = {
      type: 'SET_LOGIN',
      token: data,
      auth: true,
      loading: false
    }
    dispatch(logado);

    SET_LOADING(false,dispatch)
  } else {
    alert('Deu erro no login');
  }
}