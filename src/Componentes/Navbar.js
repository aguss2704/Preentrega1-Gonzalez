import React from 'react';
import "../css/Navbar.css"

const Navbar = () => {
    return (
    <nav className="navbar">
    <div className="navbar-logo">Logo</div>
    <ul className="navbar-links">
    <li className="navbar-item"><a href="#">Inicio</a></li>
    <li className="navbar-item"><a href="#">Acerca</a></li>
    <li className="navbar-item"><a href="#">Servicios</a></li>
    <li className="navbar-item"><a href="#">Contacto</a></li>
    </ul>
    </nav>
    );
    }
    
    export default Navbar;