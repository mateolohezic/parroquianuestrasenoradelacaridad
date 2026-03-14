import type { FormacionSection } from "@/interfaces";

export const FORMACION_INTRO = {
  quote: "No cantamos para la misa: cantamos la misa.",
  paragraphs: [
    "El coro es mucho más que eso: es un verdadero apostolado. Cada vez que cantamos en la liturgia, prestamos nuestra voz para que toda la asamblea pueda rezar, alabar y encontrarse con Dios.",
    "El coro no está para lucirse ni para dar un show. Está para servir, para acompañar el misterio que se celebra y ayudar a que la palabra, los silencios y los gestos litúrgicos lleguen al corazón de todos. Cuando el canto está bien elegido y bien cantado, algo cambia: la comunidad se une, la oración se eleva y Dios actúa.",
    "Este apostolado necesita algo fundamental: formación. Así como nadie se anima a tocar un instrumento sin aprender, tampoco podemos cantar en la liturgia sin conocer qué estamos celebrando, por qué cantamos lo que cantamos y en qué momento hacerlo.",
    "Formarnos no significa perder la frescura ni la alegría; al contrario, nos permite cantar con más sentido, más libertad y más amor. Conocer la misa, los tiempos litúrgicos y el lugar del canto nos ayuda a vivir cada celebración con mayor profundidad y a transmitir esa experiencia a los demás.",
    "Porque cuando el coro canta con fe, preparación y corazón, la Iglesia canta, y cuando la Iglesia canta, el cielo se abre un poquito más.",
  ],
};

