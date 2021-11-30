import {AuthProvider} from './context/AuthContext'
import Routers from './routers'
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { PessoaProvider } from './context/PessoaContext';

function App() {
  return (
    <BrowserRouter>
      <PessoaProvider>
        <AuthProvider>
          <Header />
          <Routers />
          <Footer />
        </AuthProvider>
        </PessoaProvider>
    </BrowserRouter>
  );
}

export default App;
