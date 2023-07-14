import { tag } from "../componentes/tag.js?n=7";
import { bajarCss } from "../componentes/css.js?n=7";
import { contenido } from "../classes/Contenido.js?n=7";

export function pintarCreditos() {
  const enlace = "./scripts/secciones/creditos.css";
  bajarCss(enlace, dibujarCreditos);
}

function dibujarCreditos() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "submenu-explicacion";

  const p = tag("p", divE);
  p.innerHTML = "El tiempo del error es un proyecto apoyado por: <br>"+
  "<br>"+
  "<b>Vicerrectoría de investigación, Pontificia Universidad Javeriana<br>"+
  "Universidad Autónoma de México<br>"+
  "Moebius Animación</b>";

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);

  pintarSubmenu(divM, divMR);

  pintarContenido(divMR, null);
}

function pintarSubmenu(padre, padreContenido) {
  const creditosInfo = [
    {
      id: "equipo",
      titulo: "Equipo",
    },
    {
      id: "donantes",
      titulo: "Donantes errores",
    },
    {
      id: "errorospcopio",
      titulo: "Errorospcopio",
    },
    {
      id: "participantes",
      titulo: "Participantes de los talleres y clases de animación",
    },
    {
      id: "cortometraje",
      titulo: "Cortometraje",
    },
    {
      id: "agradecimientos",
      titulo: "Agradecimientos",
    },
  ];

  creditosInfo.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
      pintarContenido(padreContenido, submenu);
    });
  });
}

function pintarContenido(padre, submenu) {
  padre.innerHTML = "";

  const divT = tag("div", padre);
  divT.className = "submenu-titulo";
  divT.innerHTML = submenu ? submenu.titulo : "Equipo";

  const divC = tag("div", padre);
  divC.className = "creditos-contenido"

  if(submenu === null || submenu.id === "equipo"){
    pintarEquipo(divC);
  }else if(submenu.id === "donantes"){
    pintarDonantes(divC);
  }else if(submenu.id === "errorospcopio"){
    pintarErrorospcopio(divC);
  }else if(submenu.id === "participantes"){
    pintarParticipantes(divC);
  }else if(submenu.id === "agradecimientos"){
    pintarAgradecimientos(divC);
  }
  else{
    pintarCortometraje(divC);
  }
}

function pintarEquipo(padre){
  const p = tag("p", padre);
  p.innerHTML = "<b>Cecilia Traslaviña:</b> Dirección, investigación, animación y coordinación.<br>"+
  "<b>Alejandro Forero:</b> Investigación. Creador página web, co creador del Erroroscopio. Máquina para ver errores.<br>"+
  "<b>Tania de León Yong:</b> Investigación y animación.<br>"+
  "<b>Diego Araque:</b> Creador del Erroroscopio. Máquina para ver errores<br>"+
  "<b>Bibiana Rojas:</b> Camarografía, dirección y montaje<br>"+
  "<b>Carolina Lucio:</b> Ingeniería de sonido. Creación de sonidos<br>"+
  "<b>Sol Molina:</b> Investigación, camarografía, animadora, asistente<br>"+
  "<b>Santiago Ordóñez:</b> Animador"
}

function pintarDonantes(padre){
  const p = tag("p", padre);
  p.innerHTML = "Diego Cortés<br>"+
  "Carla Melo<br>"+
  "Bibi Rojas<br>"+
  "Simón Gerbaud<br>"+
  "Joaquín Cociña<br>"+
  "Cristóbal León<br>"+
  "Tania de León<br>"+
  "Sheila Sofian<br>"+
  "Ana Caro<br>"+
  "Laura Benavides<br>"+
  "Santiago Ordóñez<br>"+
  "Tatiana Vaca<br>"+
  "Catalina Giraldo<br>"+
  "Isabel Herguera<br>"+
  "José Ángel García Moreno<br>"+
  "Juan Camilo Fonnegra<br>"+
  "Julián Arias<br>"+
  "María Lorenzo<br>"+
  "Paul Bush<br>"+
  "María Cristina Pérez<br>"+
  "Amanda Woolrich<br>"+
  "Antonia Bello<br>"+
  "Emilce Ávalos<br>"+
  "Mariana Dicker<br>"+
  "Pablo Ballarín<br>"+
  "Sol Molina<br>"+
  "Aspasia Kazeli<br>"+
  "María Angélica Chalela<br>"+
  "Juliette Pons<br>"+
  "Laura “pollo” Avila<br>"+ 
  "Martina Scarpelli<br>"+
  "Sophia Bazalgette<br>"+
  "Jaime Cleeland<br>"+
  "Ana María Vallejo<br>"+
  "Cecilia Traslaviña"
}

