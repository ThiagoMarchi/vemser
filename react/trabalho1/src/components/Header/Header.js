import List from "../List/List";
import styles from "./Header.module.css";

function Header ({src}){
  const itens = [{nome: 'Home',href:'#'},{nome: 'Sobre',href:'#'},{nome: 'Contato',href:'#'}];
  return(
    <div className={styles.header}>
      <div className={styles.logo}>
      <img src={src} alt='cogumelo'  className={styles.img}/>
      <span className={styles.span}>Melhores alunos do VemSer de todos os tempos!!</span>
      </div>
      <nav className={styles.nav}>
      <List itens={itens} />
      </nav>
    </div>
  );
}

export default Header;