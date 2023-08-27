import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/sacerdote1.jpg'
import foto2 from '../../../assets/Photos/vocacion2.jpg'
import foto3 from '../../../assets/Photos/caridad3.jpg'
import foto4 from '../../../assets/Photos/vocacion1.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function NotaPadreHoracio() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='En el año 1976, cuando fui al seminario de Tucumán a averiguar los requisitos para ingresar, me encontré con un joven de sotana que me recibió con mucha alegría, como quien va a comprarle algo, y él por su parte me ofrecía su maravillosa mercancía.' />
                <meta name="subject" content="En memoria del Padre Jorge Gandur - Padre Jorge Gandur" />
                <title>En memoria del Padre Jorge Gandur | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>En memoria del Padre Jorge Gandur</h1>
        </div>
        <div className='contenedorPlantilla1'>
            <div className='cuerpoPlantilla1'>
                <p>En el año 1976, cuando fui al seminario de Tucumán a averiguar los requisitos para ingresar, me encontré con un joven de sotana que me recibió con mucha alegría, como quien va a comprarle algo, y él por su parte me ofrecía su maravillosa mercancía.</p>
                <p>La impresión que tuve del entonces seminarista, Jorge Antonio Gandur, fue de estar ante un joven con un espíritu arrollador que, a mi parecer era, ni más ni menos que el de un corazón enamorado de Jesús.</p>
                <p>Al mismo tiempo, en esa oportunidad y en muchas otras, percibí que ninguna persona con la que Jorge se encontraba le era indiferente en su situación particular y siempre recibía de Gandur, una visión bien sobrenatural, pero con sentido común.</p>
                <p>El gran fruto de mi encuentro con Jorge fue que me enseñó a no centrarme en los lógicos temores ante tamaña decisión, sino más bien a poner toda mi confianza en Jesucristo.</p>
                <p>Posteriormente, aunque nuestra amistad fue creciendo de una manera discontinua, descubría en él un sacerdote centrado en Cristo y, sobre todo en la Sagrada Eucaristía. Cultivaba una intensa vida de oración y vivía su ministerio con muy buen humor.</p>
                <p>A veces me invitaba a acompañarlo a rezar el rosario o el breviario o a hacer un rato de oración mental. Allí fue donde descubrí, y con el tiempo lo confirmé, de dónde sacaba la fuerza que lo animaba a enfrentar los desafíos de las distintas vicisitudes de su vida, que no fueron pocas ni fáciles.</p>
                <p>La Sagrada Escritura indica que “la memoria del justo perdurará en el tiempo”(Salmo 112, 6). Por eso soy testigo de la fuerza y el dinamismo con el que vivía intensamente su sacerdocio y la luz que ha dejado, para siempre, en muchas personas.</p>
                <p>El padre Eduardo Arnau decía que Dios lo llevó al padre Jorge a su presencia, a la vida eterna, antes de tiempo, porque había cumplido con celeridad con todo lo encomendado en esta vida.</p>
                <p>A 10 años de su partida, su recuerdo continúa en nuestra memoria: sus dichos, sus ejemplos, su buen humor, y la marca que dejó no sólo en sus obras materiales sino, sobremanera, en el paso de su acción apostólica por los corazones de quienes lo hemos tratado.</p>
                <p>En esta publicación se reúnen los testimonios de algunas personas que trabajaron junto al Padre Jorge en sus aventuras pastorales, siendo consciente que hace falta escribir un libro de varios tomos para mostrar algo de la gran personalidad del Padre Jorge Gandur.</p>
                <p>En este trabajo hemos contado con el invalorable aporte del Profesor Fernando Casiva y de la Comisión que he constituido con motivo de esta publicación y de los actos conmemorativos de la semana del 21 al 26 de Agosto de 2023.</p>
                <p>Seguramente nos hemos quedado cortos, como dije, en la recolección de testimonios, pero al menos estos nos servirán de recuerdo y homenaje a ese hombre Dios que trabajó incansablemente por el Reino de los Cielos. A la vez que lo recordamos, le pedimos que nos siga cuidando desde la Casa del Padre.</p>
                <h4>Pbro. Lic. Horacio A. Gómez</h4>
                <h5>Párroco de Nuestra Señora de La Caridad</h5>
            </div>
            <div className='imagenesPlantilla1'>
                <img src={foto1} alt="Foto" />
                <img src={foto2} alt="Foto" />
                <img src={foto3} alt="Foto" />
                <img src={foto4} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default NotaPadreHoracio