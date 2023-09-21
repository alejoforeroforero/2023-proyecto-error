import { tag } from "../componentes/tag.js?n=14";
import { bajarCss } from "../componentes/css.js?n=14";
import { contenido } from "../classes/Contenido.js?n=14";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "";

    const divF = tag("div", contenido.main);
    divF.className = "home-fondo";

    const img = tag("img", divF);
    img.src = "./assets/home.jpg?n=14";

    const divC = tag("div", divF);
    divC.className = "home-hero";

    const divP = tag("div", divC);
    divP.className = "home-parrafo";    

    const p2 = tag("p", divP);
    p2.innerHTML = "El Tiempo del error es un proyecto de investigación- creación que explora la composición del tiempo audiovisual haciendo énfasis en la animación mediante el uso de fotogramas rechazados como errores en otros procesos creativos, donados por diferentes animadores y animadoras. <br><br>"+
    "Dichas imágenes se constituyeron en la materia prima de una experimentación colectiva teniendo como eje la imagen-tiempo, así como las potencias creativas contenidas en dichos fotogramas descartados, cruzados por la pregunta sobre lo que implica comprender la creación audiovisual desde el error como lugar de exploración<br><br>"+
    "De este proyecto se desprendieron tres obras: Este sitio web que actúa tanto como repositorio de los procesos, así como el lugar en el que muestran los resultados de creación colectiva a partir de los errores-fotogramas donados. Es también una invitación a los usuarios del sitio a crear con los errores que encontrarán para ser descargados.<br><br>"+
    "Otro de los resultados fue una película de carácter ensayístico que explora, a través de la ficción, las potencias y fantasmas que acompañan a toda imagen-tiempo. Aquí encontrarán el Trailer. Por último, se creó El erroroscopio. Máquina para ver errores, siendo este último resultado el que condensa de manera más potente nuestra investigación y reflexiones sobre el error en la creación en el terreno audiovisual específicamente en la animación.<br><br>"+
    "Bienvenidos y disfruten. "

    const p3 = tag("p", divP);
    p3.innerHTML = "Apoyado por: <br>"+    
    "Vicerrectoría de investigación <br>"+
    "Pontificia Universidad Javeriana <br>"+
    "Universidad Autónoma de México <br>"+
    "Moebius Animación"
}


