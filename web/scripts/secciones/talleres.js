import { tag } from "../componentes/tag.js?n=5";
import { bajarCss } from "../componentes/css.js?n=5";
import { contenido } from "../classes/Contenido.js?n=5";

export function pintarTalleres() {
  const enlace = "./scripts/secciones/talleres.css";
  bajarCss(enlace, dibujarTalleres);
}

function dibujarTalleres() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "submenu-explicacion";

  const p = tag("p", divE);
  p.innerHTML = "los talleres"

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);
  
  pintarTalleresSubmenu(divM, divMR);

  pintarTalleresContenido(divMR, null);
}

function pintarTalleresSubmenu(padre, padreContenido) {
  const reflexiones = [
    {
      id: "cine-toro",
      titulo: "Cine Toro",
    },
    {
      id: "javeriana",
      titulo: "Universidad Javeriana",
    },
    {
        id: "choachi",
        titulo: "Choachi",
      },
  ];

  reflexiones.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
        pintarTalleresContenido(padreContenido, submenu);
    });
  });
}

function pintarTalleresContenido(padre, submenu){

  padre.innerHTML = "";

  const divT = tag("div", padre);
  divT.className = "submenu-titulo"
  divT.innerHTML = (submenu) ? submenu.titulo : "Cine Toro";
}