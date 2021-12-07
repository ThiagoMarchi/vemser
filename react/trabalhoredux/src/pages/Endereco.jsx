import React, {useState, useEffect} from 'react'
import axios from "axios";
import './Endereco.css'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

function Endereco({ auth }) {
  const [cepValue, setCepValue] = useState('')
  const [info, setInfos] = useState();

  const navigation = useNavigate()

  useEffect(() => {
    if(!auth.auth) navigation('/login')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [auth])

  function retornarCep(cep) {
    if(!cep) return
    let url = `https://viacep.com.br/ws/${cep}/json/`
    axios.get(url)
      .then(resp =>{
        setInfos(resp.data)
      })
      .catch(err => {
        alert('Algo deu errado, confira o CEP digitado!')
      }) 
  }

  return (
    <>
      <div className="div-input-cep">
        <input className="input-cep-find"type="text" value={cepValue} onChange={(e => setCepValue(e.target.value))}/>
        <button onClick={() => retornarCep(cepValue)}>Buscar CEP</button>

      </div>

      <h1>Endereço</h1>
      
      <div>
        {info && (
          <div className="result-input-cep">
            <div>
              <p>Rua</p>
              <p>{info.logradouro.length > 0 ? info.logradouro : '-'}</p>
            </div>
            <div>
              <p>Bairro</p>
              <p>{info.bairro.length > 0 ? info.bairro : '-'}</p>
            </div>
            <div>
              <p>Localidade</p>
              <p>{info.localidade.length > 0 ? info.localidade : '-'}</p>
            </div>
            <div>
              <p>UF</p>
              <p>{info.uf.length > 0 ? info.uf : '-'}</p>
            </div>
            <div>
              <p>DDD</p>
              <p>{info.ddd.length > 0 ? info.ddd : '-'}</p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  auth: state.authReducer.auth
})

export default connect(mapStateToProps)(Endereco)
