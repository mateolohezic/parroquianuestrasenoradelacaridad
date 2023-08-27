import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/oratorio2.jpg'
import foto2 from '../../../assets/Photos/oratorio1.jpg'
import foto3 from '../../../assets/Photos/sacerdote12.jpg'

function NotaOratorio() {
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
            <h1>Capilla de Adoración Perpetua "Corazón Eucarístico de Jesús"</h1>
        </div>
        <div className='contenedorPlantilla1'>
            <div className='cuerpoPlantilla1'>
                <p>El Padre Jorge Gandur tenía un profundo amor a la Eucaristía. Numerosos hechos de su vida lo unieron a ella. La tesis de su doctorado en Roma, providencialmente fue sobre la Eucaristía.</p>
                <p>Cuando el Padre Jorge vino a la entonces cuasi-parroquia de la Caridad, empezó su obra como torbellino que dejó como legado, entre otras cosas, siete capillas en puntos estratégicos. El Padre vio que en la platabanda de Av. Aconquija estaba la imagen de nuestra Madre la Virgen María, bajo la advocación de María Auxiliadora. Dijo: &quot;aquí falta el Sagrado Corazón&quot;. pero por una cuestión de peso y tamaño, la imagen no pudo ser colocada sobre la platabanda. Unos operarios le dijeron: &quot;Padre ese lote (señalando el actual emplazamiento de la Capilla de Adoración) está disponible&quot;. Tan rápido como era él, hizo la gestión inmediatamente y consiguió que ese mismo terreno fuera donado al Arzobispado. Allí se puso la imagen del Sagrado Corazón y poco tiempo después se construyó la capilla de la adoración perpetua. Allí había un pozo surgente de agua, signo de un profundo manantial de gracias. Parecía una metáfora de la fuerza de la Eucaristía con su gracia transformadora.</p>
                <p>En su afán de profundizar sobre la Eucaristía, en el año 2004 se comunicó con Mons. Puyelli, a quien le manifestó su deseo de tener una Capilla de Adoración Perpetua en su parroquia. Fue providencial que en ese momento estuviera con el Padre Patricio Hileman, misionero de Nuestra Señora del Santísimo Sacramento, quien de inmediato se puso a disposición y en diciembre de ese mismo año vino a catequizar a los fieles de la parroquia para organizar la Adoración Eucarística Perpetua. Apenas nueve meses más tarde, el 10 de septiembre de 2005, se inauguró la capilla. Tucumán ya contaba con el primer templo de Adoración Perpetua, al que el Padre Jorge le llamaba &quot;la usina de amor&quot; de su parroquia. El Padre nos decía: &quot;el adorador debe ser un instrumento para cambiar la sociedad, pues enciende la temperatura espiritual del mundo. Con la inauguración de la capilla iniciamos un itinerario espiritual Eucarístico, con muchos frutos permanentes. Este itinerario presupone una gran humildad. Con la adoración perpetua, será posible perseverar y que otras generaciones continúen esta tarea hasta el fin de los tiempos.”</p>
                <p>Próxima a cumplir 18 años, la Capilla de la Adoración Eucarística Perpetua es el valioso legado del querido Padre Jorge Gandur. Sus frutos son permanentes, diarios podríamos decir. Son abundantes los testimonios de piedad, de conversiones, de reconstrucciones familiares. El alcance de las gracias y favores recibidos por la Adoración al Santísimo es inconmensurable. ¡Gracias Padre Jorge por tan gran regalo!</p>
                <h4>Adoradores del Santísimo Sacramento</h4>
            </div>
            <div className='imagenesPlantilla1'>
                <img src={foto1} alt="Foto" />
                <img src={foto2} alt="Foto" />
                <img src={foto3} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default NotaOratorio