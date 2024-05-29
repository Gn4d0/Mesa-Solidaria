import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <ul className={"social_list"}>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaWhatsapp/></li>
        <p>2024 todos os direitos reservados</p>
      </ul>
      
    </footer>
    
  )
}

export default Footer;
