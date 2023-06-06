function pintarFrames(section) {
    section.innerHTML = "";
  
    const div = cE("div", section);
    div.className = "frames-container";
  
    for(let i=66; i<216; i++){

        const divFI = cE('div', div);
        divFI.className = 'categoria-img-contenedor'

        crearFrame(divFI, i)
    }
}

let videosCat = [70, 71, 72, 73, 74];

function crearFrame(divFI, n){

    let ext = (videosCat.indexOf(n) < 0) ? '_P.jpg' : '_O.mp4';

    let nombre = `2-imgs/categorias/${n}${ext}`;

    if(ext === '_P.jpg'){
        const img = cE('img', divFI);
        img.src = nombre;
    }else{
        const video = cE('video', divFI)
        video.src = nombre;
    }
}