export const FORMACION_SECTIONS: FormacionSection[] = [
  {
    id: "funcion-del-coro",
    title: "Función del Coro",
    content: [
      "El coro es un ministerio litúrgico, es decir, un servicio dentro de la celebración de la Eucaristía. Tiene como objetivo ayudar a la asamblea a participar activamente en la oración a través del canto. No es un espectáculo ni un adorno, sino un instrumento al servicio del pueblo de Dios.",
      "No se trata de suplantar el canto del pueblo, asumiendo en solitario las funciones que le corresponde a la asamblea, sino de enriquecer el canto del mismo, creando espacios de descanso que fomenten la contemplación del misterio eucarístico en la Santa Misa.",
      "Somos servidores de la Iglesia, no estrellas. El servicio que presta el coro debe llevarse a cabo con humildad. Recuerda, el centro en la Misa es Cristo, no nuestra voz. Debemos buscar servir, no sobresalir ni ser aplaudidos, pues los dones que tenemos son dados gratuitamente por Dios y debemos ponerlos al servicio del otro para gloria de Dios.",
      "Como músicos de Dios, debemos discernir todo el tiempo. Discernir qué canto hacer para que se relacione con las lecturas del día, con el Evangelio, con la reflexión del sacerdote. La pregunta para discernir los cantos es: ¿Qué quiere decirnos el Señor hoy? Los cantos han de ser siempre producto de la inspiración divina en los músicos y no de sus gustos personales.",
    ],
  },
  {
    id: "no-todo-canto-es-liturgico",
    title: "No todo canto es litúrgico",
    content: [
      "Hay cantos sumamente bonitos y que suenan muy apropiados a la situación o incluso al Evangelio, sin embargo nuestra tarea como coro es la de investigar si lo que cantamos es apropiado para la liturgia.",
      "La Iglesia nos da una pauta para discernir esto en el documento titulado Musicam Sacram en el número 4:",
    ],
    officialText: "«Se entiende por música sagrada aquella que, creada para la celebración del culto divino, posee las cualidades de santidad y de perfección de formas». De aquí podemos inferir que para que un canto sea apropiado para la Liturgia debe haber sido escrito en música y letra para la celebración. — Musicam Sacram, 4",
    subsections: [
      {
        id: "momentos-no-liturgicos",
        title: "Momentos no litúrgicos",
        content: [
          "En los momentos no litúrgicos como Adoración al Santísimo, oración comunitaria, encuentros o asambleas, hay un espacio mucho mayor para la creatividad musical y libertad para seleccionar el qué y el cómo cantar. Siempre conforme a la fe de la Iglesia.",
        ],
      },
    ],
  },
  {
    id: "la-misa-lleva-su-tiempo",
    title: "La Misa lleva su propio tiempo, no el nuestro",
    content: [
      "La Instrucción General del Misal Romano nos dice que hay cantos que son en sí mismos ritos, como por ejemplo el Gloria, el Salmo responsorial, el Aleluya, el Santo y algunos otros. También hay cantos que acompañan un rito, como lo son el canto de entrada, de la presentación de las ofrendas y el de comunión.",
      "El coro debe respetar estos tiempos y no extender los cantos más de lo necesario. El canto de entrada, por ejemplo, tiene la función de acompañar la procesión de entrada de los ministros. Debe extenderse lo que dura la procesión y la incensación del altar. Una vez terminado este rito, el canto de entrada debe concluir, evitando añadir estrofas innecesarias.",
      "Otro ejemplo es el canto de comunión: debe durar lo que dura la distribución de la comunión a los fieles.",
      "El canto debe ser fiel al texto que presenta. No porque un canto diga «Gloria a Dios» o «Aleluya» o «Cordero de Dios» significa que se puede usar en la Santa Misa. No podemos modificar oraciones antiquísimas de la Iglesia para que el canto suene mejor o más bonito.",
    ],
  },
  {
    id: "donde-no-cantar",
    title: "No se deben agregar cantos donde no están mandados",
    content: [
      "En estos últimos años han proliferado numerosas intervenciones de los músicos en lugares donde la estructura de la Santa Misa no prevé cantar, o solo permite cantar los mismos textos litúrgicos.",
      "No corresponde cantar una canción «de perdón» en el acto penitencial. Allí se puede entonar el Kyrie eleison.",
      "Tampoco corresponde realizar un rito para «recibir la palabra» antes de leer la lectura ni, por ende, entonar allí una canción.",
      "No hay que cantar en el momento de la consagración.",
      "No existe el canto para «darse la paz». El gesto de paz, según las normas y la tradición de la Iglesia latina, es muy sobrio y breve, y debe concluir al iniciar el Cordero de Dios.",
    ],
  },
  {
    id: "luces-y-sombras",
    title: "Luces y sombras de la situación actual",
    content: [
      "Hoy en día hay una proliferación de grabaciones y publicaciones de cantos. Internet pone a nuestro alcance una casi infinita variedad de canciones. No todos los cantos que se publican son cantos litúrgicos, lo mismo que no todas las oraciones son litúrgicas.",
      "El individualismo que predomina en muchas de las letras. Predomina el «yo» sobre el «nosotros», y recordemos que durante la Santa Misa, el canto representa una respuesta comunitaria hacia Dios. Este tipo de letras pertenecen más propiamente al ámbito de la Adoración Eucarística o de la oración personal.",
      "El sentimentalismo: hay algunas letras que ponen el foco en el sentir, el querer, en el «yo» o en las emociones, en lugar de acompañar el momento litúrgico correspondiente.",
      "Insuficiente presencia de la fe católica en las letras: en muchos de los cantos se subraya una experiencia subjetiva de la fe, incluyendo afirmaciones ambiguas.",
      "Alteración de los cantos del Misal: en varios documentos se insiste en que los textos propios de la celebración no deben ser alterados. Un ejemplo de ello son los «Santos» que se cantan durante misa, cuya letra ha sido modificada y no coincide con la letra expresada en el Misal Romano.",
      "Utilización de instrumentos sin la aprobación de la autoridad competente. En ocasiones se incluyen instrumentos como el bajo o la batería con el fin de «atraer» más a los jóvenes, dándole un tinte más «rockero». Debemos recordar siempre que el centro está en el misterio de Cristo.",
    ],
  },
  {
    id: "participacion-del-coro",
    title: "No basta con que nuestro cuerpo esté presente",
    content: [
      "A veces a quienes pertenecemos a un coro se nos olvida que también participamos en la Eucaristía. No por estar atrás del templo o al lado nos podemos distraer o hacer otras cosas, pues el milagro de amor más grande ocurre frente a nosotros.",
      "Si es domingo, el precepto es «oír Misa entera todos los domingos», no solamente estar presente. Debemos participar no solo cantando sino también oyendo a Dios en el Evangelio y la homilía.",
    ],
  },
  {
    id: "instrumentos",
    title: "Sobre los instrumentos",
    content: [
      "Los instrumentos musicales pueden ser de gran utilidad en las celebraciones sagradas, ya sea que acompañen el canto o que intervengan solos.",
    ],
    officialText: "«Téngase en gran estima en la Iglesia latina el órgano de tubos, como instrumento musical tradicional, cuyo sonido puede aportar un esplendor notable a las ceremonias eclesiásticas, y levantar poderosamente las almas hacia Dios y hacia las realidades celestiales. En el culto divino se pueden admitir otros instrumentos, a juicio y con el consentimiento de la autoridad eclesiástica territorial competente, siempre que sean aptos o puedan adaptarse al uso sagrado, convengan a la dignidad del templo y contribuyan realmente a la edificación de los fieles». — Sacrosanctum Concilium, art. 120",
    subsections: [
      {
        id: "instrumentos-criterios",
        title: "Criterios importantes",
        content: [
          "El sonido de los instrumentos jamás debe cubrir las voces ni dificultar la comprensión del texto.",
          "Todo instrumento debe callar cuando el sacerdote o un ministro pronuncian en alta voz un texto que les corresponda por su función propia.",
          "Los instrumentos que, según el común sentir y el uso normal, solo son adecuados para la música profana, serán excluidos de toda acción litúrgica.",
          "Es recomendable mantener la sobriedad durante la Santa Misa y separar ciertos instrumentos para las animaciones, reuniones de jóvenes, fogones, etc.",
        ],
      },
    ],
  },
];

