import { header } from "./classes/Header.js?n=14";
import { menu } from "./classes/Menu.js?n=14";
import { contenido } from "./classes/Contenido.js?n=14";
import { tag } from "./componentes/tag.js?n=14";
import { pintarHome } from "./secciones/home.js?n=14";
import { pintarFrames } from "./secciones/frames.js?n=14";
import { pintarReflexiones } from "./secciones/reflexiones.js?n=14";
import { pintarTalleres } from "./secciones/talleres.js?n=14";
import { pintarMaquina } from "./secciones/maquina.js?n=14";
import { pintarPelicula } from "./secciones/pelicula.js?n=14";
import { pintarCreditos } from "./secciones/creditos.js?n=14";

empezar();

function empezar() {
  crearEstructura();
}

function crearEstructura() {
  const headerC = tag("header", document.body);
  header.headerC = headerC;

  header.pintar();

  const menuC = tag("div", document.body);
  menu.menuC = menuC;

  menu.pintar();

  const main = tag("main", document.body);

  contenido.main = main;

  escogerSeccion();
}

function escogerSeccion() {
  let nombrePagina = location.hash;

  window.scrollTo(0, 0);

  if (nombrePagina === "#/home") {
    pintarHome();
  } else if (nombrePagina === "#/categorias") {
    pintarFrames();
  } else if (nombrePagina === "#/reflexiones") {
    pintarReflexiones();
  } else if (nombrePagina === "#/talleres") {
    pintarTalleres();
  } else if (nombrePagina === "#/maquina") {
    pintarMaquina();
  } else if (nombrePagina === "#/pelicula") {
    pintarPelicula();
  } else if (nombrePagina === "#/creditos") {
    pintarCreditos();
  } else {
    pintarHome();
  }
}

window.addEventListener("hashchange", function () {
  escogerSeccion();
});
