import Style from "./Footer.css"

function Footer() {
  return (
    <footer class={Style.footer}>
      <nav>
        <a href="">Home</a>
        <a href="">Seja Parceiro</a>
        <a href="">Contatos</a>
        <span>2024 todos os direitos reservados</span>
      </nav>
    </footer>
  );
}

export default Footer;
