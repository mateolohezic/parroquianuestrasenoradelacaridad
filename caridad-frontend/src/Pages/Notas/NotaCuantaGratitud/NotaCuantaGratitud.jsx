import React from 'react'
import foto1 from '../../../assets/Photos/sacerdote12.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Portada from '../../../Components/Portada/Portada'

function NotaCuantaGratitud() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Fue nuestro director espiritual y el de muchas almas. A través de su vida pudimos descubrir a Cristo. Mediante su obrar pudimos comprender cuánto amor a Jesús y a María había en su interior. Era un sacerdote comprometido, adorador en espíritu y en verdad. Fue instrumento fiel y dócil, incansable, porque Dios obraba en Él.' />
                <meta name="subject" content="En memoria del Padre Jorge Gandur - Padre Jorge Gandur" />
                <title>En memoria del Padre Jorge Gandur - Padre Jorge Gandur | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>En memoria del Padre Jorge Gandur</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>Fue nuestro director espiritual y el de muchas almas. A través de su vida pudimos descubrir a Cristo. Mediante su obrar pudimos comprender cuánto amor a Jesús y a María había en su interior.</p>
                <p>Era un sacerdote comprometido, adorador en espíritu y en verdad. Fue instrumento fiel y dócil, incansable, porque Dios obraba en Él.</p>
                <p>Nos dejó como herencia su testimonio de vida virtuosa y sencilla. Nos dejó su amor a Jesús Eucaristía. Desde ese Amor pudo cumplir su sueño de dedicar dos oratorios de adoración eucarística perpetua, “usinas de Amor”, como él decía, en donde nuestras almas encuentran consuelo y descanso, en donde se respira un pedacito de cielo y en donde somos abrazados por infinitas gracias y bendiciones. Supo vivir el día a día confiando en la Providencia Divina y en María Santísima. Su fe allanó el camino a muchísimas almas.</p>
                <p>Fue quien nos hizo creer, confiar y esperar, y quien nos impulsó con su alegría y sabiduría a ser portadores de bondad y misericordia.</p>
                <p>Nos guió y ayudó a abrir el corazón a la Presencia Viva de Cristo. Tenemos mucho para recordar, mucho para agradecer. Estará por siempre en nuestros corazones.</p>
                <h4>Grupo de oración Santa Teresita del Niño Jesús</h4>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={foto1} alt="Foto" />
        </div>
    </>
    )
}

export default NotaCuantaGratitud