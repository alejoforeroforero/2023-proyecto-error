import { tag } from "../componentes/tag.js?n=14";
import { bajarCss } from "../componentes/css.js?n=14";
import { contenido } from "../classes/Contenido.js?n=14";
import { Frame } from "../classes/Frame.js?n=14";

export function pintarMaquina() {
  const enlace = "./scripts/secciones/maquina.css";
  bajarCss(enlace, dibujarMaquina);
}

const reflexiones = [
  // {
  //   id: "proceso",
  //   titulo: "Proceso",
  //   img: "../assets/talleres/toro-resultado.jpg",
  //   video: "../assets/talleres/toro-proceso.mp4",
  // },
  {
    id: "resultado",
    titulo: "Resultado",
    img: "../assets/maquina/maquina-resultado.jpg?n=14",
    video: "../assets/maquina/maquina-resultado.mp4",
  },
  {
    id: "proceso",
    titulo: "Proceso",
    img: "../assets/maquina/maquina-prueba-img.jpg?n=14",
    video: "../assets/maquina/maquina-prueba.mp4",
  },
];

function dibujarMaquina() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "menu-explicacion";

  const p = tag("p", divE);
  p.innerHTML =
    "El erroroscopio es una máquina creada para ver los errores. Partimos de la base de que, si estos fotogramas eran imágenes que habían sido expulsadas de una línea de tiempo, y ahora eran fotogramas errantes, necesitaríamos encontrar una temporalidad que les permitiera expresar su naturaleza, por lo tanto, una forma de habitar el error creando lecturas singulares del tiempo. Para esto, hicimos una selección de errores, los imprimimos y luego los filmamos en película de 16mm.<br>" +
    "<br>" +
    "El erroroscopio es un proyector que obedece a otras lógicas del tiempo, rompe con los códigos establecidos de ver que tenemos tan arraigados y propone ritmos que no corresponden a la velocidad de un proyector tradicional, sino que es la luz que emerge de los dibujos lo que hace que se altere la velocidad<br>" +
    "<br>" +
    "En el centro de la máquina está anclada una bomba que se expande y contrae a un ritmo constante es una alusión al tiempo, pero no a un tiempo lineal sino orgánico, como es en realidad el tiempo.";

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);

  pintarSubmenu(divM, divMR);

  pintarContenido(divMR, reflexiones[0]);
}

function pintarSubmenu(padre, padreContenido) {
  reflexiones.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
      pintarContenido(padreContenido, submenu);
    });
  });
}

function pintarContenido(padre, submenu) {
  padre.innerHTML = "";

  if (submenu.id === "resultado") {
    pintarResultado(padre, submenu);
  } else {
    pintarProceso(padre, submenu);
  }
}

function pintarResultado(padre, submenu) {
  const divT = tag("div", padre);
  divT.className = "submenu-titulo";
  divT.innerHTML = submenu ? submenu.titulo : "Proceso";

  const seccion = tag("section", padre);
  seccion.className = "maquina";

  const divProceso = tag("div", seccion);
  divProceso.className = "maquina-modulo";

  const divPImg = tag("div", divProceso);

  const img = tag("img", divPImg);
  img.src = submenu.img;

  const imgE = tag("img", divPImg);
  imgE.src = "./assets/eye.png?n=14";
  imgE.addEventListener("click", () => {
    const frameObj = new Frame();
    frameObj.controles = true;
    frameObj.ponerFrame(submenu.video);
  });
}

function pintarProceso(padre, submenu) {
  const divT = tag("div", padre);
  divT.className = "submenu-titulo";
  divT.innerHTML = submenu.titulo;

  const seccion = tag("section", padre);
  seccion.className = "maquina";

  const divDiagrama = tag("div", seccion);
  divDiagrama.className = "maquina-diagrama";

  const imgD = tag("img", divDiagrama);
  imgD.src = "../assets/maquina/maquina-diagrama.jpg?n=14";

  const divProceso = tag("div", seccion);
  divProceso.className = "maquina-diagrama-video";

  const divPImg = tag("div", divProceso);

  const img = tag("img", divPImg);
  img.src = submenu.img;

  const imgE = tag("img", divPImg);
  imgE.src = "./assets/eye.png?n=14";
  imgE.addEventListener("click", () => {
    const frameObj = new Frame();
    frameObj.controles = true;
    frameObj.ponerFrame(submenu.video);
  });


}
