import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/sueño1.jpg'
import foto2 from '../../../assets/Photos/sueño2.jpg'

function NotaSueñoPosible() {
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
            <h1>¿Cuándo comenzamos a realizar este sueño?</h1>
        </div>
        <div className='contenedorPlantilla3'>
            <div className='cuerpoPlantilla3'>
                <p>Este proyecto fue solicitado por el Párroco Horacio Gómez, en respuesta a un viejo deseo del Padre Jorge Gandur, de construir un templo Parroquial más amplio y cómodo que estuviera a la altura del crecimiento que había experimentado la comunidad religiosa de esta Parroquia.</p>
                <p>Por tal motivo nos avocamos a la tarea de desarrollar un proyecto que permitiera albergar a más de mil personas sentadas adentro del templo, y para ello se plantea una nueva edificación en el antiguo estacionamiento que se encuentra dentro del predio de la actual Parroquia La Caridad.</p>
                <p>El templo se organiza en base a una planta de “cruz latina”, con una nave central y dos laterales, y otras dos perpendiculares conformando la forma en “cruz”. En esa intersección se encuentra el altar, el cual se enfatiza además por la gran cúpula que le da mayor protagonismo y logra captar la atención del espectador desde cualquier punto del interior del templo.</p>
                <p>También se hizo hincapié en la iluminación natural y en los efectos que se puedan lograr a través de las aberturas del volumen.</p>
                <p>En cuanto a su aspecto exterior, se resolvió teniendo en cuenta el pedido explícito del Padre Jorge el cual nos transmitió siempre como inquietud y deseo.</p>
                <p>Este proyecto se encuentra completamente desarrollado y con documentación aprobada, y a la espera de contar con los fondos necesarios para dar lugar al comienzo de la construcción del mismo, cumpliendo asi con la voluntad transmitida por nuestro querido Padre Jorge de que la Sede Parroquial cuente con un templo acorde a la población religiosa que hoy convoca y a la grandeza y santidad de nuestro Padre del cielo.</p>
                <h4>Arq. Carlos Carrizo</h4>
            </div>
            <div className='imagenesPlantilla3'>
                <img src={foto1} alt="Foto" />
                <img src={foto2} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default NotaSueñoPosible