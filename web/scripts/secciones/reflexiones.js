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

  const p = tag("p", divE);
  p.innerHTML =
    "En esta sección encontrarás entrevistas en video sobre el concepto de error en las artes y textos en relación al tiempo y el conecpto de error";

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);
  divMR.className = "contenido-seccion-general"

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
      titulo: "Entrevista con Enrico",
      img:"../assets/entrevistas/enrico.jpg",
      video:'../assets/entrevistas/enrico.mp4'
    },
    {
      id: "olga",
      titulo: "Entrevista con Olga",
      img:"../assets/entrevistas/olga.jpg",
      video:'../assets/entrevistas/olga.mp4'
    },
    {
      id: "olga",
      titulo: "Entrevista con Olga",
      img:"../assets/entrevistas/olga.jpg",
      video:'../assets/entrevistas/olga.mp4'
    },
  ];

  entrevistas.map((entrevista)=>{
    const img = tag("img", padre);
    img.src = entrevista.img;
    img.addEventListener("click", ()=>{
      const frameObj = new Frame();
      frameObj.controles = true;
      frameObj.ponerFrame(entrevista.video);
    })
  })
}
