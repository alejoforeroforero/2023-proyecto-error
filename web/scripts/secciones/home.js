import { tag } from "../componentes/tag.js?n=2";
import { bajarCss } from "../componentes/css.js?n=2";
import { contenido } from "../classes/Contenido.js?n=2";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "";

    const divP = tag("div", contenido.main);
    divP.innerHTML = "Proyecto Error";
}


