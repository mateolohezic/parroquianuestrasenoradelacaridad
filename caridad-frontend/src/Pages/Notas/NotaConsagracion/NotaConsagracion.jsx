import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/consagracion1.jpg'
import foto2 from '../../../assets/Photos/maria1.jpg'
import foto3 from '../../../assets/Photos/consagracion2.jpeg'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function NotaConsagracion() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='El Padre Jorge Gandur fue un sacerdote que profesaba una especial devoción a la Santísima Virgen María. Todos recordamos su vozarrón inconfundible cantando: "Un día al cielo iré y la contemplaré." Ese gran amor a la Madre de Dios lo impulsó a promover, alentar y difundir la preparación de sus fieles para la Consagración al Inmaculado Corazón de María, como respuesta al pedido especial de Nuestra Señora en su aparición en Fátima, Portugal.' />
                <meta name="subject" content="El Padre Gandur y las charlas de Consagración a la Virgen - Padre Jorge Gandur" />
                <title>El Padre Gandur y las charlas de Consagración a la Virgen - Padre Jorge Gandur | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>El Padre Gandur y las charlas de Consagración a la Virgen</h1>
        </div>
        <div className='contenedorPlantilla3'>
            <div className='cuerpoPlantilla3'>
                <p>El Padre Jorge Gandur fue un sacerdote que profesaba una especial devoción a la Santísima Virgen María. Todos recordamos su vozarrón inconfundible cantando: “Un día al cielo iré y la contemplaré.”</p>
                <p>Ese gran amor a la Madre de Dios lo impulsó a promover, alentar y difundir la preparación de sus fieles para la Consagración al Inmaculado Corazón de María, como respuesta al pedido especial de Nuestra Señora en su aparición en Fátima, Portugal.</p>
                <p>Así fue que en el año 2006, en la Parroquia de la Caridad, nos convocó como laicos dedicados al Ministerio Mariano, para que diésemos las Charlas de Preparación para la Consagración al Inmaculado Corazón de María, a través del Método de San Luis María Grignon de Monfort con el lema “A Cristo por María, una entrega total”. Es así que hasta la actualidad miles de almas se han consagrado a Nuestra Madre del Cielo, en una alianza de amor sagrada y perpetua.</p>
                <p>Los frutos de la Consagración Mariana, unidos a los de la Adoración al Santísimo Sacramento en la Capilla de Adoración Perpetua, se vieron en abundancia. Es que el Padre Jorge sabía, al igual que Don Bosco en su sueño, que los pilares para perseverar en el mar tumultuoso de éste mundo, debían ser María y la Eucaristía.</p>
                <p>Las Charlas de Consagración encendieron los corazones. Miles de consagrados dan testimonio hoy de conversiones, familias enteras consagradas como faros de luz, almas piadosas en cenáculos o soldados de la Reina del Cielo empuñando el Santo Rosario trabajando todos para la Iglesia de Cristo.</p>
                <p>Gracias Padre Jorge por marcarnos el camino mariano. Hoy continuamos como Grupo Formador trabajando y cantando: “Un día al Cielo iré y la contemplaré”!</p>
                <h4>Grupo Formador de las Charlas de Consagración para la Consagración al Inmaculado Corazón de María</h4>
                <h5>José Asar</h5>
                <h5>Javier Staffolani</h5>
                <h5>María Victoria Mascaró de Paz</h5>
                <h5>Adriana Rossi</h5>
                <h5>Esteban Yranzo</h5>
            </div>
            <div className='imagenesPlantilla3'>
                <img src={foto1} alt="Foto" />
                <img src={foto2} alt="Foto" />
                <img src={foto3} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default NotaConsagracion