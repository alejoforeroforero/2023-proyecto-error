import { cE } from "../utilidades/utilidades.js";
import { Cuadrado } from "../clases/Cuadrado.js";
import { imgsArray } from "../utilidades/data.js";
import { contenedorGeneral } from "../index.js";
import { videoObj } from "../index.js";

export function pintarTira(section) {
  contenedorGeneral.innerHTML = "";
  let cuadrados = [];

  var div = cE("div", contenedorGeneral);
  div.className = "parent-container";

  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
  pintarBloqueDeImagenes(div, cuadrados);
}

function pintarBloqueDeImagenes(div, cuadrados) {

  const sArray1 = shuffle(imgsArray);

  sArray1.map((img) => {
    let cuadrado = new Cuadrado();
    cuadrado.imgId = img.id;
    cuadrado.pintar(div);
    cuadrado.handlerOnClick = () => {
      contenedorGeneral.innerHTML = "";
      cancelarTimeouts(cuadrados);
      videoObj.ponerVideo(img.id);
    };
    cuadrados.push(cuadrado);
  });
}

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function cancelarTimeouts(cuadrados) {
  cuadrados.map((cuadrado) => cuadrado.cancelarAnimacion());
}
