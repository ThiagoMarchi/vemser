import List from "../List/List";
import styles from "./Footer.module.css"

function Footer ({endereco}){
  const itens = [{nome: 'Home', href:'#'},{nome: 'Sobre', href:'#'},{nome: 'Contato', href:'#'}];
  return(
    <div className={styles.footer}>
      <List itens={itens}/>
      <span>{endereco}</span>
    </div>
  );
}

export default Footer;