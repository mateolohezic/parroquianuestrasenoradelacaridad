import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/vocacion1.jpg'
import foto2 from '../../../assets/Photos/sacerdote8.jpg'
import foto3 from '../../../assets/Photos/vocacion2.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function NotaVocacion() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Conocí al padre Jorge cuando tenía 7 años cuando estaba en la catequesis recuerdo que todos los sábados nos iba a visitar a la catequesis y nos hacía preguntas y también bromas. Siempre fue una persona que supo conjugar la seriedad y el buen sentido del humor. Con el paso del tiempo empecé a ayudarle en misa en la sede parroquial. Algunas veces, nos pedía a los monaguillos que le acompañemos a otras capillas y con mucha ilusión íbamos, en el camino rezábamos El Rosario o él nos contaba alguna anécdota pastoral creo que ese estilo poco a poco fue despertando en mí la pregunta: ¿por qué no ser sacerdote?.' />
                <meta name="subject" content="Una vocación del Pbro. Jorge Antonio Gandur - Padre Jorge Gandur" />
                <title>Una vocación del Pbro. Jorge Antonio Gandur | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>Una vocación del Pbro. Jorge Antonio Gandur</h1>
        </div>
        <div className='contenedorPlantilla1'>
            <div className='cuerpoPlantilla1'>
                <p>Conocí al padre Jorge cuando tenía 7 años cuando estaba en la catequesis recuerdo que todos los sábados nos iba a visitar a la catequesis y nos hacía preguntas y también bromas. Siempre fue una persona que supo conjugar la seriedad y el buen sentido del humor. Con el paso del tiempo empecé a ayudarle en misa en la sede parroquial. Algunas veces, nos pedía a los monaguillos que le acompañemos a otras capillas y con mucha ilusión íbamos, en el camino rezábamos El Rosario o él nos contaba alguna anécdota pastoral creo que ese estilo poco a poco fue despertando en mí la pregunta: ¿por qué no ser sacerdote?</p>
                <p>En mi juventud recuerdo las meditaciones de los miércoles antes de la misa y fue ahí cuando comencé a sentir fuerte la inquietud vocacional razón por la cual me acerqué a hablar con él y me dijo que sería bueno que iniciara un discernimiento con un sacerdote que estaba en la parroquia, a pesar de que él no fue mi director espiritual siempre estuvo atento al proceso e incluso cuando ingresé al seminario.</p>
                <p>Lo que más admiraba del padre Jorge fue su celo apostólico, el darse tiempo para visitar e interesarse por las necesidades de cada comunidad, su amor a la Eucaristía y a la Virgen, como así también el interés y preocupación por los sacerdotes, creo que todo ello hablaba de su amor a Dios y al sacerdocio. Para los que hemos podido conocerlo de cerca, ha sido una persona que supo estar con todos sin importar la clase social. Además, siempre apostó por la formación integral de cada “parroquiano” tanto espiritual (con retiros, meditaciones) como así también humana (comedores, cursos de capacitación, escuelas).</p>
                <p>Lo que me queda por decir es darle gracias a Dios por el don de la vida del padre Jorge porque así cómo él y muchos otros, me ayudó a crecer como creyente y también en lo vocacional.</p>
                <h4>Por Padre Carlos Torres</h4>
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

export default NotaVocacion