import React, { useState, useEffect } from "react";
import { Button } from "../Button";
import { Link } from "react-router-dom";
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import { fa-typo3 } from '@fortawesome/free-solid-svg-icon';
import "./Navbar.css";

function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClicked(!clicked);
    const closeMobileMenu = () => setClicked(false);

    const showButton = () => {
    if (window.innerWidth <= 960) {
        setButton(false);
    } else {
        setButton(true);
    }
};

    useEffect(() => {
    showButton();
}, []);

window.addEventListener("resize", showButton);

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    EcoTripulantes
                    <i class="fab fa-typo3" />
                </Link>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked  ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                <li className="nav-item">
                    <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                        Inicio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                    to="/perfil"
                    className="nav-links"
                    onClick={closeMobileMenu}
                    >
                        Perfil
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/informacion"
                        className="nav-links"
                        onClick={closeMobileMenu}
                    >
                        Información
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/chat"
                        className="nav-links"
                        onClick={closeMobileMenu}
                       >
                        Chat
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/anuncios"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Anuncios
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/iniciar-sesion"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Iniciar Sesión
              </Link>
            </li>
            <li>
              <Link
                to="/resgistrarse"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Registrarse
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Registrarse</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
