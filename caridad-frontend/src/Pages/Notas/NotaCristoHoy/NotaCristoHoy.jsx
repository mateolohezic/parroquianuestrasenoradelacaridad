import React from 'react'
import nombrePadre from '../../../assets/nombrePadreNegroAños.png'
import foto1 from '../../../assets/Photos/amigos4.jpg'
import { Helmet, HelmetProvider } from 'react-helmet-async'

function NotaCristoHoy() {
    return (
    <>
        <HelmetProvider>
            <Helmet>
                <meta name="description" content='Soy el padre Mauro Carlorosi, sacerdote del Oratorio de San Felipe Neri, miembro de Cristo Hoy desde 1999. Conocí al padre Jorge cuando ayudaba con la catequesis en el barrio 2 de septiembre, en 1998 y 1999. Las clases se daban bajo una higuera y en casa de doña María. Me tocó fundirle una camioneta cuando me la prestó para ir llevando chicos. Fue él quien me presentó al padre Juan Eduardo Arnau, para trabajar en Cristo Hoy, a fines de 1999.' />
                <meta name="subject" content="El Padre Jorge Gandur y Cristo Hoy - Padre Jorge Gandur" />
                <title>El Padre Jorge Gandur y Cristo Hoy - Padre Jorge Gandur | Parroquia Nuestra señora de La Caridad</title>
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
            <h1>El Padre Jorge Gandur y Cristo Hoy</h1>
        </div>
        <div className='contenedorPlantilla2'>
            <div className='cuerpoPlantilla2'>
                <p>Soy el padre Mauro Carlorosi, sacerdote del Oratorio de San Felipe Neri, miembro de Cristo Hoy desde 1999. Conocí al padre Jorge cuando ayudaba con la catequesis en el barrio 2 de septiembre, en 1998 y 1999. Las clases se daban bajo una higuera y en casa de doña María. Me tocó fundirle una camioneta cuando me la prestó para ir llevando chicos. Fue él quien me presentó al padre Juan Eduardo Arnau, para trabajar en Cristo Hoy, a fines de 1999.</p>
                <p>Al sacerdote serio, distante, formal que tenía en mente como padre Gandur, de a poco lo fui “perdiendo” por el real: alegre, jocoso, extrovertido, de desconcertante y potente voz, afable, inquieto, desinhibido… me rompió los esquemas y, de buenas a primeras, me fascinó el contraste.</p>
                <p>Sin embargo, pese a esto, era sumamente profundo en sus reflexiones, capaz de gran intimidad con el Señor en la oración y de un afán constante para hallar tiempo para la oración. Muchas veces al visitarlo lo encontrábamos simplemente rezando. Cuando nos trataba parecía que tenía tiempo para todo, siempre dispuesto y ocurrente, que le encantaba bromear y aconsejar en todo tipo de temas, de su especialidad o también en los que ignoraba… Y más aún, era así de alegre pese a estar soportando duras situaciones, presiones y cruces.</p>
                <p>Con mucho interés en la formación, no dejaba de leer, de citar libros y prestármelos. Como encargado de las páginas de espiritualidad, el padre poseía una pluma suave, profunda que acompasaba lo teológico con la exquisitez de un padre que habla a sus hijos. En la redacción del semanario se ocupaba de comentar asuntos muy variados. Eran muy graciosas las discusiones con el padre Arnau sobre los distintos temas. Coincidían en casi todo, y en lo que no, elípticamente se peleaban con bromas hasta terminar riéndose el uno con el otro. El padre Jorge no destacaba por sus propuestas de títulos para la tapa de Cristo Hoy pero sí en la prudencia con que se elegían los temas y noticias destacadas del entonces semanario.</p>
                <p>Cuando el padre Eduardo Arnau, fundador de Cristo Hoy, inició también la fundación de la comunidad del Oratorio de San Felipe Neri, el padre Jorge fue un compañero del itinerario. Hubo viajes, visitas, discernimientos fundamentales donde el padre Jorge no podía estar ausente, por su sabiduría, su prudencia y por su “curiosidad”. Con el padre Eduardo, los dos adultos y de trayectoria, sin embargo, juntos, parecían compañeros de seminario que se divertían y hacían travesuras. Durante un encuentro internacional del Oratorio en Polonia ambos se habían “escapado” para poder descansar la siesta tucumana que en Europa no existía.</p>
                <p>El padre Jorge solía llamar por teléfono tanto a la parroquia del padre Eduardo y luego al Oratorio en Mercedes, Buenos Aires, y se hacía pasar por otra persona. Alguna vez se hizo pasar por un monseñor… Me hizo “meter la pata” una vez: había hablado con voz rara simulando ser otra persona pidiendo hablar con el padre Eduardo, le dije: “al padre Arnau lo mandamos a ordeñar las vacas…”. Entonces, furioso, apareció la voz del padre Jorge: “¡te vamos a mandar a ordeñar las vacas a vos sinvergüenza!”. A lo que respondí: “ah, es usted, ya le paso con el padre”. A los pocos meses, en otra llamada por teléfono, volví a sentir la voz rara pidiendo por el padre Arnau. Pensé que era nuevamente el padre Jorge, entonces le dije: “¡al padre Arnau lo corrimos de la casa y los jóvenes tomamos el poder!” (con esto el padre Jorge saltaría hasta el techo). Pero no hubo más respuesta que un lamento: “¡Ay, no sabía!”, dijo la voz al otro lado del teléfono. Entonces pregunté: “¿quién es?” Y una voz seria me dijo el nombre de un obispo. Sí, justo llamaba un obispo.</p>
                <p>Cada vez que lo recuerdo al padre Jorge, tanto en Cristo Hoy, como en su relación con el Oratorio no dejo de dar gracias a Dios por un personaje tan inusual, desopilante, profundo, que no tenía miedo de vestir como sacerdote, que amaba orar y que, en medio de sus propios combates, buscaba sinceramente a Dios.</p>
                <h4>Por Mauro Carlorosi</h4>
            </div>
        </div>
        <div className='imagenesPlantilla2'>
            <img src={foto1} alt="Foto" />
        </div>
    </>
    )
}

export default NotaCristoHoy