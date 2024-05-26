import { FaUser, FaLock } from "react-icons/fa";

import Footer from "../../componentes/Footer/footer";
import Header from "../../componentes/Header/header";
import "./login.css";

const Login = () => {
  return (
    <>
      <Header />
      <div className={"backg"}>
        <div className={"circunferencia"}>
          <img src="\src\assets\img\image.png"></img>
        </div>
      </div>

      <div className="conteudo">
        <form>
          <h1>Login</h1>
          
          <div>
            <input type="email" placeholder="E-mail ou CNPJ" />
            <FaUser className="icon" />
          </div>
          
          <div>
            <input type="password" placeholder="Password" />
            <FaLock className="icon" />
          </div>

          <div className={"recall"}></div>
            <label>
              <input type="checkbox " />
              Lembre de mim

            </label>
            <a href = "#">Esqueceu a senha?</a>

          

          <button>Entrar</button>

          <div className="signup-link">
            <p>Não tem uma conta? <a href="#">Registrar</a></p>
          </div>
          <p>Ao continuar, você concorda em receber comunicações com ofertas. Confira nossa Declaraçao de Privacidade 
</p>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default Login;
