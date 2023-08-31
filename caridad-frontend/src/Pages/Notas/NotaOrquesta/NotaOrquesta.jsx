import React from 'react'
import foto1 from '../../../assets/Photos/orquesta1.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import Portada from '../../../Components/Portada/Portada'

function NotaOrquesta() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Hace 16 años fui a tocar el violín a los niños de catequesis de la capilla del Divino Niño. Una nena me preguntó... ¿Cómo hago yo para aprender?' />
                <meta name="subject" content="El Padre Jorge Gandur y la Orquesta del Divino Niño - Padre Jorge Gandur" />
                <title>El Padre Jorge Gandur y la Orquesta del Divino Niño | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>El Padre Jorge Gandur y la Orquesta del Divino Niño</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>Hace 16 años fui a tocar el violín a los niños de catequesis de la capilla del Divino Niño. Una nena me preguntó... ¿Cómo hago yo para aprender?</p>
                <p>Fue quien me hizo preguntarme también cómo podía hacer ... Presentándome primero ante el cura párroco... Pidiendo permiso.... El Padre Jorge me miró... Se dio la vuelta... Y regreso con unas llaves. Me dijo: -Arrancá....</p>
                <p>Un día, tiempo después, fui a visitarlo para decirle que quería abandonar el proyecto de la orquesta... dejar el Divino... Y con ese gran vozarron suyo inolvidable me respondió: -¡Parece que vos no sabés lo que hacés! ¿Lo sabés??</p>
                <p>-Enseño violín, padre, le dije.</p>
                <p>-Noooooo, me respondió. Estás haciendo tu apostolado. Andate...y no me dejés de hacer lo único que sabés hacer....</p>
                <p>Nunca más renuncie...y aprendí esa gran palabra: apostolado.... El granito de mostaza....</p>
                <p>La Orquesta del Divino Niño sigue. Tenemos tiempos duros, pero también alcanzamos grandes logros porque tenemos una gran ayuda desde el cielo. Porque el padre Jorge amaba la música y amaba a los niños.</p>
                <p>La cultura es algo muy necesario. No hace falta cárceles más grandes. Hace falta iniciar a los niños en la gran tradición musical y cultural.</p>
                <p>La pobreza más grande es ser nadie. Un artista tiene el aplauso, el reconocimiento...y eso lo vuelve ser diferente.</p>
                <p>La música… Es lo único q entra por el oído y llega al corazón.</p>
                <p>Con este apostolado, gracias al apoyo del padre Jorge, empezamos una tarea grande y hermosa. Empezamos a trabajar codo a codo con el encargado en ese momento del comedor Divino Niño, Julio Rossi. Comenzamos a poner la base de lo que debería ser acrecentar la cultura... La orquesta se fue poblando de alumnos de todos lados, de San Miguel y de Yerba Buena, de Cruz Alta y de Famaillá.... y se dan posibilidades de acercarse a todos. Con un solo requisito: amar la música y perseverar...</p>
                <p>La Orquesta Divino Niño tuvo grandes logros y su influjo se ha multiplicado en la Escuela Municipal Abejas, en la Casa de la Cultura del Nicolás, en el penal de Villa Urquiza (único penal en el país que cuenta con orquesta).</p>
                <p>La semilla que sembró el gran cura Gandur continua... Me empuja desde el cielo a seguir con mi apostolado.</p>
                <h4>Por Marcelo Ruiz</h4>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={foto1} alt="Foto" />
        </div>
    </>
    )
}

export default NotaOrquesta