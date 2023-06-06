class Cuadrado {
  contenedor;
  posX;
  posY;
  vel = Math.floor(Math.random() * (200 - 100) + 70);
  contador = 0;
  tope = Math.floor(Math.random() * (100 - 40) + 80);
  area;
  ancho;
  alto;
  anchoMax = 70;
  anchoMin1 = 64;
  anchoMin2 = 64;
  img;
  imgId;
  imgWidth = 150;
  timeOut;

  pintar(parentEl) {

    const thisObj = this;

    this.contenedor = cE("div", parentEl);
    this.contenedor.className = "cuadrado";

    this.img = cE("img", this.contenedor);
    this.img.src = `2-imgs/home/${this.imgId}.jpg`;
    this.img.className = "img";
    this.img.style.width = `${this.imgWidth}%`
    this.img.addEventListener("click", () => {
      thisObj.handlerOnClick(thisObj);
    });

    this.animar();
  }

  handlerOnClick(thisObj) {
    contenedorGeneral.innerHTML = "";
    cancelarTimeouts();
    videoObj.ponerVideo(thisObj.imgId);
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

function cancelarTimeouts() {
  for (const cuadrado of cuadrados) {
    cuadrado.cancelarAnimacion();
  }

  cuadrados = [];
}