export const FORMACION_MOMENTS: FormacionSection[] = [
  {
    id: "momento-entrada",
    title: "Entrada",
    content: [
      "Es la primera expresión de fe, de unidad, del sentido de la celebración y de la alegría de hermanos que se encuentran entre ellos y con su Padre Dios.",
      "El canto de entrada invita a la gente a entrar al Templo y crea una atmósfera de celebración. Debe iniciar tan pronto el sacerdote, sus ministros y lectores están listos para entrar, y debe terminar tan pronto el sacerdote esté listo para iniciar la celebración.",
      "Se debe cantar con alegría, júbilo y entusiasmo. Se hace la excepción durante el tiempo de Cuaresma donde todos los cantos deberán ser entonados con meditación y delicadeza.",
      "Seleccionar cantos con carácter procesional: que hablen de caminar, peregrinar, subir, andar juntos como Iglesia, que hablan de ir a la casa del Padre, de llegar al altar, de ponerse en marcha.",
      "Los cantos a la Virgen María o algún Santo en especial pueden, según la ocasión, cantarse como canto de entrada.",
    ],
  },
  {
    id: "momento-gloria",
    title: "Gloria",
    content: [
      "El Gloria se canta en las siguientes Misas: sábado después de las 5 PM, en la Santa Misa Dominical y en celebraciones especiales.",
      "No se canta durante la Cuaresma, el Adviento ni en misas entre semana sin celebraciones especiales.",
      "Este himno no puede ser reemplazado por otro canto de alabanza, sino que debe mantenerse la letra que viene en el Misal, ya que se trata de uno de los más hermosos textos de la Iglesia.",
    ],
    officialText: "Gloria a Dios en el cielo y en la tierra paz a los hombres que ama el Señor. Por tu inmensa gloria te alabamos, te bendecimos, te adoramos, te glorificamos, te damos gracias. Señor Dios, Rey Celestial, Dios Padre todopoderoso. Señor, Hijo único, Jesucristo. Señor Dios, Cordero de Dios, Hijo del Padre. Tú que quitas el pecado del mundo, ten piedad de nosotros; Tú que quitas el pecado del mundo, atiende nuestras súplicas. Tú que estás sentado a la derecha del Padre, ten piedad de nosotros. Porque sólo tú eres Santo, sólo tú Señor, sólo tú Altísimo Jesucristo, con el Espíritu Santo en la gloria de Dios Padre. Amén.",
  },
  {
    id: "momento-aleluya",
    title: "Aleluya",
    content: [
      "La palabra Aleluya significa «Alabad a Yahvé» o «Alabado sea Yahvé». Es la alegría que se canta a sí misma porque no tiene palabras para expresarse. Se toma exclusivamente una frase del Evangelio.",
      "El Aleluya es la aclamación entusiasta con que la asamblea de los fieles recibe y saluda al Señor que va a hablar y profesa su fe cantando.",
      "El canto antes del Evangelio debe ser siempre Aleluya, excepto en Cuaresma, que es un tiempo penitencial, donde es sustituido por «Honor y Gloria a ti Señor Jesús» o «Tu palabra Señor es la verdad, y la luz de mis ojos».",
      "Se canta Aleluya, una o varias veces, según la composición musical. Luego se canta o recita el versículo aleluyático indicado en el leccionario y se vuelve a cantar el Aleluya. Es decir: Aleluya / versículo aleluyático / Aleluya.",
    ],
  },
  {
    id: "momento-ofertorio",
    title: "Ofertorio y Presentación de las Ofrendas",
    content: [
      "En esta parte ocurren dos momentos distintos: el ofertorio (el celebrante ofrece a Dios la hostia y el vino antes de la consagración) y la ofrenda (los dones que la asamblea ofrece a Dios).",
      "Los textos de los cantos de ofertorio deben tener principalmente los contenidos de ofrecimiento de la materia de la Eucaristía: pan y vino. Otros «ofrecimientos» (el amor, la vida, la juventud, el corazón) son válidos siempre y cuando existan los ofrecimientos principales.",
      "Si hay incensación, el canto se prolonga hasta la invitación del celebrante.",
      "Los cantos a la Virgen María o algún Santo en especial no se cantan durante el ofertorio o la presentación de los dones ni en la comunión.",
    ],
  },
  {
    id: "momento-santo",
    title: "Santo",
    content: [
      "El Santo es la mayor aclamación de la Misa, por eso debe ser el primer canto por orden de importancia.",
      "Es una expresión de reconocimiento hacia la grandeza y la santidad de Dios. Es una aclamación que une a la Iglesia terrestre con la celestial.",
      "Es importante que el canto diga tres veces Santo: «Santo, Santo, Santo» y «Bendito», así como asegurarse de cantar «Tu gloria» y no «Su gloria».",
      "El Santo es un canto que debe ser entonado por todos, por lo que su estructura debe ser de fácil aprendizaje y repetición.",
    ],
    officialText: "Santo, santo, santo es el Señor, Dios del Universo. Llenos están el cielo y la tierra de tu gloria. ¡Hosanna en el cielo! Bendito el que viene en nombre del Señor. ¡Hosanna en el cielo!",
  },
  {
    id: "momento-cordero",
    title: "Cordero de Dios",
    content: [
      "Es el canto de la fracción del pan. Lo canta la asamblea mientras el sacerdote parte el pan y lo reparte entre varios copones para la comunión de los fieles.",
      "El canto comienza en el momento en que el sacerdote toma el pan para partirlo. Procúrese que el arreglo musical y coral sea sencillo, breve y suave.",
      "Nunca debe sustituirse el canto del Cordero de Dios por otro de los llamados «cantos de paz». No es canto para acompañar la paz, sino la fracción del pan.",
      "El canto debe respetar el texto original sin alterarlo. No es el momento de un lucimiento coral, sino de acompañar el momento litúrgico que se está viviendo.",
    ],
    officialText: "Cordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.\nCordero de Dios, que quitas el pecado del mundo, ten piedad de nosotros.\nCordero de Dios, que quitas el pecado del mundo, danos la paz.",
  },
  {
    id: "momento-comunion",
    title: "Comunión",
    content: [
      "Este canto da expresión al gozo que sentimos todos por la unidad en el cuerpo de Cristo. El canto debe expresar, por la unión de voces, la unión espiritual de quienes comulgan, demostrar la alegría del corazón y hacer más fraternalmente la procesión de los que van avanzando para recibir el Cuerpo de Cristo.",
      "El canto comienza cuando comulga el sacerdote y se prolonga mientras comulgan los fieles, hasta el momento que parezca oportuno, porque debe dejarse también un momento de silencio para la oración y acción de gracias de cada persona.",
      "Es importante que el canto de comunión tenga relación íntima con el Evangelio de cada domingo y que tenga como referencia las Sagradas Escrituras.",
      "Durante los tiempos más importantes del año litúrgico (Pascua, Cuaresma, Navidad y Adviento), es preferible que la mayor parte de los cantos usados en este momento sean de una naturaleza propia del tiempo litúrgico que se celebra.",
      "Los cantos a la Virgen María o algún Santo en especial no se cantan durante la comunión.",
    ],
  },
  {
    id: "momento-salida",
    title: "Salida",
    content: [
      "El canto de salida nunca ha sido una parte oficial del rito, por lo que hay libertad de planificar el canto y la música que proporcione una terminación apropiada a la liturgia.",
      "Es preciso que la Eucaristía tenga una conexión con la vida: que salgan los participantes con un compromiso, con una esperanza, con la sensación de haber crecido en fraternidad y en la decisión de dar testimonio en medio del mundo.",
      "No es obligatorio cantar al final. Puede usarse un himno instrumental, un canto que exprese alabanza, gratitud, compromiso, testimonio, también puede ser un canto mariano o incluso un canto fuera de la liturgia cuyo tema sea religioso.",
      "Los cantos a la Virgen María o algún Santo en especial pueden, según la ocasión, cantarse como canto de salida.",
    ],
  },
];

