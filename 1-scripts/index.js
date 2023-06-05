let cuadrados = [];
let contenedorGeneral;
let videoObj;

correr();

function correr() {
  videoObj = new VideoObj();

  const header = cE("header", document.body);

  pintarHeader(header);

  const section = cE("section", document.body);
  section.className = "contenedor-general";

  contenedorGeneral = section;

  escogerSeccion();
}

function escogerSeccion() {
  contenedorGeneral.innerHTML = "";

  let nombrePagina = location.hash;

  if (nombrePagina === "#home") {
    pintarHome(contenedorGeneral);
  } else if (nombrePagina === "#intervenciones") {
    pintarIntervenciones(contenedorGeneral);
  } else if (nombrePagina === "#reflexiones") {
    pintarReflexiones(contenedorGeneral);
  } else if (nombrePagina === "#sonido") {
    pintarSonido(contenedorGeneral);
  } else if (nombrePagina === "#creditos") {
    pintarCreditos(contenedorGeneral);
  } else {
    pintarHome(contenedorGeneral);
  }
}

function pintarIntervenciones(section) {
  section.innerHTML = "Intervenciones";
}

function pintarReflexiones(section) {
  section.innerHTML = "Reflexiones";
}

function pintarSonido(section) {
  section.innerHTML = "Sonido";
}

function pintarCreditos(section) {
  section.innerHTML = "Créditos";
}
