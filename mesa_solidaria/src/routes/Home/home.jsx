import "./Home.css";
import React from "react";
import Header from "../../componentes/Header/header";
import Footer from "../../componentes/Footer/footer";
import homemBanner from "/src/assets/img/image.png";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <div className="banner">
          <div>
            <p>Onde a economia encontra qualidade</p>
            <p>
              Acessível a todos, graça à nossa parceria com comércios locais!
            </p>
          </div>
          <div>
            <img src={homemBanner} />
          </div>
        </div>

        <div className="parceiros">
          <h3>Parceiros</h3>
          <ul>
            <li>
              <div>
                <p>Atacadão</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuhiISP1Db8A7nyun18110ezxIvca2__6uQ&s"
                  alt="Atacadão"
                />
              </div>
            </li>
            <li>
              <div>
                <p>Mix Mateus</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuhiISP1Db8A7nyun18110ezxIvca2__6uQ&s"
                  alt="Atacadão"
                />
              </div>
            </li>
            <li>
              <div>
                <p>João e Jóia</p>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFuhiISP1Db8A7nyun18110ezxIvca2__6uQ&s"
                  alt="Atacadão"
                />
              </div>
            </li>
          </ul>
        </div>

        <div className="carrosel">
          <ul>
            <li>
              <img src="\src\assets\img\sardinha.png"></img>
              <h3>Sardinha Coqueiro</h3>
              <button>Adicionar</button>
            </li>

            <li>
              <img src="\src\assets\img\bolacha.png"></img>
              <h3>Bolacha</h3>
              <button>Adicionar</button>
            </li>

            <li>
              <img src="\src\assets\img\aguasanitaria.png"></img>
              <h3>Água Sanitária</h3>
              <button>Adicionar</button>
            </li>
          </ul>
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
