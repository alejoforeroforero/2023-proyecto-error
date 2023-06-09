import { cE } from "./utilidades/utilidades.js";
import { pintarTira } from "./paginas/tira.js";
import { VideoObj } from "./clases/VideoObj.js";

export let contenedorGeneral;
export const videoObj = new VideoObj();

correr();

function correr() {
 
  const section = cE("section", document.body);
  section.className = "contenedor-general";

  contenedorGeneral = section;

  escogerSeccion();
}

export function escogerSeccion() {
  contenedorGeneral.innerHTML = "";

  pintarTira();
}

