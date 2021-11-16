import { useState } from 'react';

function Form() {
  let id = 1
  function CadastraUsuario(e) {
    e.preventDefault();
    const item = listUser.push({nome: nome, id: id})
    setListUser(item);
    id = id + 1;
  }

  const [nome, setNome] = useState();
  const [apelido, setApelido] = useState();
  const [listUser, setListUser] = useState([]);

  return (
    <>
      <h1>Meu Cadastro</h1>
      <form onSubmit={CadastraUsuario}>
        <div>
          <input onChange={(e) => setNome(e.target.value)} type="text" placeholder="Digite o seu nome" />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
      <div>
        {listUser.map(user => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </>
  );
}

export default Form;