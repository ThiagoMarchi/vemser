import logo from '../images/logo1.png';
import Menu from './Menu';
import './Header.modules.css';

const Header = () => {
  return (
    <div className="header-background">
      <header>
          <div className="conteudo_header">
            <a href="/">
              <img width="100px" src={logo} alt="logo" />
            </a>
            <a href="/">VemSer DC</a>
          </div>
          <Menu />
      </header>
    </div>
  )
}

export default Header;