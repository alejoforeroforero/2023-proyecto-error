import { tag } from "../componentes/tag.js?n=7";
import { bajarCss } from "../componentes/css.js?n=7";
import { contenido } from "../classes/Contenido.js?n=7";
import { Frame } from "../classes/Frame.js?n=7";

export function pintarReflexiones() {
  const enlace = "./scripts/secciones/reflexiones.css";
  bajarCss(enlace, dibujarReflexiones);
}

function dibujarReflexiones() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "submenu-explicacion";

  const cita = tag("p", divE);
  cita.innerHTML =
    "“Leí -o creyendo que recuerdo, invento- que existen lenguas en las cuales el mismo verbo significa ‘equivocarse’ o ‘caer en una trampa’ y al mismo tiempo ‘triunfar’ o ‘lograr su objetivo’.” Roger Caillois";

  const p = tag("p", divE);
  p.innerHTML =
    "Para tener una idea más amplia de lo que significa el error en diferentes disciplinas, conversamos con algunos colegas y artistas. Encontramos un amplio panorama de posibilidades que brinda el error. Para muchos amplía el espectro de sus reflexiones, para otros es un motivo para detenerse a pensar y en otros ámbitos el error puede resultar nefasto. Los invitamos a consultar estas reflexiones.";

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);
  divMR.className = "contenido-seccion-general";

  pintarReflexioneSubmenu(divM, divMR);

  pintarReflexionesContenido(divMR, null);
}

function pintarReflexioneSubmenu(padre, padreContenido) {
  const reflexiones = [
    {
      id: "entrevistas",
      titulo: "Entrevistas",
    },
    {
      id: "textos",
      titulo: "Textos",
    },
  ];

  reflexiones.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
      pintarReflexionesContenido(padreContenido, submenu);
    });
  });
}

function pintarReflexionesContenido(padre, submenu) {
  padre.innerHTML = "";

  const titulo = submenu ? submenu.titulo : "Entrevistas";

  const divT = tag("div", padre);
  divT.className = "submenu-titulo";
  divT.innerHTML = titulo;

  const divC = tag("div", padre);
  divC.className = "reflexiones";

  if (titulo === "Entrevistas") {
    pintarEntrevistas(divC);
  } else {
    //pintarTextos();
  }

  // const spanOjo = tag("span", divV);
  // spanOjo.className = "frames-header-btn";
  // spanOjo.innerHTML = "&#9903;";
  // spanOjo.addEventListener("click", ()=>{
  //   const frameObj = new Frame();
  //   frameObj.ponerFrame(nombre);
  // })
}

