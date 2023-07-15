import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";
import ContactIcons from './ContactIcons';
import Logo from './Logo'
import LogoSmall from '../assets/LogoSmall';

 
function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav data-bs-theme="dark"
             className="navbar
                        p-0
                        pe-2
                        ps-2
                        navbar-expand-lg
                        bg-transparent
                        fixed-top
                        background-blurred">
            <Link className="navbar-brand" to="/home">
                <LogoSmall className="logo_svg"/>
            </Link>
            <button
                className="navbar-toggler"
                data-bs-toggle="collapse"
                type="button"
                onClick={toggleMenu}
            >
                <span className="navbar-toggler-icon bg-transparent"></span>
            </button>
            <div
                className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            >
                <ul className="navbar-nav ms-auto p-0 fs-5 m-1 pe-4 me-5 text-center">
                    <li className="nav-item pe-2">
                        <Link
                            className="nav-link pe-2"
                            to="/about"
                            onClick={toggleMenu}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav-item pe-2 text-center">
                        <Link
                            className="nav-link pe-2 text-center"
                            to="/projects"
                            onClick={toggleMenu}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav-item pe-2" >
                        <Link className="nav-link pe-2 "
                            to="/skills"
                            onClick={toggleMenu}
                        >
                            Skills
                        </Link>
                    </li>
                    <li className="nav-item pe-2">
                        <Link className="nav-link pe-2"
                            to="/contacts"
                            onClick={toggleMenu}
                        >
                            Contacts
                        </Link>
                    </li>
                </ul>

            </div>
            {/* <span className="contacts-icon navbar-text ms-auto pe-4 d-none d-lg-block h2"
                  data-bs-toggle="collapse">
                <ContactIcons />
            </span> */}
        </nav>

    );
}

export default Navbar;
