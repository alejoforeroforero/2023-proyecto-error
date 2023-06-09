import { tag } from "../componentes/tag.js?n=7";
import { bajarCss } from "../componentes/css.js?n=7";
import { contenido } from "../classes/Contenido.js?n=7";

export function pintarMaquina() {
  const enlace = "./scripts/secciones/maquina.css";
  bajarCss(enlace, dibujarMaquina);
}

function dibujarMaquina() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "submenu-explicacion";

  const p = tag("p", divE);
  p.innerHTML = "El erroroscopio es una máquina creada para ver los errores. Partimos de la base de que, si estos fotogramas eran imágenes que habían sido expulsadas de una línea de tiempo, y ahora eran fotogramas errantes, necesitaríamos encontrar una temporalidad que les permitiera expresar su naturaleza, por lo tanto, una forma de habitar el error creando lecturas singulares del tiempo. Para esto, hicimos una selección de errores, los imprimimos y luego los filmamos en película de 16mm.<br>"+
  "El erroroscopio es un proyector que obedece a otras lógicas del tiempo, rompe con los códigos establecidos de ver que tenemos tan arraigados y propone ritmos que no corresponden a la velocidad de un proyector tradicional, sino que es la luz que emerge de los dibujos lo que hace que se altere la velocidad<br>"+
  "En el centro de la máquina está anclada una bomba que se expande y contrae a un ritmo constante es una alusión al tiempo, pero no a un tiempo lineal sino orgánico, como es en realidad el tiempo."

  const divM = tag("div", seccion);
  divM.className = "submenu";

  const divMR = tag("div", seccion);
  
  pintarSubmenu(divM, divMR);

  pintarContenido(divMR, null);
}

function pintarSubmenu(padre, padreContenido) {
  const reflexiones = [
    {
      id: "proceso",
      titulo: "Proceso",
    },
    {
      id: "resultado",
      titulo: "Resultado",
    },
  ];

  reflexiones.map((submenu) => {
    const span = tag("span", padre);
    span.innerHTML = submenu.titulo;
    span.addEventListener("click", () => {
        pintarContenido(padreContenido, submenu);
    });
  });
}

function pintarContenido(padre, submenu){

  padre.innerHTML = "";

  const divT = tag("div", padre);
  divT.className = "submenu-titulo"
  divT.innerHTML = (submenu) ? submenu.titulo : "Proceso";

}