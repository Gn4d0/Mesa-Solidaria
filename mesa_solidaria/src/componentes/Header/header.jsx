import styles from "./Header.css";

function Header() {
  return (
    <header className={styles.header}>
      <span> Mesa Solidária </span>
      <nav>
        <a href="">Home</a>
        <a href="">Cadastro</a>
        <a href="">Produtos</a>
        <a href="">Carrinho</a>
      </nav>
    </header>
  )
}

export default Header;