export const FORMACION_SEASONS: FormacionSection[] = [
  {
    id: "tiempo-adviento",
    title: "Adviento",
    content: [
      "Las fechas de Adviento se fijan de acuerdo a la Navidad. Empieza el cuarto domingo anterior a la Navidad. Es un período en el que la Iglesia se prepara para celebrar la venida de Jesús.",
      "El Adviento es un tiempo de alegre espera: la espera de la llegada del Señor. Por ello, la Iglesia escucha en los textos y cantos palabras alusivas a la venida del Señor y la preparación del corazón para esta celebración.",
      "Durante el Adviento no se canta el Gloria.",
    ],
  },
  {
    id: "tiempo-navidad",
    title: "Navidad",
    content: [
      "Pasadas las cuatro semanas de Adviento, la Iglesia celebra el Tiempo de Navidad, a partir del 25 de diciembre.",
      "Este tiempo se extiende desde las Vísperas de la Natividad del Señor (al atardecer del día 24), hasta las vísperas de la Fiesta del Bautismo del Señor (después del domingo 6 de enero).",
      "Cantos para el tiempo de Navidad: Entrada, Señor ten piedad, Gloria, Aleluya, Ofertorio, Santo, Cordero de Dios, Comunión, Postcomunión, Salida. Pueden incluirse villancicos para la adoración del Niño Jesús.",
    ],
  },
  {
    id: "tiempo-cuaresma",
    title: "Cuaresma",
    content: [
      "La Cuaresma dura 40 días, comienza el Miércoles de Ceniza y termina justo antes de la «Misa de la Cena del Señor» en la tarde del Jueves Santo.",
      "Este tiempo litúrgico tiene 6 domingos incluido el Domingo de Ramos, en cuyas lecturas los temas de la conversión, el pecado, la penitencia y el perdón son dominantes.",
      "No es un tiempo triste, sino más bien de meditación y recogimiento. Es, por excelencia, el tiempo de conversión y penitencia del año litúrgico.",
      "Durante la Cuaresma no se canta ni el Gloria, y el Aleluya es sustituido por el canto de «Honor y Gloria a Ti Señor Jesús» o «Tu palabra Señor es la verdad y la luz de mis ojos».",
    ],
  },
  {
    id: "tiempo-domingo-ramos",
    title: "Domingo de Ramos",
    content: [
      "El Domingo de Ramos es el último domingo de Cuaresma y abre la Semana Santa. Llamado «Domingo de la Pasión del Señor», conmemora la pasión de Cristo, usándose el color rojo y leyendo los textos de la misma.",
      "Previamente se celebra la bendición de ramos, donde son bendecidas las palmas y los ramos de olivo que porta la gente en procesión, rememorando la entrada triunfal de Jesús en Jerusalén.",
      "En esta celebración no se canta ni el Gloria ni el Aleluya.",
    ],
  },
  {
    id: "tiempo-jueves-santo",
    title: "Jueves Santo",
    content: [
      "El Jueves Santo se celebra en el jueves anterior al Domingo de Resurrección, dentro de la Semana Santa, y abre el Triduo Pascual (Pasión, Muerte y Resurrección de Cristo). En este día, la Iglesia conmemora la Institución de la Eucaristía en la Última Cena y el Lavatorio de los pies realizado por Jesús.",
      "En la misa del Jueves Santo sí se canta el Gloria.",
      "Cantos: Entrada, Señor ten Piedad, Gloria, Tu palabra Señor es la verdad, Cantos para el Lavatorio de los pies, Ofertorio, Santo, Cordero de Dios, Comunión, Tantum Ergo. La salida se realiza en silencio.",
      "Al final de la Misa, el celebrante lleva a Jesús Sacramentado a un sagrario especial, solemnemente preparado y embellecido al máximo, al que llamamos monumento.",
    ],
  },
  {
    id: "tiempo-viernes-santo",
    title: "Viernes Santo",
    content: [
      "El Viernes Santo recordamos la muerte de Jesús en la Cruz. Es el único día del año donde no se celebra la Santa Misa. En su lugar se realiza la Exaltación de la Cruz en la cual no hay consagración sino que se comulga de las formas consagradas en el Jueves Santo.",
      "El altar está vacío, para evocar la pobreza de aquellas horas de agonía de Jesús. Los sacerdotes, en lugar de besar el altar, se postran como gesto de veneración.",
      "Tras la proclamación del relato evangélico de la Pasión, los fieles pueden besar el crucifijo. La adoración de la Santa Cruz es un gesto de fe y una proclamación de la victoria de Jesús sobre el demonio, el pecado y la muerte.",
      "Acompañaremos la adoración a la Santa Cruz con cantos penitenciales y solemnes, con sobriedad y recogimiento. Durante la Comunión acompañaremos con el canto. La salida se realiza en silencio.",
    ],
  },
  {
    id: "tiempo-vigilia-pascual",
    title: "Vigilia Pascual",
    content: [
      "La Vigilia Pascual es la celebración más importante. En esta noche de vela, la más solemne para la Iglesia, se rompen los lutos cuaresmales y se canta de nuevo el Gloria y el Aleluya. Esta es la noche santa, la noche que recuerda la victoria de Cristo sobre la muerte.",
      "La celebración comienza con el templo a oscuras, encendiéndose y bendiciéndose el fuego en el atrio. De ese fuego se enciende el Cirio Pascual, que simboliza a Cristo Resucitado. Acto seguido se inicia la procesión del sacerdote y los ministros, y los fieles encienden sus velas de la llama del Cirio.",
      "Se entona el Pregón Pascual. El templo permanece a oscuras hasta que se entone el Gloria. Se proclaman 7 relatos del Antiguo Testamento, intercalados con salmos o cantos y oraciones.",
      "Tras estas lecturas, el sacerdote o el coro entona el Gloria, mientras suenan las campanas. Se encienden las luces del templo y se adornan los altares con arreglos florales, y se descubren las imágenes que permanecían cubiertas desde el Jueves Santo.",
      "Previo al Evangelio se entona de manera solemne el Aleluya. Tras la homilía, tiene lugar la Liturgia Bautismal con las Letanías de los Santos y la renovación de las promesas bautismales.",
      "Cantos: Pregón Pascual, 7 Salmos (uno después de cada lectura del AT), Gloria, Aleluya, Canto para la Bendición y Aspersión del agua bendita, Ofertorio, Santo, Cordero de Dios, Comunión, Postcomunión, Salida.",
    ],
  },
  {
    id: "tiempo-pascua",
    title: "Tiempo de Pascua",
    content: [
      "El tiempo de Pascua conmemora la Resurrección del Señor: su paso de la muerte a la vida. Se extiende a lo largo de 7 semanas (50 días).",
      "Los cincuenta días después de la Pascua se prolongan como un solo día de fiesta, como un solo gran domingo. Durante este tiempo la Iglesia canta la alegría de Cristo Resucitado.",
      "Los cantos son iguales que las misas durante el año, con una connotación de alegría, propia de la fiesta de la Pascua.",
    ],
  },
  {
    id: "tiempo-pentecostes",
    title: "Pentecostés",
    content: [
      "La solemnidad de Pentecostés (que significa cincuenta) cierra el tiempo pascual. Cincuenta días después de la Resurrección del Señor se celebra la venida del Espíritu Santo sobre los apóstoles.",
      "Los cantos son iguales que las misas durante el año, alusivos a este acontecimiento.",
    ],
  },
  {
    id: "tiempo-ordinario",
    title: "Tiempo Ordinario",
    content: [
      "Son los domingos comprendidos por dos períodos: el primero entre el Bautismo del Señor y el Miércoles de Ceniza; el segundo desde Pentecostés hasta la celebración de Cristo Rey.",
      "En este tiempo la Iglesia medita el Evangelio de Cristo, su predicación y vida pública durante los tres años antes de morir.",
      "Los cantos se deben seleccionar según el Evangelio y las lecturas de ese domingo específico.",
    ],
    subsections: [
      {
        id: "cristo-rey",
        title: "Cristo Rey",
        content: [
          "Es el último domingo del año litúrgico y una de las fiestas más importantes, porque celebramos que Cristo es el Rey del universo. Su reino es el Reino de la verdad, de la santidad y de la gracia, de la justicia, del amor y la paz.",
          "Para esta celebración se buscan cantos acerca de que Cristo es el Rey del Universo y nuestro Rey.",
        ],
      },
    ],
  },
];

