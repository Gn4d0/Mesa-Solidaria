import React from "react";
import { useState } from "react";
import Header from "../../componentes/Header/header";
import Footer from "../../componentes/Footer/footer";

const Cadastro = () => {
  const [tipoUsuario, setTipoUsuario] = useState("fisico");
  const handleChangeTipoUsuario = (event) => {
    setTipoUsuario(event.target.value);
  };

  return (
    <>
      <Header />
      <div>
        <h2>Sua Empresa Pede</h2>
        <p>
          Participe da Mesa Solídária Reduza o Desperdício Ofereça produtos e
          apoie pessoas em vulnerabilidade social. Cadastre sua empresa.
        </p>
        <p>Comece agora a revolução do seu negócio</p>
        <div>
          <h2>Cadastre-se</h2>
          <form>
            <div>
              <input
                name="tipoUsuario"
                id="fisico"
                type="radio"
                value="fisico"
                checked={tipoUsuario === "fisico"}
                onChange={handleChangeTipoUsuario}
              />
              <label class="form-check-label fw-bold" for="fisico">Pessoa Física</label>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Cadastro;
