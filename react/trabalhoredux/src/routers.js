import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Endereco from "./pages/Endereco";
import Pessoa from "./pages/Pessoa";
import Loading from './components/Loading'
import { connect } from 'react-redux'

function Routers({ loading }) {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pessoa" element={<Pessoa />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {
        loading && (
          <Loading />
        )
      }
    </BrowserRouter>
  )
}

const mapStateToProps = state => ({
  loading: state.loadingReducer.loading
})

export default connect(mapStateToProps)(Routers)
