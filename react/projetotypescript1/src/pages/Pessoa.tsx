import api from "../api";
import './Pessoa.modules.css'
import { PessoaDTO } from "../model/PessoaDTO";
import { FormikHelpers, useFormik } from 'formik';
import { MdDelete } from 'react-icons/md'
import { AiFillEdit } from 'react-icons/ai'
import React, { useContext } from "react";
import { PessoaContext } from "../context/PessoaContext";
import moment from 'moment'


const Pessoa = () => {

  const { listPessoas, setListPessoas }  = useContext(PessoaContext)

  const getListPessoas = async () => {
    const token = localStorage.getItem('token') ?? ''
    const {data} = await api.get('/pessoa', {
      headers: {
        "Authorization": token
      }
    })
    setListPessoas(data)
  }

  async function excluirCadastro(pessoa: PessoaDTO) {
    const token = localStorage.getItem('token')
    await api.delete(`/pessoa/${pessoa.idPessoa}`, {
      headers: {
        "Authorization": token ?? ''
      }
    })

    getListPessoas()
    alert(`Usuario do ID ${pessoa.idPessoa} foi deletado`);
  }

  const formik = useFormik<PessoaDTO>({
    initialValues: {
      nome: '',
      email: '',
      dataNascimento: '',
      cpf: ''
    },
    onSubmit: async (
      values: PessoaDTO,
      {  resetForm }: FormikHelpers<PessoaDTO>
    ) => {
      const token = localStorage.getItem('token')

      const body = {
        nome: values.nome,
        email: values.email,
        dataNascimento: values.dataNascimento,
        cpf: values.cpf
      }
    
      if (values.idPessoa) {
        await api.put<PessoaDTO>(`/pessoa/${values.idPessoa}`, body, {
          headers: {
            "Authorization": token ?? ''
          }
        }).then(resp => {
          if(resp.status === 200) {
            alert(`Usuario atualizado ID: ${resp.data.idPessoa}`)
          }
        })
      } else {
        await api.post<PessoaDTO>('/pessoa', values, {
          headers: {
            "Authorization": token ?? ''
          }
        }).then(resp => {
          if(resp.status === 200) {
            alert(`Usuario inserido ID: ${resp.data.idPessoa}`)
          }
        })
      }

      getListPessoas()
      resetForm()
    }
  })

  return(
    <div className="containerPessoas">
      <div>
      <h2>Cadastrar</h2>
        <form>
          <div>
            <label htmlFor="nome">Nome</label>
            <input type="text" id="nome" name="nome" value={formik.values.nome} onChange={(e) => {formik.setFieldValue('nome', e.target.value)}} placeholder="Digite seu nome" />
          </div>

          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email "id="email" name="email" value={formik.values.email} onChange={(e) => {formik.setFieldValue('email', e.target.value)}} placeholder="Digite seu e-mail" />
          </div>

          <div>
            <label htmlFor="dataNascimento">Data de Nascimento</label>
            <input type="date" id="dataNascimento" name="dataNascimento" value={formik.values.dataNascimento} onChange={(e) => {formik.setFieldValue('dataNascimento', e.target.value)}} placeholder="data de Nascimento" />
          </div>

          <div>
            <label htmlFor="cpf">CPF</label>
            <input type="text" id="cpf" name="cpf" value={formik.values.cpf} onChange={(e) => {formik.setFieldValue('cpf', e.target.value)}} placeholder="Digite seu CPF" />
          </div>

          <div className="buttons-forms">
            <button type="button" onClick={(e) =>{
              e.preventDefault()
              formik.submitForm()
            }}>{formik.values.idPessoa ? 'Atualizar' : 'Cadastrar' }</button>
            <button type="button" onClick={() => {formik.resetForm()}}>Limpar</button>
          </div>
        </form>
    </div>

    <div className="tableContainerPessoas">
    
      <div className="div-button-list-users">

        <button type="button"className="button-list-usuarios" onClick={() => getListPessoas()}>
          {listPessoas.length === 0 ? 'Exibir Usuarios' : 'Atualizar Usuarios'}
        </button>
      </div>
      
      
      {listPessoas.map((p, i) => (
        <div key={i}>
        <table >
            <thead>
              <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>E-mail</th>
                <th>CPF</th>
                <th>Data de Nascimento</th>
                <th> </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>  {p.idPessoa}</td>
                <td>  {p.nome}</td>
                <td>  {p.email}</td>
                <td>  {p.cpf}</td>
                <td>  {moment(p.dataNascimento, 'YYYY-MM-DD').format('DD/MM/YYYY')}</td>
                <td> 
                  <div>
                    <button> 
                      <AiFillEdit onClick={()=> formik.setValues(p)} className="edit"/> </button>
                    <button onClick={()=> excluirCadastro(p)}> 
                      <MdDelete className="delete"/> 
                      </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </div>
    
    </div>
  )
}

export default Pessoa;