import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import fotoPrueba from '../../../assets/Photos/sanAntonio.jpg'

function NotaSanAntonioPadua() {
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
            <h1>La Capilla San Antonio de Padua</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>Con agrado les dirijo a Ustedes algunos aspectos que se destacaron en el desempeño y distintas vivencias del Padre Jorge Gandur en sus años como primer Párroco de Nuestra Señora de la Caridad de Yerba Buena.</p>
                <p>Recuerdo con nostalgia y asombro la tarde en que fue puesto en el cargo por el entonces Arzobispo de Tucumán, Monseñor Ñañez durante la misa concelebrada en la capilla de San Antonio de Padua, sita en calle Romano y Pje. Usandivaras de Yerba Buena. En esa ocasión (que fue cuando lo conocí) el Padre Gandur estaba sumamente concentrado y absorto durante la misa, quizás un poco retraído.</p>
                <p>Pero luego, al transcurrir los días, se comenzó a notar y sentir su verdadera personalidad: fuerte, avasallante y decidida, ya que, desde mi vivienda, justo al frente de su casa, se podían escuchar a viva voz y a cualquier hora sus cánticos de alegría en el Señor y sus distintas manifestaciones personales con los vecinos.</p>
                <p>Con el Padre Jorge Gandur llegamos a tener un gran vínculo de amistad fecunda reafirmado por nuestra convivencia de vecinos, como ser algunos domingos que supo alegrarnos y bendecirnos con su presencia al compartir algún asado al que lo invité. Me acuerdo con humor que a veces él ingresaba urgentemente en nuestra casa con su vozarrón penetrante, alterando todo el contexto a su alrededor y manifestando sus inquietudes que podían ser de índole personal, como solicitar una máquina para afeitar en un día feriado o también de índole general, concernientes a situaciones con la comunidad, solicitando apoyo y colaboración.</p>
                <p>En una ocasión, durante una homilía de misa dominical, supo hacer notar a la feligresía la necesidad de conseguir colaboración para donar un secarropa a la vecina del frente (se refería a mi esposa, presente en la misa) por el ruido molesto que ocasionaba el aparato que teníamos en ese momento. Una principal característica en su vivir fue que siempre estuvo atento y dispuesto a las necesidades de la gente y siempre tuvo una respuesta y una solución a los distintos problemas por más complicados o imposibles de resolver que parecieran.</p>
                <p>El Padre Gandur fue siempre sensible a nuestras inquietudes, estando siempre dispuesto a atendernos por encima de sus necesidades personales. Para él no había horarios que no dedicara al servicio de las personas. Estas vivencias y muchas más compartidas con el Padre Gandur muestran solo una ínfima faceta de apreciación a su persona. Todas las obras que nos dejó son magníficas y fructíferas en beneficio de la comunidad y se pueden aprovechar y disfrutar hoy en día por todos.</p>
                <p>Lo que más deseo fervientemente es poder compartir mi más sincero y profundo agradecimiento al Padre Gandur. Aunque ya no está entre nosotros, nos sigue abrazando con su apoyo y calidez de amigo desde la Casa del Padre.</p>
                <h4>Una carta de Armando y Chiné Nalim</h4>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={fotoPrueba} alt="Foto" />
        </div>
    </>
    )
}

export default NotaSanAntonioPadua