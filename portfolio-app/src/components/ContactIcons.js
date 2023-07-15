import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const ContactIcons = () => {
  return (
    <span className="contacts-icon">
        <a href="https://www.linkedin.com/in/mikhail-chekin/">
          <FaLinkedin className="contacts-icon me-2 h2" />
        </a>
        <a href="https://github.com/Chekinm">
          <FaGithubSquare className="contacts-icon me-2 h2" />
        </a>
        <a href="https://t.me/MikhailChekin">
          <FaTelegram className="contacts-icon me-2 h2" />
        </a>
      </span>
  )
}

export default ContactIcons