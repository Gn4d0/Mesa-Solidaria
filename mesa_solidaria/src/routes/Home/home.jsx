import "./Home.css";
import React from "react";
import Header from "../../componentes/Header/header";
import Footer from "../../componentes/Footer/footer";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className={"promo"}>
          <h1>Onde a economia encontra qualidade</h1>
          <h2>
            Acessível a todos, graça à nossa parceria com comércios locais!
          </h2>
          <button>Promoções</button>
          <div className={"circun"}>
            <img src="\src\assets\img\image.png"></img>
          </div>
        </div>

        <div className={"parceiros"}>
          <h1>Parceiros</h1>
          <img></img>
          <span>Atacadão</span>
          <img></img>
          <span>Mix Mateus</span>
          <img></img>
          <span>João e Jóia</span>
        </div>

        <div className={"carrosel"}>
          <img src="\src\assets\img\sardinha.png"></img>
          <h3>Sardinha Coqueiro</h3>
          <button>Adicionar</button>
          <img src="\src\assets\img\bolacha.png"></img>
          <h3>Bolacha</h3>
          <button>Adicionar</button>
          <img src="\src\assets\img\aguasanitaria.png"></img>
          <h3>Água Sanitária</h3>
          <button>Adicionar</button>
        </div>

        <div className={"comentario"}>
          <h1>O que falam da gente</h1>
          <span>Lorem</span>
          <p>Bruna Leal</p>
          <span>Lorem</span>
          <p>Bruna Leal</p>
          <span>Lorem</span>
          <p>Bruna Leal</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
