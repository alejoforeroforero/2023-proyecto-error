let cuadrados = [];
let contenedorGeneral;
let videoObj;

correr();

function correr() {
  videoObj = new VideoObj();

  const section = cE("section", document.body);
  section.className = "contenedor-general";

  contenedorGeneral = section;

  escogerSeccion();
}

function escogerSeccion() {
  contenedorGeneral.innerHTML = "";

  pintarHome(contenedorGeneral);
}
