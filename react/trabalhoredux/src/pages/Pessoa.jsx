import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { GET_USERS, DELETE_USER } from '../store/actions/Pessoa'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'

import { MdModeEdit } from 'react-icons/md'
import { AiFillDelete } from 'react-icons/ai'

import { Table, TableBody, TableHead, TableRow, TableCell,  withStyles, Button } from '@material-ui/core'

import './Pessoa.css'

function Pessoa({ dispatch, users, auth, state }) {

  const [pessoas, setPessoas] = useState([])
  const navigation = useNavigate()

  useEffect(() => {
    if(!auth.auth || auth.token === '') {
      navigation('/login')
    } else {
      if (users.length === 0) {
        atualizarUsers()
      } else {
        setPessoas(users)
      }
    }


  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[users, auth, dispatch])


  const editUser = (pessoa) => {
    navigation('/', { state: pessoa})
  }

  const deleteUser = (idPessoa) => {
    DELETE_USER(idPessoa, auth, dispatch)
  }

  const atualizarUsers = () => {
    GET_USERS(auth, dispatch)
  }

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      fontSize: 18,
    },
    body: {
      fontSize: 16,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <div className="container">
      <div className="pessoa-header">
        <h1>Pessoas</h1>
        <Button type="button" color="primary" onClick={() => atualizarUsers()}>Atualizar Tabela</Button>
      </div>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Nome</StyledTableCell>
            <StyledTableCell>Nascimento</StyledTableCell>
            <StyledTableCell>CPF</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Editar/Excluir</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {
            pessoas.map((e,i) => {
              return (
                <StyledTableRow key={i}>
                  <StyledTableCell>{e.idPessoa}</StyledTableCell>
                  <StyledTableCell>{e.nome}</StyledTableCell>
                  <StyledTableCell>{moment(e.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')}</StyledTableCell>
                  <StyledTableCell>{e.cpf}</StyledTableCell>
                  <StyledTableCell>{e.email}</StyledTableCell>
                  <StyledTableCell align="center">
                    <MdModeEdit className="edit" size={30} onClick={() => {editUser(e)}}/>
                    <AiFillDelete className="delete" size={30} onClick={() => {deleteUser(e.idPessoa)}}/>
                  </StyledTableCell>
                </StyledTableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </div>
  )
}


const mapStateToProps = state => ({
  auth: state.authReducer.auth,
  users: state.pessoaReducer.pessoas,
  state: state
});

export default connect(mapStateToProps, null)(Pessoa)
