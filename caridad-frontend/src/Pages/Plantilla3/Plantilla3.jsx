import React from 'react'
import './plantilla3.css'
import fotoPrueba from '../../assets/Photos/ac4.jpg'
import Portada from '../../Components/Portada/Portada'

function Plantilla3() {
    return (
    <>
        <Portada />
        <div className='volverAlInicio'>
            <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M15 6l-6 6l6 6" />
                </svg>
                Volver
            </a>
        </div>
        <div className='tituloPlantilla1'>
            <h1>En memoria del Padre Jorge Gandur</h1>
        </div>
        <div className='contenedorPlantilla3'>
            <div className='cuerpoPlantilla3'>
                <p>En su afán de profundizar sobre la Eucaristía, en el año 2004 se comunicó con Mons. Puyelli, a quien le manifestó su deseo de tener una Capilla de Adoración Perpetua en su parroquia. Fue providencial que en ese momento estuviera con el Padre Patricio Hileman, misionero de Nuestra Señora del Santísimo Sacramento, quien de inmediato se puso a disposición y en diciembre de ese mismo año vino a catequizar a los fieles de la parroquia para organizar la Adoración Eucarística Perpetua.</p>
                <p>En su afán de profundizar sobre la Eucaristía, en el año 2004 se comunicó con Mons. Puyelli, a quien le manifestó su deseo de tener una Capilla de Adoración Perpetua en su parroquia. Fue providencial que en ese momento estuviera con el Padre Patricio Hileman, misionero de Nuestra Señora del Santísimo Sacramento, quien de inmediato se puso a disposición y en diciembre de ese mismo año vino a catequizar a los fieles de la parroquia para organizar la Adoración Eucarística Perpetua.</p>
                <p>En su afán de profundizar sobre la Eucaristía, en el año 2004 se comunicó con Mons. Puyelli, a quien le manifestó su deseo de tener una Capilla de Adoración Perpetua en su parroquia. Fue providencial que en ese momento estuviera con el Padre Patricio Hileman, misionero de Nuestra Señora del Santísimo Sacramento, quien de inmediato se puso a disposición y en diciembre de ese mismo año vino a catequizar a los fieles de la parroquia para organizar la Adoración Eucarística Perpetua.</p>
                <p>En su afán de profundizar sobre la Eucaristía, en el año 2004 se comunicó con Mons. Puyelli, a quien le manifestó su deseo de tener una Capilla de Adoración Perpetua en su parroquia. Fue providencial que en ese momento estuviera con el Padre Patricio Hileman, misionero de Nuestra Señora del Santísimo Sacramento, quien de inmediato se puso a disposición y en diciembre de ese mismo año vino a catequizar a los fieles de la parroquia para organizar la Adoración Eucarística Perpetua.</p>
                <h4>Pbro. Lic. Horacio A. Gómez</h4>
                <h5>Párroco de Nuestra Señora de La Caridad</h5>
            </div>
            <div className='imagenesPlantilla3'>
                <img src={fotoPrueba} alt="Foto" />
                <img src={fotoPrueba} alt="Foto" />
                <img src={fotoPrueba} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default Plantilla3