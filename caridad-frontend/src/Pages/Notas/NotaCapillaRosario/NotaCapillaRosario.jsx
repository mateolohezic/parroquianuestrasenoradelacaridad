import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/rosario.jpg'

function NotaCapillaRosario() {
    return (
    <>
        <div className='portadaHome'>
            <img src={nombrePadre} alt="Padre Jorge Antonio Gandur" />
        </div>
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
            <h1>La Capilla Nuestra Señora del Rosario de San Nicolás</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>En el año 1995 la Municipalidad de Yerba Buena anunció a los vecinos la disponibilidad de un terreno en Calle Salas y Valdez 102. El proyecto municipal contemplaba la construcción de un dispensario o una plaza, a consideración del vecindario. Puesto al tanto de la situación, nuestro párroco de aquel entonces, el padre Jorge Gandur, con el apoyo de los vecinos, consiguió modificar el proyecto municipal y adquirir el terreno para construcción de una Capilla.</p>
                <p>Inmediatamente el Padre Jorge Gandur, creó la comisión pro-templo, integrada por Pocha Ortiz, Ana Fernández, Francisca de la Puente, Antonio Almaraz y su esposa, Daniel Franchello y su esposa.</p>
                <p>En 1997 se dio comienzo a los trabajos de construcción. Para reunir los fondos necesarios se pensó una colecta de contribuyentes fijos a cargo de la Sra. Ana Fernández, quien además se ocupaba de organizar ferias de platos, sorteos, rifas y bingos en las instalaciones de la Escuela Mate de Luna, con el apoyo incondicional de la Srta. Ana de la Puente, todo bajo la atenta supervisión y colaboración del P. Jorge. Entre los varios contribuyentes cabe destacar el papel de la Sra. de Andreozzi y el Sr. Alvarez (quien donaba áridos y otros materiales).</p>
                <p>Con el correr del tiempo y el avance de la obra, el Padre Gandur comenzó a celebrar las primeras misas. A medida que se sucedían las celebraciones se fue notando la mayor afluencia de gente y, por lo tanto, hubo más colaboradores mensuales. Otras familias, motivadas por el Padre Jorge, se sumaron a las colaboraciones.</p>
                <p>Entre las personas que se incorporaron entonces estaban Juan Carlos D'Andrea y Sra. quienes con su hijo arquitecto, propusieron al P. Jorge la modificación del plano original. Se diseñó así un proyecto de líneas modernas que nuestro Párroco en ese momento aceptó con agrado.</p>
                <p>El Sr. D'Andrea, logró ampliar la cantidad de aportantes y la obra cobró nuevos impulsos y financiamiento, de modo tal que llegó a concluirse a fines de 2005, aproximadamente.</p>
                <p>Más adelante se concretó la adquisición de lo que actualmente conocemos como La Casita de La Virgen, en la que reside nuestro Vicario, el Padre Guillermo Benzi.</p>
                <p>El Padre Gandur, con su personalidad, lograba motivar a las personas para que abracen la fe en la Santísima Trinidad y en culto a la Sagrada Eucaristía. Son innumerables los frutos de conversión que se produjeron entre los vecinos del barrio de la Capilla Nuestra Señora del Rosario.</p>
                <p>Es de destacar también la gran obra humanitaria del P. Jorge para con el Padre Guillermo Benzi a quien acogió con tanto amor y lo ayudó permanente a sobrellevar su situación de salud.</p>
                <p>El Padre Gandur fue un cura que daba todo su tiempo, sus horas y horas de oración, el apoyo anímico y material para ayudar a sus hermanos sacerdotes y a toda persona que se arrimaba a él con alguna necesidad.</p>
                <p>Toda la comunidad de la Capilla de la Virgen del Rosario lo recuerdan con mucho amor y le agradecerán eternamente su obra que continúa dando frutos espirituales de conversión y crecimiento en la fe.</p>
                <p>Un fuerte abrazo al cielo al querido Padre Jorge Gandur.</p>
                <h4>Miguel Moreno y Comunidad</h4>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={foto1} alt="Foto" />
        </div>
    </>
    )
}

export default NotaCapillaRosario