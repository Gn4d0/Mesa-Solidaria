import styles from "./Footer.css";

const Footer = () => {
  return (
    <footer className={styles["rodape"]}>
      <nav>
        <a href="">Home</a>
        <a href="">Seja Parceiro</a>
        <a href="">Contatos</a>
        <span>2024 todos os direitos reservados</span>
      </nav>
    </footer>
  )
}

export default Footer;
