import {useState} from 'react';

function Condicional() {
  const [email, setEmail] = useState('caio');
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    console.log(email)
  }

  return (
    <>
      <h2>Cadastre seu e-mail</h2>
      <form>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Digite seu e-mail" />
        <button onClick={enviarEmail} type="submit">Enviar e-mail</button>
      </form>
      {userEmail && (
        <div>
          <p>{email}</p>
        </div>
      )}
    </>
  );
}

export default Condicional;