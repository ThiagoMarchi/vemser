import { Link } from 'react-router-dom'
import api from "../api";
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import './Menu.modules.css'
import { PessoaContext } from '../context/PessoaContext';

const Menu = () => {
  const {handleLogout} = useContext<any>(AuthContext)

  const { setListPessoas }  = useContext(PessoaContext)

  const getListPessoas = async () => {
    const token = localStorage.getItem('token') ?? ''
    const {data} = await api.get('/pessoa', {
      headers: {
        "Authorization": token
      }
    })
    setListPessoas(data)
  }
  
  return (
    <nav >
      <ul>
        <div id="btnPessoa">
          <Link to='/pessoa' onClick={() => {getListPessoas()}}>
            <button>
              <li>Pessoa</li>
            </button>
          </Link>
          <Link to='/endereco'>
            <button>
              <li>Endereço</li>
            </button>
          </Link>
          <button className="btnBrown" onClick={handleLogout}><li>Sair</li></button>
        </div>
      </ul>
    </nav>
  )
}

export default Menu;