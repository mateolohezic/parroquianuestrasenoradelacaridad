import React from 'react';
import './navbar.css'
import { useLocation } from 'react-router-dom';
import logo from '../../assets/logoBlanco.png'

function Navbar() {
    
    const location = useLocation();

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
                        {
                        location.pathname === '/' || location.pathname.includes('/#') ?
                        <>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#susObras">Obras</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#suVida">Su vida</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#Maria">María</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#Grupos">Grupos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#CristoHoy">Cristo Hoy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/#sueñoXCumplir">Sueño por cumplir</a>
                            </li>
                        </>
                        :
                        <>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">Inicio</a>
                            </li>
                        </>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Navbar