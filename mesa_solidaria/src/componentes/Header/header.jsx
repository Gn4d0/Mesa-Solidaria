import "/src/componentes/Header/cabe.css";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className={"navbar"}>
      <container>
        <nav className={"navbar"}></nav>
        <Link to="/">
          <img src="\src\assets\img\logo.png"></img>
        </Link>
        <ul className={"list"}>
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
      </container>
      <div>
        <button>Criar Conta</button>
        <button>Entrar</button>
      </div>
    </nav>
  );
};

export default Header;