function pintarErrorospcopio(padre){

  const p1 = tag("p", padre)

  const p = tag("p", padre);
 
}

function pintarParticipantes(padre){
  const h1 = tag("h1", padre);
  h1.innerHTML = "Taller Toro:"

  const p = tag("p", padre);
  p.innerHTML = "Natalia Roa Sánchez<br>"+
  "Sara Osorio<br>"+
  "Gildardo Martínez<br>"+
  "Adriana Zúñiga<br>"+
  "Natalia Argüello<br>"+
  "Carlos David Cruz<br>"+
  "Kevin Gallego<br>"+
  "John Gómez<br>"+
  "Francia Rodríguez<br>"+
  "Juan Diego Orozco<br>"+
  "Meli Marcow<br>"+
  "Angie Montenegro<br>"+
  "Juan Pablo Vargas<br>"+
  "Silvana Corrales<br>"+
  "María Urcuqui<br>"+
  "María del Mar Gómez<br>"+
  "Juan Manuel Padilla<br>"+
  "Santiago Torres<br>"+
  "Matias Serna"

  const h1PUJ = tag("h1", padre);
  h1PUJ.innerHTML = "Taller PUJ:"

  const pPUJ = tag("p", padre);
  pPUJ.innerHTML = "Laura Helena Hernández<br>"+
  "Sofía Peña<br>"+
  "Sergio Alejandro Prieto<br>"+
  "Samuel Varón<br>"+
  "Ana Velandia"

  const h1PUJ2 = tag("h1", padre);
  h1PUJ2.innerHTML = "Ejercicios en clase. Facultad de Artes PUJ:"

  const pPUJ2 = tag("p", padre);
  pPUJ2.innerHTML = "Laurent Cabarcas<br>"+
  "Diego Fernández<br>"+
  "Esteban Forero<br>"+
  "Pablo Herrera<br>"+
  "Paola Marín<br>"+
  "Sophia Nieto<br>"+
  "Alejandro Prieto<br>"+
  "Paulina Zapata<br>"+
  "Nicolas León <br>"+
  "Samuel Ángel Galeano<br>"+ 
  "Cristina Franco <br>"+
  "María Lucia González<br>"+
  "Paula Ruiz"
}

