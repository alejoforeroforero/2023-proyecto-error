import { cE } from "../utilidades/utilidades.js";

export class Cuadrado {
  contenedor;
  posX;
  posY;
  vel = Math.floor(Math.random()*(160 - 120) + 120);
  contador = 0;
  tope = Math.floor(Math.random()*(140 - 60) + 60);
  area;
  ancho;
  alto;
  anchoMax = 40;
  anchoMin1 = 35;
  anchoMin2 = 27;
  img;
  imgId;
  imgWidth = 130;
  timeOut;

  pintar(parentEl) {

    const thisObj = this;

    this.contenedor = cE("div", parentEl);
    this.contenedor.className = "cuadrado";

    this.img = cE("img", this.contenedor);
    this.img.src = `../assets/imgs/home/${this.imgId}.jpg?n=14`;
    this.img.className = "img";
    this.img.style.width = `${this.imgWidth}%`
    this.img.addEventListener("click", ()=> thisObj.handlerOnClick());

    this.animar();
  }

  animar() {
    let thisObj = this;

    if (this.contador < this.tope) {
      this.area = Math.floor(
        Math.random() * (this.anchoMax - this.anchoMin1) + this.anchoMin1
      );
      this.ancho = this.area + 10;
      this.alto = this.area;
    } else {
      this.ancho = Math.floor(
        Math.random() * (this.anchoMax - this.anchoMin2) + this.anchoMin2
      );
      this.alto = Math.floor(
        Math.random() * (this.anchoMax - this.anchoMin2) + this.anchoMin2
      );
    }

    this.contenedor.style.width = `${this.ancho}px`;
    this.contenedor.style.height = `${this.alto}px`;

    this.contador++;

    this.timeOut = setTimeout(() => {
      thisObj.animar();
    }, thisObj.vel);
  }

  cancelarAnimacion() {
    clearTimeout(this.timeOut);
  }
}

