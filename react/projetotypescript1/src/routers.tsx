import {
  Routes,
  Route
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/Login';
import Pessoa from './pages/Pessoa';
import Endereco from './pages/Endereco';
import NotFound from './pages/NotFound';

const Routers = () => {
  return (
      <AuthProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/pessoa' element={<Pessoa />} />
            <Route path="/endereco" element={<Endereco/>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
      </AuthProvider>
  )
}

export default Routers;