import React from 'react'
import foto1 from '../../../assets/Photos/sacerdote5.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Portada from '../../../Components/Portada/Portada'

function NotaTestimonioPadre() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Vienen a mi memoria, gratos recuerdos del Padre Jorge Gandur, en su paso por la ciudad de Famailla, como Párroco de la Iglesia Nuestra Señora del Carmen.' />
                <meta name="subject" content="Testimonio del Padre Jorge Gandur - Padre Jorge Gandur" />
                <title>Testimonio del Padre Jorge Gandur | Parroquia Nuestra señora de La Caridad</title>
            </Helmet>
        </HelmetProvider>
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
            <h1>Testimonio del Padre Jorge Gandur</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>Vienen a mi memoria, gratos recuerdos del Padre Jorge Gandur, en su paso por la ciudad de Famailla, como Párroco de la Iglesia Nuestra Señora del Carmen.</p>
                <p>Una de las cosas que quiero resaltar es que en su rol de Párroco de la Iglesia Nuestra Señora del Carmen, su tarea no paso desapercibida, todo lo contrario, le puso su sello de bondad, humildad y del entusiasmo que lo caracterizaba, integrándose rápidamente a la comunidad famaillence.</p>
                <p>Lo que recuerdo de él, fue que atrajo a los jóvenes a la Iglesia, que se habían alejado en los años previos a su llegada, realizando reuniones, fogatas, adoraciones nocturnas y caminatas por los barrios humildes de la ciudad.</p>
                <p>En mi rol de participante activa de Caritas, puedo mencionar el trabajo mancomunado que realizamos con el Padre Jorge, con campañas de recolección de alimentos y de ropa a las familias carenciadas de Famailla.</p>
                <p>Asimismo, destaco la importancia que le dio a los festejos de la Patrona de nuestro pueblo, la Virgen del Carmen, que cada 16 de Julio, convocaba a participar a la toda la comunidad católica, a demostrar su fe a la Virgen.</p>
                <p>Con su carisma e humildad, atrajo a los jóvenes a la Iglesia, lo que dio sus frutos, dado de esa camada de jóvenes, varios abrazaron la vocación del Sacerdocio y actualmente ejercen como tales.</p>
                <p>En síntesis, en Famailla, guardamos recuerdos imborrables del querido Padre Jorge Gandur.</p>
                <h4>Dolores Perez de Gaseni</h4>
                <h5>Ex integrante de Caritas Vecina de Famailla</h5>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={foto1} alt="Foto" />
        </div>
    </>
    )
}

export default NotaTestimonioPadre