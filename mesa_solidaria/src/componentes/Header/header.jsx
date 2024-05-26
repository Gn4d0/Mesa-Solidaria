import '/src/componentes/Header/cabe.css'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';



const Header = () => {
  return (
    <div>
      <header className={"cabeca"}>
        <Link to="/">
          <span>
            <img src=""></img>
          </span>
        </Link>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cadastro">Cadastro</NavLink>
          <NavLink to="/produtos">Produtos</NavLink>
        </nav>
        <button className="criar">Criar Conta</button>
        <button className="Entrar">Entrar</button>
      </header>
    </div>
  );
};

export default Header;
