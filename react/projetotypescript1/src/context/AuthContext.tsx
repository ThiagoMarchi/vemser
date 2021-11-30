import React, { createContext, useState, useEffect } from "react";
import api from '../api';
import {LoginDTO} from '../model/LoginDTO';
import alterarStatus from "../services/functions/alterarStatus";

const AuthContext = createContext({});

const AuthProvider: React.FC<any> = ({ children }) => {
  useEffect(() => {
  }, [])

  const handleLogin = async(usuario: LoginDTO) => {
    try{
      const {data} = await api.post('/auth', usuario);
      localStorage.setItem('token', data);
      api.defaults.headers.common['Authorization'] = data;
      setAuth(true);
      alterarStatus()
    }catch(e) {
      alert("Senha ou usuario incorreto")
      setAuth(false)
    }    
  }

  const handleLogout = () => {
    localStorage.setItem('token', '');
    api.defaults.headers.common['Authorization'] = '';
    window.location.href = '/'
    setAuth(false);
  }
  
  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value ={{ auth, handleLogin, handleLogout, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider}