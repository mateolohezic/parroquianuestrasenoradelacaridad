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
        <a href="/">
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
        <a href="/">
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
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome caridadImagenCardObrasHome'>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Parroquia Nuestra Señora de la Caridad</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome divinaMisericordiaImagenCardObrasHome'>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Colegio y Capilla Divina Misericordia</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome sanAntonioImagenCardObrasHome'>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Capilla San Antonio de Padua</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome oratorioImagenCardObrasHome'>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Capilla de Adoración Perpetua</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome rosarioImagenCardObrasHome'>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Capilla Nuestra Señora del Rosario de San Nicolás</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome divinoNiñoImagenCardObrasHome'>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Capilla Divino Niño</h4>
          </div>
        </div>
      </Carousel>
    </div>
    <div className='lineaDivisora'></div>
    <div className='niñezVocacionHome' id='suVida'>
      <div className='niñezAdolescenciaHome'><h5>Niñez y adolescencia</h5></div>
      <div className='vocacionHome'><h5>Vocación</h5></div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='testimonioSeñoraHome'>
      <h2>Testimonio</h2>
      <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
      <span>Dolores Perez de Gaseni</span>
      <div className='leerMasHome'>
        <a href="/">
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
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
        </div>
        <div className='columna2MariaHome'>
          <h3>Consagrados a María</h3>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
        </div>
      </div>
      <div className='columna3MariaHome'></div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='apostoladoHome' id='Grupos'>
      <h2>Apostolado de grupos</h2>
      <div className='contenedorCardsApostoladoHome'>
        <div className='cardApostoladoHome ACCardApostoladoHome'><h5>Acción Catolica</h5></div>
        <div className='cardApostoladoHome MEPCardApostoladoHome'><h5>MEP</h5></div>
        <div className='cardApostoladoHome orquestaCardApostoladoHome'><h5>Orquesta del Divino Niño</h5></div>
        <div className='cardApostoladoHome santaTeresitaCardApostoladoHome'><h5>Santa Teresita del Niño Jesús</h5></div>
      </div>
    </div>
    <div className='lineaDivisora'></div>
    <div className='cristoHoyHome' id='CristoHoy'>
      <div className='imagenCristoHoyHome'></div>
      <div className='textoCristoHoyHome'>
        <h2>¡Cristo Hoy!</h2>
        <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
        <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
        <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
        <div className='leerMasHome'>
          <a href="/">
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
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <p>Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba. Su tarea no paso desapercibida. Le puso su sello de bondad, humildad y entusiasmo que lo caracterizaba.</p>
          <div className='leerMasHome'>
            <a href="/">
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