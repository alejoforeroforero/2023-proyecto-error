import { tag } from "../componentes/tag.js?n=2";
import { bajarCss } from "../componentes/css.js?n=2";
import { contenido } from "../classes/Contenido.js?n=2";

export function pintarReflexiones() {
  const enlace = "./scripts/secciones/reflexiones.css";
  bajarCss(enlace, dibujarReflexiones);
}

function dibujarReflexiones() {
  contenido.main.innerHTML = "Reflexiones 2";
}