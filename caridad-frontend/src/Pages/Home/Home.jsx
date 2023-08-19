import React from 'react'
import './home.css'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import nombrePadre from '../../assets/nombrePadreNegro.png'

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
      <p>El gran fruto de mi encuentro con Jorge, fue que me enseñó a no centrarme en los lógicos temores ante tamaña decisión, sino más bien, a poner toda mi confianza en <strong>Jesucristo.</strong></p>
      <span>Pbro. Lic. Horacio A. Gómez</span>
      <div className='leerMasHome'>
        <a href="/">
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#BF9663" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
    <div className='bandaImagenHome'></div>
    <div className='biografiaHome'>
      <p>En su afán de profundizar sobre la Eucaristía, en el año 2004 se comunicó con Mons. Puyelli, a quien le manifestó su deseo de tener una Capilla de Adoración Perpetua en su parroquia. Fue providencial que en ese momento estuviera con el Padre Patricio Hileman, misionero de Nuestra Señora del Santísimo Sacramento, quien de inmediato se puso a disposición y en diciembre de ese mismo año vino a catequizar a los fieles de la parroquia para organizar la Adoración Eucarística Perpetua.</p>
    </div>
    <div className='lineaDivisora'></div>
    <div className='obrasHome'>
      <h2>Sus obras</h2>
      <Carousel infinite autoPlay pauseOnHover arrows={true} containerClass='carouselObrasHome' responsive={responsiveCarousel}>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome'>
            <h5>Fecha</h5>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Oratorio</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome'>
            <h5>Fecha</h5>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Oratorio</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome'>
            <h5>Fecha</h5>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Oratorio</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome'>
            <h5>Fecha</h5>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Oratorio</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome'>
            <h5>Fecha</h5>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Oratorio</h4>
          </div>
        </div>
        <div className='cardObrasHome'>
          <div className='contenedorImagenCardObrasHome'>
            <h5>Fecha</h5>
          </div>
          <div className='nombreCardObrasHome'>
            <h4>Oratorio</h4>
          </div>
        </div>
      </Carousel>
    </div>
    <div className='lineaDivisora'></div>
    <div className='niñezVocacionHome'>
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
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1" stroke="#BF9663" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 6l6 6l-6 6" />
          </svg>
        </a>
      </div>
    </div>
  </>
  )
}

export default Home