export const FORMACION_PRAYER = "Señor Jesús, te damos gracias por llamarnos a servirte con nuestra voz. Gracias por cada ensayo, por cada encuentro y por cada misa en la que nos permitís acompañar la oración de tu pueblo. Te ofrecemos nuestras voces, nuestro tiempo y nuestro esfuerzo. Que sepamos cantar con humildad, escuchar con atención y servir con un corazón disponible. Enseñanos a ser unidos, a respetarnos, a ayudarnos y a crecer juntos. Que nuestra música no nos lleve a lucirnos, sino a desaparecer para que seas vos quien brille. Que cada canto sea oración y cada silencio, adoración. María, Madre de la Iglesia, enseñanos a decir «hágase» y a cantar siempre para la gloria de Dios. Amén.";

export const FORMACION_FINAL_MESSAGE = "El coro y la música dentro de la celebración de la Santa Misa deben cumplir siempre el propósito de ayudar a la gente a vivir un encuentro más íntimo con Dios, por lo cual se recomienda incluir cantos de fácil aprendizaje para incentivar a la gente a cantarlos. Es muy importante mantener una comunicación constante y abierta con nuestros sacerdotes para aclarar cualquier duda que podamos tener acerca de si un canto es correcto o no para utilizar durante la celebración de la Santa Misa.";
