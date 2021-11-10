import styles from "./Mapa.module.css";

function Mapa ({link,nome}){
  return(
    <div className={styles.mapa}>
      <h4>{nome}</h4>    
      <div dangerouslySetInnerHTML={ {__html:  link}} />
    </div>
  );
}

export default Mapa;