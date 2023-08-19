import React from 'react';
import './navbar.css'
import logo from '../../assets/logoBlanco.png'

function Navbar() {
    
    return (
    <>
        <nav className="navbar navbar-expand-lg sticky-top animate__animated animate__fadeInDown">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="Logo Barra de Navegación" />
                </a>
                <button className="navbar-toggler p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarPrincipal" aria-controls="navbarPrincipal" aria-expanded="false" aria-label="Expandir">
                    <label className="burger" htmlFor="burgerButton">
                        <input type="checkbox" id="burgerButton"/>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </button>
                <div className="collapse navbar-collapse" id="navbarPrincipal">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Fundacion-Padre-Martin-Martin-Martin">Obras</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Novedades">Testimonios</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar