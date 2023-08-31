import React from 'react'
import foto1 from '../../../assets/Photos/divino.jpg'
import foto2 from '../../../assets/Photos/divino2.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Portada from '../../../Components/Portada/Portada'

function NotaDivino() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Conocí al padre Jorge en Semana Santa del 2000. Una amiga en común nos presentó. Un mes después, lo llamé para ofrecerme a colaborar en sus obras con los más necesitados.' />
                <meta name="subject" content="La Capilla Divino Niño - Padre Jorge Gandur" />
                <title>La Capilla Divino Niño - Padre Jorge Gandur | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>La Capilla Divino Niño</h1>
        </div>
        <div className='contenedorPlantilla3'>
            <div className='cuerpoPlantilla3'>
                <p>Conocí al padre Jorge en Semana Santa del 2000. Una amiga en común nos presentó. Un mes después, lo llamé para ofrecerme a colaborar en sus obras con los más necesitados.</p>
                <p>Recuerdo que pasé por la iglesia de la Caridad a buscarlo. Me indicó ir hasta el Barrio Nicolás Avellaneda IV, donde me mostró el centro parroquial de la Divina Misericordia. Allí funcionaba un comedor infantil, al lado de la capilla.</p>
                <p>Luego me pidió ir hacia el sur, bordeando el canal del Camino del Perú. Llegamos a un asentamiento muy humilde, llamado 2 de Septiembre. Tiempo después me enteré que el propio padre Jorge había pedido expresamente al Arzobispado, que ese sector olvidado, perteneciente al departamento Capital, fuera incorporado a los límites de la parroquia, para poder intervenir allí.</p>
                <p>Entrando por una calle llena de barro, llegamos a un pequeño predio con paredes a medio construir. Entonces me dijo: &quot;¿Has visto aquel centro del Nicolas IV, con comedor, salones y capilla? Bueno, aquí quiero hacer lo mismo...y vos serás quien lo dirija.&quot; Ese estilo audaz, directo, seguro, me cautivó de inmediato. Yo ni siquiera asistía a misa los domingos. Casi sin conocerme, el padre Jorge me había encargado tamaña tarea.</p>
                <p>En esos días descubrí el concepto de la Divina Providencia. &quot;¿Para qué te preocupas por las cosas materiales? Si estás trabajando para el Señor, Él se encargará de conseguir todo. Vos dale para adelante&quot;, me decía.</p>
                <p>En agosto del 2000 empezamos a dar almuerzo a los chicos del asentamiento. Durante la crisis del 2001/02, llegamos a alimentar a diario a más de 600 niños y ancianos entre ambos comedores, sin ninguna ayuda ni plan del Estado.</p>
                <p>Cada día, junto a los voluntarios del comedor, asistíamos a pequeños milagros. Como cuando le conté al padre Jorge que teníamos problemas para conseguir carne. Al día siguiente me llamó un funcionario del SENASA para donarnos 8 medias reses que habían sido confiscadas.</p>
                <p>Un día del año 2002, llegó el padre al comedor con una imagen del Divino Niño que le habían traído desde Perú. Acababa de ser restaurada porque en la aduana le habían roto los bracitos en busca de drogas. Fiel a su estilo, el padre nos pidió que nos pongamos en oración, a fin de conseguir los terrenos que daban hacia el canal, para construir allí la futura Capilla.</p>
                <p>A una familia que vivía precariamente en uno de los terrenos, le construimos una casita de material en otro sector del barrio. Y compramos la posesión a su vecino, un hombre evangelista, que no quería saber nada con vender su lote para que se hiciera una iglesia católica. Nunca el padre Jorge mostraba preocupación, como sabiendo que las cosas se solucionarían sí o sí. Solo nos pedía oración y confianza.</p>
                <p>En unos meses comenzaron las obras. Todo, como siempre, a pulmón, sin presupuesto, en manos del Señor. En menos de 4 meses se celebró la primera misa. Y en poco más de un año, estuvo terminado el templo.</p>
                <p>Ya para ese entonces, mi conversión había sido muy fuerte. Y el padre Jorge me había nombrado como Ministro de la Comunión, un servicio que me permitió acercar a Cristo a muchos enfermos de la parroquia. El ejemplo del padre Jorge Gandur, su coherencia de vida, su estilo tan personal de anunciar a Cristo mediante sus obras, me marcaron para siempre.</p>
                <h4>Por Julio Rossi</h4>
            </div>
            <div className='imagenesPlantilla3'>
                <img src={foto1} alt="Foto" />
                <img src={foto2} alt="Foto" />
            </div>
        </div>
    </>
    )
}

export default NotaDivino