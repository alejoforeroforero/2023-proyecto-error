class VideoObj {
  contenedor = null;
  index = 0;
  imgObj;
  videos = [];
  video;

  ponerVideo(id) {

    let thisObj = this;

    if (!this.contenedor) {
      const div = cE("div", document.body);
      div.className = "video-fondo";

      this.contenedor = div;
    }

    this.contenedor.innerHTML = "";
    this.index = 0;

    let divX = cE("div", this.contenedor);
    divX.className = "cerrar-video";
    divX.innerHTML = "X";
    divX.addEventListener("click", () => {
      this.video.pause();
      this.video.style.animation = 'slide-up 1000ms ease-out forwards'

      setTimeout(()=>{
        thisObj.contenedor.style.display = "none";
        escogerSeccion();
      }, 1000);  
    });

    this.contenedor.style.display = "block";

    this.imgObj = imgsArray.filter(img => img.id === id);

    const videoId = this.imgObj[0].videos[this.index];

    const video = cE("video", this.contenedor);
    video.src = `3-videos/${videoId}.mp4`;
    video.onended = ()=>{thisObj.cambiarVideo(thisObj)};
    setTimeout(()=>{
      video.play()
    }, 1200)

    this.video = video;
  }

  cambiarVideo(thisObj){
    thisObj.index++;

    if(thisObj.index > thisObj.imgObj[0].videos.length -1){
      thisObj.contenedor.style.display = "none";
      escogerSeccion();
    }else{
      setTimeout(()=>{
        const videoId = thisObj.imgObj[0].videos[thisObj.index];
        thisObj.video.src = `3-videos/${videoId}.mp4`;
        thisObj.video.play();
      }, 1000)
    }
  }
}
