import { tag } from "../componentes/tag.js?n=7";
import { bajarCss } from "../componentes/css.js?n=7";
import { contenido } from "../classes/Contenido.js?n=7";

export function pintarHome() {
  const enlace = "./scripts/secciones/home.css";
  bajarCss(enlace, dibujarHome);
}

function dibujarHome(){
    contenido.main.innerHTML = "";

    const divF = tag("div", contenido.main);
    divF.className = "home-fondo";

    const img = tag("img", divF);
    img.src = "./assets/home.jpg";

    const divC = tag("div", divF);
    divC.className = "home-hero";

    const divP = tag("div", divC);

    const p = tag("p", divP);
    p.innerHTML = "Aca va el texto introductorio que habla sobre el proyecto, bla bla bla, El tiempo del error surge a partir de la pregunta sobre el tiempo, del error surge a partir de la pregunta sobre el tiempo, del error surge a partir de la pregunta sobre el tiempo";

}


