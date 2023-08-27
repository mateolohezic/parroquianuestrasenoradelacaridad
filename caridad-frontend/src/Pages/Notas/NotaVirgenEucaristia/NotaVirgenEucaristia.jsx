import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/maria1.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function NotaVirgenEucaristia() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Después de la celebración de la Santa Misa, un jueves 30 de Octubre de 2003, llegaron dos señoras a pedir la bendición del agua. A una de ellas la conocía, a la otra no.' />
                <meta name="subject" content="Testimonio del Padre sobre La Virgen de la Eucaristía - Padre Jorge Gandur" />
                <title>Testimonio del Padre sobre La Virgen de la Eucaristía | Parroquia Nuestra señora de La Caridad</title>
            </Helmet>
        </HelmetProvider>
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
            <h1>Testimonio del Padre sobre La Virgen de la Eucaristía</h1>
        </div>
        <div className='contenedorPlantilla1'>
            <div className='cuerpoPlantilla1'>
                <p>Después de la celebración de la Santa Misa, un jueves 30 de Octubre de 2003, llegaron dos señoras a pedir la bendición del agua. A una de ellas la conocía, a la otra no.</p>
                <p>Luego de la bendición, le pregunté a María Victoria Herrera de Padrós, cuyo nombre y apellido desconocía totalmente, si en su dormitorio tenía una imagen de la Virgen guardada, y si alguien le impedía rendirle culto. La lleve a un salón contiguo a la capilla, y allí le explique, ya que las palabras no salían, como era el manto de la imagen, mostrándole otra imagen de la Santísima Virgen.</p>
                <p>Hay detalles de la conversación que no los tengo presentes, pero la Providencia Divina y no otra cosa, quiso preparar a algunas familiar a tener amor a la Eucaristía por medio de esta imagen.</p>
                <p>Aclaro que en ningún momento hubo visión, considero uqe ufe una iluminación intelectiva, sin ninguna otra cosa que ser instrumento para que esta imagen empezara a circular antes del Año Eucarístico.</p>
                <p>Agradezco la docilidad de esta persona y la buena voluntad de sus colaboradoras para propagar la devoción de la Madre de Dios que ha hecho tanto bien, y hace, a tantas almas.</p>
                <p>Hay una verdad, no interesa cual pueda ser la procedencia, sino, el bien que pueda hacer a muchos el culto a la Madre de Dios, que tiene al Niño que representa su cuerpo y las uvas, la sangre entregada por nosotros.</p>
                <p>¡Dios bendiga el amor a la Eucaristía por medio de María!</p>
                <h4>Padre Jorge A. Gandur</h4>
            </div>
            <div className='imagenesPlantilla1'>
                <img src={foto1} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default NotaVirgenEucaristia