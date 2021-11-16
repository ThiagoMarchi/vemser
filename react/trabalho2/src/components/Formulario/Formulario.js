import { useState } from 'react';
import Informacoes from '../Informacoes/Informacoes';
import styles from './Formulario.module.css';
function Formulario(){
  
  const [nome, setNome] = useState();
  const [email,setEmail] = useState();
  const [profissao,setProfissao] = useState();  
  const [cadastroValido,setCadastroValido] = useState(true);
  const [listaTrabalhadores, setListaTrabalhadores] = useState([]);

  function validaCadastro(event){
    event.preventDefault();
    if(nome.length && email.length && profissao.length){
      setCadastroValido(true);
      setListaTrabalhadores([...listaTrabalhadores,{nome: nome, email: email, profissao: profissao}]);
    } else{
      setCadastroValido(false);
    }
  }

  return(
    <>

    <h1>Trabalhadores</h1>

    <form className={styles.formulario}>
        <input type='text' placeholder='Digite seu nome completo' value={nome} onChange={(event) => setNome(event.target.value)}/>
        <input type='email' placeholder='Digite seu e-mail' value={email} onChange={(event) => setEmail(event.target.value)} />
        <input type='text' placeholder='Digite sua profissão' value={profissao} onChange={(event) => setProfissao(event.target.value)} />
    </form>

    <button type='submit' onClick={validaCadastro}>Cadastrar</button>
    {!cadastroValido && (
      <p>Por favor preencha todos os campos!</p>
    )}

    <ul className={styles.listaTrabalhadores}>
      {listaTrabalhadores.map((trabalhador) => 
        (
          <li className={styles.trabalhador}>          
            <button>Excluir</button>
            <Informacoes nome={trabalhador.nome} email={trabalhador.email} profissao={trabalhador.profissao} />
          </li>
        )
      )}
    </ul>

    </>
  );
}

export default Formulario;