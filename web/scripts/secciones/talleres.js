import { tag } from "../componentes/tag.js?n=14";
import { bajarCss } from "../componentes/css.js?n=14";
import { contenido } from "../classes/Contenido.js?n=14";
import { Frame } from "../classes/Frame.js?n=14";

const reflexiones = [
  {
    id: "cine-toro",
    titulo: "Cine Toro",
    fecha: "25 y 26 de noviembre de 2022",
    imgProceso: "../assets/talleres/toro-proceso.jpg?n=14",
    imgResultado: "../assets/talleres/toro-resultado.jpg?n=14",
    proceso: "../assets/talleres/toro-proceso.mp4",
    resultado: "../assets/talleres/toro-resultado.mp4",
    desc: "Este taller se realizó durante el Festival de Cine Experimental de Toro, Valle, en el que participaron estudiantes e interesad s en la animación.",
  },
  {
    id: "javeriana",
    titulo: "Universidad Javeriana",
    fecha: "29 de septiembre de 2022",
    imgProceso: "../assets/talleres/puj-proceso.jpg?n=14",
    imgResultado: "../assets/talleres/puj-resultado.jpg?n=14",
    proceso: "../assets/talleres/puj-proceso.mp4",
    resultado: "../assets/talleres/puj-resultado.mp4",
    desc: "Este taller se realizó en el marco de la Semana 9, evento de la Carrera de Artes Visuales en la Pontificia Universidad Javeriana.",
  },
  {
    id: "choachi",
    titulo: "Choachi",
    fecha: "14 de octubre de 2022",
    imgProceso: null,
    imgResultado: "../assets/talleres/choachi-resultado.jpg?n=14",
    proceso: null,
    resultado: "../assets/talleres/choachi-resultado.mp4",
    desc: "Este taller fue un encuentro entre los miembros del equipo y algunos invitados. Nos reunimos a hacer nuestras propias versiones con los errores.",
  },
];

export function pintarTalleres() {
  const enlace = "./scripts/secciones/talleres.css";
  bajarCss(enlace, dibujarTalleres);
}

function dibujarTalleres() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "menu-explicacion";

  const p = tag("p", divE);
  p.innerHTML =
    "Cuando realizamos los ejercicios y talleres con diferentes personas, surgieron animaciones inesperadas, pues, aunque de antemano sabíamos que el hecho de poner una imagen al lado de otra podría generar un sentido tanto en quien las organiza como en el futuro espectador, también sabíamos que podría ocurrir lo contrario, una serie de imágenes desplazándose a diferentes velocidades podrían llegar a herir el ojo, hacerlas insoportables. Pero surgieron muchas otras posibilidades además de la libre asociación ya fuera por color, formas, texturas, etc, en algunos casos propusimos y en otros surgió espontáneamente, realizar metamorfosis, escoger tres dibujos, dos extremos y un intermedio y realizar así una secuencia en donde se partía de un dibujo para llegar al otro pasando por ese otro dibujo seleccionado, jugando con las formas. También surgieron ejercicios cíclicos que con sus repeticiones van pasando por diferentes velocidades desde el arrullo hasta la hostigación. De estas maneras las imágenes despertaron y formaron muchas otras posibilidades de pertenecer a un tiempo, es decir a su naturaleza de ser imágenes-tiempo.";

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);

  pintarTalleresSubmenu(divM, divMR);

  pintarTalleresContenido(divMR, reflexiones[0]);
}

function pintarTalleresSubmenu(padre, padreContenido) {
  reflexiones.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
      pintarTalleresContenido(padreContenido, submenu);
    });
  });
}

function pintarTalleresContenido(padre, submenu) {
  padre.innerHTML = "";

  const divT = tag("div", padre);
  divT.className = "submenu-titulo";
  divT.innerHTML = submenu ? submenu.titulo : "Cine Toro";

  const divF = tag("div", padre);
  divF.className = "fecha";
  divF.innerHTML = submenu.fecha;

  const divP = tag("div", padre);
  divP.className = "submenu-explicacion";

  const p = tag("p", divP);
  p.innerHTML = submenu.desc;

  const seccion = tag("section", padre);
  seccion.className = "talleres";

  if (submenu.imgProceso) {
    pintarProceso(seccion, submenu);
  }

  if (submenu.imgResultado) {
    pintarResultado(seccion, submenu);
  }
}

function pintarProceso(seccion, submenu) {
  const divProceso = tag("div", seccion);
  divProceso.className = "talleres-modulo";

  const h1 = tag("h1", divProceso);
  h1.innerHTML = "Proceso";

  const divPImg = tag("div", divProceso);

  const img = tag("img", divPImg);
  img.src = submenu.imgProceso;

  const imgE = tag("img", divPImg);
  imgE.src = "./assets/eye.png?n=14";
  imgE.addEventListener("click", () => {
    const frameObj = new Frame();
    frameObj.controles = true;
    frameObj.ponerFrame(submenu.proceso);
  });
}

function pintarResultado(seccion, submenu) {
  const divProceso = tag("div", seccion);
  divProceso.className = "talleres-modulo";

  const h1 = tag("h1", divProceso);
  h1.innerHTML = "Resultado";

  const divPImg = tag("div", divProceso);

  const img = tag("img", divPImg);
  img.src = submenu.imgResultado;

  const imgE = tag("img", divPImg);
  imgE.src = "./assets/eye.png?n=14";
  imgE.addEventListener("click", () => {
    const frameObj = new Frame();
    frameObj.controles = true;
    frameObj.ponerFrame(submenu.resultado);
  });
}
