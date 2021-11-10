import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Mapa from "./components/Mapa/Mapa";
import Footer from "./components/Footer/Footer";
import Texto from "./components/Texto/Texto";
import cogumelo from "./cogumelo.png";
// import cogumelo2 from "./cogumelo-azul.png"
const mapa = '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13818.880335381276!2d-51.1686816!3d-30.0161929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1636496219912!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>';
const endereco = "Andaraí, 531 - Porto Alegre"

function App() {
  return (
    <div className="App">
      <Header src={cogumelo}/>
      <div className="App-container">
      <Main src={cogumelo}/>
      <Texto/>
      <Mapa link={mapa} nome="Endereço DBC Company:"/>
      </div>
      <Footer endereco={endereco}/>
    </div>
  );
}

export default App;
