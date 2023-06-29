import { tag } from "../componentes/tag.js?n=3";
import { bajarCss } from "../componentes/css.js?n=3";
import { contenido } from "../classes/Contenido.js?n=3";

export function pintarPelicula() {
  const enlace = "./scripts/secciones/pelicula.css";
  bajarCss(enlace, dibujarPelicula);
}

function dibujarPelicula() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);
  seccion.className = "pelicula";

  const video = tag("video", seccion);
  video.controls = true;
  video.src = '../assets/entrevistas/pelicula.mp4';
}