function pintarEntrevistas(padre) {
  const entrevistas = [
    {
      id: "enrico",
      titulo: "Enrico Mandirola",
      img: "../assets/entrevistas/enrico.jpg",
      video: "../assets/entrevistas/enrico.mp4",
      info: "Cineasta y artista visual italiano instalado en Bogotá desde el año 2007. Desde el 2012 es profesor de cine y fotografía en la Tecnología en Realización Audiovisual de la Facultad de Ciencias de la Comunicación de la Universidad Minuto de Dios. Desde el 2015 es profesor de cátedra en la Maestría de Creación Audiovisual y el pregrado de Artes de la Facultad de Artes de la Pontificia Universidad Javeriana. Es miembro del laboratorio colectivo de artistas-cineastas “L’Abominable” (http://www.l-abominable.org) de Paris, espacio donde inició su trabajo artístico como experimentador audiovisual entre el año 2001 y 2006. Fundó en 2007 el laboratorio de cine artesanal KinoLab-Colombia (www.kinolabcolombia.blogspot.com), espacio dedicado a la creación y recuperación de la memoria colectiva en los formatos de cine Súper-8 y 16mm.",
      temas:
        "Pedagogía, el error en la creación audiovisual, el error y la vida, el miedo al error",
    },
    {
      id: "olga",
      titulo: "Juan David Cárdenas",
      img: "../assets/entrevistas/enrico.jpg",
      video: "../assets/entrevistas/olga.mp4",
      info: "Realizador de cine y TV y filósofo. Se dedica a la escritura de guion de ficción, a la dirección de cine argumental, a la realización híbrida entre documental y ficción, y a la teoría de los medios técnicos tales como la fotografía, el cine y los medios digitales. Sus intereses creativos tienen que ver por la relación entre imagen, técnica y política en el contexto de la modernidad",
      temas:
        "El error como categoría moral. El error en la creación audiovisual. Ir al encuentro de las imágenes. Liberación del tiempo.",
    },
    {
      id: "olga",
      titulo: "Olga Lucía Ospina",
      img: "../assets/entrevistas/olga.jpg",
      video: "../assets/entrevistas/olga.mp4",
      info: "Profesora de física, licenciada en física y Magister en Ciencias Biológicas de la Pontificia Universidad Javeriana. Hizo sus estudios de doctorado en Biofísica en la Universidad Complutense de Madrid. Montó un laboratorio de estudio de propiedades mecánicas de películas interfaciales. Su pasión es la enseñanza de la física, compartir con sus estudiantes para poner en marcha la unión entre la creatividad y el aprendizaje, acogiendo siempre el error",
      temas:
        "El error en la ciencia. Control de los procesos. Pedagogía y experimentación. Relaciones con otras disciplinas. Imaginarios de la ciencia. ",
    },
    {
      id: "botero",
      titulo: "Santiago Botero",
      img: "../assets/entrevistas/olga.jpg",
      video: "../assets/entrevistas/olga.mp4",
      info: "Contra(bajista), improvisador, compositor y pedagogo.  Realizó sus estudios en contrabajo jazz y clásico en el Conservatorio de Amsterdam (Países Bajos) y maestría en estudios de Improvisación Libre en el Conservatorio de Arnhem (Países Bajos). Es profesor de contrabajo y ensambles en la Facultad de Artes de la Pontificia Universidad Javeriana (Bogotá, Colombia). Director musical de diferentes iniciativas que orbitan en el mundo de la improvisación libre, la música experimental, el punk y la cumbia como MULA, El Ombligo, Los Toscos, BoteroDelgado Dúo y Pérez Trío.",
      temas:
        "El error como materia en la creación musical. Reconfiguración del significado de error. La improvisación y sus derivas. Lecturas del error.",
    },
    {
      id: "arias",
      titulo: "Juan Carlos Arias",
      img: "../assets/entrevistas/olga.jpg",
      video: "../assets/entrevistas/olga.mp4",
      info: "Investigador y realizador audiovisual. PhD en Historia del Arte de la University of Illinois at Chicago. Su interés gira alrededor de la relación entre imagen y violencia, particularmente en el arte latinoamericano y en la producción documental.",
      temas:
        "Habitar el error. Atender la incertidumbre. Procesos de creación. Otras maneras de ver. La sobre codificación de las imágenes.",
    },
    {
      id: "equipo",
      titulo: "Equipo",
      img: "../assets/entrevistas/olga.jpg",
      video: "../assets/entrevistas/olga.mp4",
      info: "",
      temas:
        "Obsesión por la perfección. Noción de autor. Trabajo colectivo. Apropiación. Redirigir la mirada. Intención.",
    },
    {
      id: "ordone",
      titulo: "Santiago Ordóñez - From the future to the past",
      img: "../assets/entrevistas/olga.jpg",
      video: "../assets/entrevistas/olga.mp4",
      info: "En esta animación Santiago Ordóñez, en quien se inspira este proyecto, reflexiona sobre la creación de tiempos y el error en animación",
      temas:
        "Artista visual y animador. Actualmente realiza una maestría en animación en Estonian Academy of Arts",
    },
  ];

  entrevistas.map((entrevista) => {
    const divG = tag("div", padre);

    const img = tag("img", divG);
    img.src = entrevista.img;
    img.addEventListener("click", () => {
      const frameObj = new Frame();
      frameObj.controles = true;
      frameObj.ponerFrame(entrevista.video);
    });

    const pTi = tag("h1", divG);
    pTi.innerHTML = entrevista.titulo;

    const pI = tag("p", divG);
    pI.innerHTML = entrevista.info;

    const pT = tag("p", divG);
    pT.innerHTML = "<b>Temas:</b> " + entrevista.temas;
  });
}
