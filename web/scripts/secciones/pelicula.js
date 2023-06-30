import { tag } from "../componentes/tag.js?n=7";
import { bajarCss } from "../componentes/css.js?n=7";
import { contenido } from "../classes/Contenido.js?n=7";

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