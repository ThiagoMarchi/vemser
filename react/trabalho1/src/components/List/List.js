import styles from './List.module.css';

function List ({itens,localDosItens}){

  return(
    <div className={localDosItens === '' ? styles.teste : styles.teste1}>
      {itens.map(teste => {
        return(
        <a href={teste.href}>{teste.nome}</a>
        );
      })}
    
    </div>
  );
}

export default List;