import { tag } from "../componentes/tag.js?n=13";
import { bajarCss } from "../componentes/css.js?n=13";
import { contenido } from "../classes/Contenido.js?n=13";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "";

    const divF = tag("div", contenido.main);
    divF.className = "home-fondo";

    const img = tag("img", divF);
    img.src = "./assets/home.jpg?n=13";

    const divC = tag("div", divF);
    divC.className = "home-hero";

    const divCita = tag("div", divC);
    divCita.className = "home-cita";

    const p = tag("p", divCita);
    p.innerHTML = "Según la acepción más común errar consiste en ir de un lado a otro y dejar que sea el azar quien guíe nuestros pasos. Pero errar también significa arriesgarse a cometer errores. Errar es la forma en que vagabundea la serendipidad.<br>"+
    "<br>Clément Chéroux, <br>(Breve historia del error fotográfico, Serieve, 2009, México. Pg.135)"

    const divP = tag("div", divC);
    divP.className = "home-parrafo";    

    const p2 = tag("p", divP);
    p2.innerHTML = "El Tiempo del error, es el resultado de una serie de ejercicios audiovisuales que exploran la composición del tiempo en la animación a partir de imágenes que han sido rechazadas como errores en otros procesos de creación.<br>"+
    "Se conformó un archivo de fotogramas donados por distintos animadores y animadoras que se convirtieron en la materia prima de experimentación colectiva alrededor de las posibilidades que se abren al trabajar desde y con el error."
    
    const p3 = tag("p", divP);
    p3.innerHTML = "Apoyado por: <br>"+    
    "Vicerrectoría de investigación <br>"+
    "Pontificia Universidad Javeriana <br>"+
    "Universidad Autónoma de México <br>"+
    "Moebius Animación"
}


