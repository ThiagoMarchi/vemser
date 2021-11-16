import styles from './Informacoes.module.css'

function Informacoes ({nome,email,profissao}){
  return(
    <div className={styles.informacoes}>
      <div>Usuário: {nome} </div>
      <div>E-mail: {email}</div>
      <div>Profissão: {profissao}</div>
    </div>
  );
}

export default Informacoes;