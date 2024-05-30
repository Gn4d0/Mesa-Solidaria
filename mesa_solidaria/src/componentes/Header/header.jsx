import "./cabe.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

import logo from "/src/assets/img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div>
        <Link to="/" className="logotipoENome">
          <img src={logo} className="logotipo" />
          <h1 className="nomeProjeto">Mesa Solidária</h1>
        </Link>
        <nav className="navbar">
          <ul className="list">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/cadastro">Cadastro</NavLink>
            </li>
            <li>
              <NavLink to="/produtos">Produtos</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="botoes">
        <button>Criar Conta</button>
        <button>Entrar</button>
      </div>
    </header>
  );
};

export default Header;
