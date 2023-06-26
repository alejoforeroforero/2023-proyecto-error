import { tag } from "../componentes/tag.js";

export class Frame {
  contenedor = null;

  ponerFrame(id) {
    let thisObj = this;

    if (!this.contenedor) {
      const div = tag("div", document.body);
      div.className = "frame-pc-fondo";
      this.contenedor = div;
    }

    this.contenedor.innerHTML = "";

    let divX = tag("div", this.contenedor);
    divX.className = "frame-pc-cerrar";
    divX.innerHTML = "X";
    divX.addEventListener("click", () => {
      this.video.style.animation = "slide-up 1000ms ease-out forwards";

      setTimeout(() => {
        this.frameIC.removeChild(thisObj.video);
        document.body.removeChild(thisObj.contenedor);
      }, 1000);
    });

    this.contenedor.style.display = "block";

    this.frameIC = tag("div", this.contenedor);
    this.frameIC.className = "frame-pc-ic";
    this.frameIC.style.animation = "slide-down 1000ms ease-out forwards";

    const indexOfPunto = id.lastIndexOf(".");

    const ext = id.slice(indexOfPunto + 1);

    if (ext === "mp4") {
      const video = tag("video", this.frameIC);
      video.src = id;
      video.loop = true;
      setTimeout(() => {
        video.play();
      }, 1200);

      this.video = video;
    } else {
      const img = tag("img", this.frameIC);
      img.src = id;
      this.video = img;
    }
  }
}