function pintarCortometraje(padre){
  const h1 = tag("h1", padre);
  h1.innerHTML = "Dirección y montaje:"

  const p = tag("p", padre);
  p.innerHTML = "Cecilia Traslaviña y Bibiana Rojas";

  const h1D = tag("h1", padre);
  h1D.innerHTML = "Diseño sonoro:"

  const pD = tag("p", padre);
  pD.innerHTML = "Carolina Lucio"

  const h1C1 = tag("h1", padre);
  h1C1.innerHTML = "Cámara:"

  const pC1 = tag("p", padre);
  pC1.innerHTML = "Bibiana Rojas Gómez"

  const h1C2 = tag("h1", padre);
  h1C2.innerHTML = "Cámara 2:"

  const pC2 = tag("p", padre);
  pC2.innerHTML = "Cecilia Traslaviña"

  const h1C3 = tag("h1", padre);
  h1C3.innerHTML = "Cámara 16mm: "

  const pC3 = tag("p", padre);
  pC3.innerHTML = "Sol Molina"

  const h1T = tag("h1", padre);
  h1T.innerHTML = "Tomas adicionales:"

  const pT = tag("p", padre);
  pT.innerHTML = "Sol Molina<br>"+
  "Cecilia Traslaviña<br>"+
  "Juan Pablo Forero"

  const h1P = tag("h1", padre);
  h1P.innerHTML = "Con la participación de:"

  const pP = tag("p", padre);
  pP.innerHTML = "Mauricio Durán<br>"+
  "Diego Araque<br>"+
  "Juan Pablo Forero<br>"+
  "Raquel Páez<br>"+
  "Diego Cortés<br>"+
  "Sergio Barón<br>"+
  "Cecilia Traslaviña"

  const h1A = tag("h1", padre);
  h1A.innerHTML = "Animación e intervenciones:"

  const pA = tag("p", padre);
  pA.innerHTML = "Tania de León Yong<br>"+
  "Santiago Ordóñez<br>"+
  "Patricia Pulido <br>"+
  "Alejandro Forero<br>"+
  "Carolina Lucio<br>"+
  "Sol Molina<br>"+
  "Bibiana Rojas<br>"+
  "Cecilia Traslaviña <br>"+
  "Nicolas León <br>"+
  "Samuel Ángel Galeano<br>"+ 
  "Cristina Franco <br>"+
  "María Lucia González<br>"+
  "Paula Ruiz <br>"+
  "Laurent Cabarcas<br>"+
  "Diego Fernández<br>"+
  "Esteban Forero<br>"+
  "Pablo Herrera<br>"+
  "Paola Marín<br>"+
  "Sophia Nieto<br>"+
  "Alejandro Prieto<br>"+
  "Paulina Zapata<br>"+
  "Laura Helena Hernández<br>"+
  "Sofía Peña<br>"+
  "Sergio Alejandro Prieto<br>"+
  "Samuel Varón<br>"+
  "Ana Velandia<br>"+
  "Natalia Roa Sánchez<br>"+
  "Sara Osorio<br>"+
  "Gildardo Martínez<br>"+
  "Adriana Zúñiga<br>"+
  "Natalia Argüello<br>"+
  "Carlos David Cruz<br>"+
  "Kevin Gallego<br>"+
  "John Gómez<br>"+
  "Francia Rodríguez<br>"+
  "Juan Diego Orozco<br>"+
  "Meli Marcow<br>"+
  "Angie Montenegro<br>"+
  "Juan Pablo Vargas<br>"+
  "Silvana Corrales<br>"+
  "María Urcuqui<br>"+
  "María del Mar Gómez<br>"+
  "Juan Manuel Padilla<br>"+
  "Santiago Torres<br>"+
  "Matias Serna"

  const h1V = tag("h1", padre);
  h1V.innerHTML = "Texto y voz: "

  const pV = tag("p", padre);
  pV.innerHTML = "Cecilia Traslaviña";

  const h1M = tag("h1", padre);
  h1M.innerHTML = "Música: "

  const pM = tag("p", padre);
  pM.innerHTML = "Letargo de Licuadoras Luminosas. Discos la Milagrosa 2022 <br>"+
  "Archivo de cine fragmento de La maleta 2012, realizadores: Mauricio Durán, Claudia Salamanca, Camilo Cogua, Pilar Forero, Andrés Jurado, Cecilia Traslaviña (aunque usamos solo los fragmentos de Mauricio, Pilar y Ceci)";
}

function pintarAgradecimientos(padre){

  const p = tag("p", padre);
  p.innerHTML = "A los y las donantes de errores<br>"+
  "Sol Molina<br>"+
  "Juan Pablo Forero<br>"+
  "Diego Cortés<br>"+
  "Sergio Barón<br>"+
  "Raquel Páez<br>"+
  "Mauricio Durán<br>"+
  "Simón Ortega<br>"+
  "Juan David Cárdenas" 
}