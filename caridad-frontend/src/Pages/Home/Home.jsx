import React from 'react'
import './home.css'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import nombrePadre from '../../assets/nombrePadreNegroAños.png'

function Home() {

  const responsiveCarousel = {
    superLargeDesktop: {
      breakpoint: { max: 10000, min: 1200 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1,
    }
  };

  return (
  <>
    <div className='portadaHome'>
      <img src={nombrePadre} alt="Padre Jorge Antonio Gandur" />
    </div>
    <div className='fraseInicialHome'>
      <p>"El gran fruto de mi encuentro con Jorge, fue que me enseñó a no centrarme en los lógicos temores ante tamaña decisión, sino más bien, a poner toda mi confianza en <strong>Jesucristo.</strong>"</p>
      <span>Pbro. Lic. Horacio A. Gómez</span>
      <div className='leerMasHome'>
        <a href="/En-memoria-del-padre-jorge-gandur-pbro-lic-horacio-a-gomez">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
    <div className='bandaImagenHome'></div>
    <div className='biografiaHome'>
      <p>En las Parroquias de Yerba Buena y en todas las Capillas, nos encontramos con gente que se acercó a la Iglesia en la época en que el Padre Jorge impulsaba las actividades.</p>
      <p>Muchos Matrimonios y Familias viven hoy su Vida Sacramental gracias al sostén que el Padre Jorge logró durante su presencia entre nosotros.</p>
      <p>Pero a mi criterio, el fruto más acabo de su tarea en nuestro tiempo y que queda como su legado, es la presencia y continuidad de los Adoradores.</p>
      <div className='leerMasHome'>
        <a href="/La-llegada-del-padre-jorge-a-la-caridad">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='obrasHome' id='susObras'>
      <h2>Sus obras</h2>
      <Carousel infinite autoPlay pauseOnHover arrows={true} containerClass='carouselObrasHome' responsive={responsiveCarousel}>
        <a href="/La-capilla-y-el-colegio-divina-misericordia">
          <div className='cardObrasHome'>
            <div className='contenedorImagenCardObrasHome caridadImagenCardObrasHome'>
            </div>
            <div className='nombreCardObrasHome'>
              <h4>Parroquia Nuestra Señora de la Caridad</h4>
            </div>
          </div>
        </a>
        <a href="/La-capilla-y-el-colegio-divina-misericordia">
          <div className='cardObrasHome'>
            <div className='contenedorImagenCardObrasHome divinaMisericordiaImagenCardObrasHome'>
            </div>
            <div className='nombreCardObrasHome'>
              <h4>Colegio y Capilla Divina Misericordia</h4>
            </div>
          </div>
        </a>
        <a href="/La-capilla-san-antonio-de-padua">
          <div className='cardObrasHome'>
            <div className='contenedorImagenCardObrasHome sanAntonioImagenCardObrasHome'>
            </div>
            <div className='nombreCardObrasHome'>
              <h4>Capilla San Antonio de Padua</h4>
            </div>
          </div>
        </a>
        <a href="/Capilla-de-adoracion-perpetua-corazon-eucaristico-de-jesus">
          <div className='cardObrasHome'>
            <div className='contenedorImagenCardObrasHome oratorioImagenCardObrasHome'>
            </div>
            <div className='nombreCardObrasHome'>
              <h4>Capilla de Adoración Perpetua</h4>
            </div>
          </div>
        </a>
        <a href="/La-capilla-nuestra-señora-del-rosario-de-san-nicolas">
          <div className='cardObrasHome'>
            <div className='contenedorImagenCardObrasHome rosarioImagenCardObrasHome'>
            </div>
            <div className='nombreCardObrasHome'>
              <h4>Capilla Nuestra Señora del Rosario de San Nicolás</h4>
            </div>
          </div>
        </a>
        <a href="/La-capilla-divino-nino">
          <div className='cardObrasHome'>
            <div className='contenedorImagenCardObrasHome divinoNiñoImagenCardObrasHome'>
            </div>
            <div className='nombreCardObrasHome'>
              <h4>Capilla Divino Niño</h4>
            </div>
          </div>
        </a>
      </Carousel>
    </div>
    <div className='lineaDivisora'></div>
    <div className='niñezVocacionHome' id='suVida'>
      <a href="/Jorge-niñez-y-adolescencia">
        <div className='niñezAdolescenciaHome'><h5>Niñez y adolescencia</h5></div>
      </a>
      <a href="/Una-vocacion-del-pbro-jorge-antonio-gandur">
        <div className='vocacionHome'><h5>Vocación</h5></div>
      </a>
    </div>
    <div className='lineaDivisora'></div>
    <div className='testimonioSeñoraHome'>
      <h2>Testimonio</h2>
      <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
      <span>Dolores Perez de Gaseni</span>
      <div className='leerMasHome'>
        <a href="/Testimonio-del-padre-jorge-gandur">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='mariaHome' id='Maria'>
      <div className='contenedorParrafosMariaHome'>
        <div className='columna1MariaHome'>
          <h3>Virgen de la Eucaristía</h3>
          <p>Después de la celebración de la Santa Misa, un jueves 30 de Octubre de 2003, llegaron dos señoras a pedir la bendición del agua. A una de ellas la conocía, a la otra no.</p>
          <p>Luego de la bendición, le pregunté a María Victoria Herrera de Padrós, cuyo nombre y apellido desconocía totalmente, si en su dormitorio tenía una imagen de la Virgen guardada, y si alguien le impedía rendirle culto. La lleve a un salón contiguo a la capilla, y allí le explique, ya que las palabras no salían, como era el manto de la imagen, mostrándole otra imagen de la Santísima Virgen.</p>
          <p>Hay detalles de la conversación que no los tengo presentes, pero la Providencia Divina y no otra cosa, quiso preparar a algunas familiar a tener amor a la Eucaristía por medio de esta imagen.</p>
          <div className='leerMasHome'>
            <a href="/Testimonio-del-padre-sobre-la-virgen-de-la-eucaristia">
              Leer más
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>
        <div className='columna2MariaHome'>
          <h3>Consagrados a María</h3>
          <p>El Padre Jorge Gandur fue un sacerdote que profesaba una especial devoción a la Santísima Virgen María. Todos recordamos su vozarrón inconfundible cantando: “Un día al cielo iré y la contemplaré.”</p>
          <p>Ese gran amor a la Madre de Dios lo impulsó a promover, alentar y difundir la preparación de sus fieles para la Consagración al Inmaculado Corazón de María, como respuesta al pedido especial de Nuestra Señora en su aparición en Fátima, Portugal.</p>
          <p>Así fue que en el año 2006, en la Parroquia de la Caridad, nos convocó como laicos dedicados al Ministerio Mariano, para que diésemos las Charlas de Preparación para la Consagración al Inmaculado Corazón de María, a través del Método de San Luis María Grignon de Monfort con el lema “A Cristo por María, una entrega total”. Es así que hasta la actualidad miles de almas se han consagrado a Nuestra Madre del Cielo, en una alianza de amor sagrada y perpetua.</p>
          <div className='leerMasHome'>
            <a href="/El-padre-gandur-y-las-charlas-de-consagracion-a-la-virgen">
              Leer más
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className='columna3MariaHome'></div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='apostoladoHome' id='Grupos'>
      <h2>Apostolado de grupos</h2>
      <div className='contenedorCardsApostoladoHome'>
        <a href="/Accion-catolica-accion" className='cardApostoladoHome'>
          <div className='ACCardApostoladoHome'><h5>Acción Católica</h5></div>
        </a>
        <a href="/" className='cardApostoladoHome'>
          <div className='MEPCardApostoladoHome'><h5>MEP</h5></div>
        </a>
        <a href="/El-padre-jorge-gandur-y-la-orquesta-del-divino-nino" className='cardApostoladoHome'>
          <div className='orquestaCardApostoladoHome'><h5>Orquesta del Divino Niño</h5></div>
        </a>
        <a href="/Cuanta-gratitud-a-nuestro-querido-padre-jorge" className='cardApostoladoHome'>
          <div className='santaTeresitaCardApostoladoHome'><h5>Santa Teresita del Niño Jesús</h5></div>
        </a>
      </div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='cristoHoyHome' id='CristoHoy'>
      <div className='imagenCristoHoyHome'></div>
      <div className='textoCristoHoyHome'>
        <h2>¡Cristo Hoy!</h2>
        <p>Soy el padre Mauro Carlorosi, sacerdote del Oratorio de San Felipe Neri, miembro de Cristo Hoy desde 1999. Conocí al padre Jorge cuando ayudaba con la catequesis en el barrio 2 de septiembre, en 1998 y 1999. Las clases se daban bajo una higuera y en casa de doña María. Me tocó fundirle una camioneta cuando me la prestó para ir llevando chicos. Fue él quien me presentó al padre Juan Eduardo Arnau, para trabajar en Cristo Hoy, a fines de 1999.</p>
        <p>Al sacerdote serio, distante, formal que tenía en mente como padre Gandur, de a poco lo fui “perdiendo” por el real: alegre, jocoso, extrovertido, de desconcertante y potente voz, afable, inquieto, desinhibido… me rompió los esquemas y, de buenas a primeras, me fascinó el contraste.</p>
        <p>Sin embargo, pese a esto, era sumamente profundo en sus reflexiones, capaz de gran intimidad con el Señor en la oración y de un afán constante para hallar tiempo para la oración. Muchas veces al visitarlo lo encontrábamos simplemente rezando. Cuando nos trataba parecía que tenía tiempo para todo, siempre dispuesto y ocurrente, que le encantaba bromear y aconsejar en todo tipo de temas, de su especialidad o también en los que ignoraba… Y más aún, era así de alegre pese a estar soportando duras situaciones, presiones y cruces.</p>
        <div className='leerMasHome'>
          <a href="/El-padre-jorge-gandur-y-cristo-hoy">
            Leer más
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className='bandaImagen2Home'></div>
    <div className='sueñoCumplirHome' id='sueñoXCumplir'>
      <div className='contenedorSueñoCumplirHome'>
        <div className='textoSueñoCumplirHome'>
          <h2>Un sueño por cumplir</h2>
          <p>Este proyecto fue solicitado por el Párroco Horacio Gómez, en respuesta a un viejo deseo del Padre Jorge Gandur, de construir un templo Parroquial más amplio y cómodo que estuviera a la altura del crecimiento que había experimentado la comunidad religiosa de esta Parroquia.</p>
          <p>Por tal motivo nos avocamos a la tarea de desarrollar un proyecto que permitiera albergar a más de mil personas sentadas adentro del templo, y para ello se plantea una nueva edificación en el antiguo estacionamiento que se encuentra dentro del predio de la actual Parroquia La Caridad.</p>
          <p>El templo se organiza en base a una planta de “cruz latina”, con una nave central y dos laterales, y otras dos perpendiculares conformando la forma en “cruz”. En esa intersección se encuentra el altar, el cual se enfatiza además por la gran cúpula que le da mayor protagonismo y logra captar la atención del espectador desde cualquier punto del interior del templo.</p>
          <div className='leerMasHome'>
            <a href="/Un-sueño-por-cumplir">
              Leer más
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1" stroke="#BF9663" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M9 6l6 6l-6 6" />
              </svg>
            </a>
          </div>
        </div>
        <div className='imagenSueñoCumplirHome'></div>
      </div>
    </div>
  </>
  )
}

export default Home