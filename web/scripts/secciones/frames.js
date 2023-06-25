import { tag } from "../componentes/tag.js?n=2";
import { bajarCss } from "../componentes/css.js?n=2";
import { contenido } from "../classes/Contenido.js?n=2";

export function pintarFrames() {
  const enlace = "./scripts/secciones/frames.css";
  bajarCss(enlace, dibujarFrames);
}

function dibujarFrames(){
    contenido.main.innerHTML = "Frames";
}
