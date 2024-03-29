import styles from "./Cogumelo.module.css"

function Cogu({src,nome,width}){
  return(
    <div className={styles.cogumelo}>
      <img src={src} width={width} alt={nome}/>
      <p>{nome}</p>
    </div>
  )
}

export default Cogu;