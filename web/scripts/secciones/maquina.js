import { tag } from "../componentes/tag.js?n=3";
import { bajarCss } from "../componentes/css.js?n=3";
import { contenido } from "../classes/Contenido.js?n=3";

export function pintarMaquina() {
  const enlace = "./scripts/secciones/maquina.css";
  bajarCss(enlace, dibujarMaquina);
}

function dibujarMaquina() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "submenu-explicacion";

  const p = tag("p", divE);
  p.innerHTML = "La máquina"

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);
  
  pintarSubmenu(divM, divMR);

  pintarContenido(divMR, null);
}

function pintarSubmenu(padre, padreContenido) {
  const reflexiones = [
    {
      id: "proceso",
      titulo: "Proceso",
    },
    {
      id: "resultado",
      titulo: "Resultado",
    },
  ];

  reflexiones.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
        pintarContenido(padreContenido, submenu);
    });
  });
}

function pintarContenido(padre, submenu){

  padre.innerHTML = "";

  const divT = tag("div", padre);
  divT.className = "submenu-titulo"
  divT.innerHTML = (submenu) ? submenu.titulo : "Proceso";

}