import Header from "../../componentes/Header/header";
import "./login.css";

const Login = () => {
  return (
    <>
      <Header />
      <div className={["miolo"]}>
        <div>
          <svg>
            <img>
              <h1>Sua empresa pede</h1>
              <h2>
                Com o Mercado Solidário, você conecta sua loja a milhões de
                novos clientes, expande sua área de entrega e vende muito mais.
                O Mercado Solidário também investe muito em marketing, o que
                atrai cada vez mais clientes para a plataforma e,
                consequentemente, muito mais vendas para as lojas parceiras.
              </h2>
              <span>Comece agora a revolução do seu negocio</span>
            </img>
          </svg>
        </div>

        <div className={["caixalogin"]}>
          <h1>Login</h1>
          <form>E-mail ou Cnpj</form>
          <form>Passowrd</form>
          <link>Esqueci minha senha</link>
          <buton>Loguin</buton>
          <link>Não tenho conta? cadastre-se</link>
          <span>
            Ao continuar, você concorda em receber comunicações com ofertas.
            Confira nossa Declaraçao de Privacidade
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
