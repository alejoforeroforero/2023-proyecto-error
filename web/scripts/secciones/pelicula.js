import { tag } from "../componentes/tag.js?n=13";
import { bajarCss } from "../componentes/css.js?n=13";
import { contenido } from "../classes/Contenido.js?n=13";

export function pintarPelicula() {
  const enlace = "./scripts/secciones/pelicula.css";
  bajarCss(enlace, dibujarPelicula);
}

function dibujarPelicula() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "submenu-explicacion";

  const h1 = tag("h1", divE);
  h1.innerHTML = "El tiempo del error"

  const h2 = tag("h2", divE);
  h2.innerHTML = "Docuficción"

  const p = tag("p", divE);
  p.innerHTML = "Una mujer encuentra en su paseo cotidiano una maleta, se la lleva a su casa sin saber que cambiaría radicalmente el orden del tiempo.";


  const seccionV = tag("section", contenido.main);
  seccionV.className = "pelicula";

  const video = tag("video", seccionV);
  video.controls = true;
  video.src = '../assets/pelicula/teaser.mp4';
}