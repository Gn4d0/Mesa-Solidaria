import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className={"social_list"}>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaWhatsapp/></li>
        <p>2024 Todos os direitos reservados</p>
      </ul>
      
      
    </footer>
    
  )
}

export default Footer;
