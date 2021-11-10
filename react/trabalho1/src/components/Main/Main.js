import Cogumelo from "../Cogumelo/Cogumelo";
import styles from "./Main.module.css";

function Main ({src}){
  return(
    <div>
      <h1 className={styles.titulo}>Estamos aprendendo HTML e CSS com o melhor professor de todos</h1>
      <div className={styles.listaCogumelos}>
      <Cogumelo src={src} nome="Cogumelo Up" width='130px'/>
      <Cogumelo src={src} nome="Cogumelo Up2" width='130px'/>
      <Cogumelo src={src} nome="Cogumelo Up3" width='130px'/>
      </div>
    </div>
  );
}

export default Main;