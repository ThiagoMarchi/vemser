import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Menu from './components/Menu';
import Footer from './components/Footer';

function App(){

  return (
    <Router>
      <Menu Link={Link}/>
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/contato" element={<Contato />}/>
      </Routes>
      <Footer Link={Link}/>
    </Router>
  );
}

export default App;
