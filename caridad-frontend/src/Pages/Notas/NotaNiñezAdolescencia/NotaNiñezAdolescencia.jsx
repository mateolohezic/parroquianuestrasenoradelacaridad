import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/niñez2.jpg'

function NotaNiñezAdolescencia() {
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
            <h1>Jorge, niñez y adolescencia</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>En Jorge se cumplió la palabra de Jeremías que relata en su libro al referir su vocación &quot;el Señor me dijo: antes de que salieras del seno de tu madre, yo te había consagrado&quot;.</p>
                <p>Fue bautizado en Catamarca a los 2 años, cumpliendo la promesa de mi padre de que, si era varón, en el santuario de la Virgen del Valle seria bautizado.</p>
                <p>A los seis años hizo de pastorcito en la procesión de la Virgen de Fátima, parroquia a la que pertenecíamos.</p>
                <p>Recibió la primera Comunión en el Colegio del Sagrado Corazón, donde cursó la primaria y parte de la secundaria. En tercer año pasó a la Escuela de Comercio, que era mixto.</p>
                <p>En un tiempo en que nuestro padre -que era distribuidor mayorista de bebidas- se enfermó, Jorge, en una camioneta, se encargó del despacho de bebidas y sus tareas propias, cargar, acarrear, cobrar.</p>
                <p>Recuerdo que gustaba de una compañera, era amado y querido por todos. Tuvo su fiesta cuando cumplió 18 años.</p>
                <p>Se fue de vacaciones con un amigo, periodo en el que conoció a una joven, le contó a mi mamá, estaba entusiasmado, incluso le quería regalar un anillo, pero después todo quedó en la nada.</p>
                <p>Fue presidente de la Acción Católica de la parroquia de Fátima hasta que ingresó al seminario.</p>
                <p>Tenía todo lo que un joven podía querer. Cuál sorpresa para todos cuando dijo que quería ser sacerdote. El más impactado fue nuestro padre, que tenía ilusiones de que él siguiera con el negocio.</p>
                <p>Apoyamos a Jorge guardando silencio. Por eso cursó el primer año como externo en el seminario.</p>
                <p>Ya viviendo en el seminario, siendo diácono, iba los fines de semana a Famaillá. Cuando se ordenó de sacerdote comenzó a formar un grupo de jóvenes en esa ciudad, de allí salieron algunas vocaciones para el sacerdocio y la vida religiosa.</p>
                <p>Mi padre lo acompañaba a distintas capillas los fines de semana, y cantaba con su guitarra.</p>
                <p>Nuestro padre, en sus últimos días, dijo al padre Parrado que le administró los sacramentos:</p>
                <p><b>&quot;Yo creí perder un hijo, y lo gané para siempre&quot;.</b></p>
                <h4>Marta Gandur de Brito</h4>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={foto1} alt="Foto" />
        </div>
    </>
    )
}

export default NotaNiñezAdolescencia