import { tag } from "../componentes/tag.js?n=14";
import { bajarCss } from "../componentes/css.js?n=14";
import { contenido } from "../classes/Contenido.js?n=14";
import { Frame } from "../classes/Frame.js?n=14";

export function pintarFrames() {
  const enlace = "./scripts/secciones/frames.css?n=14";
  bajarCss(enlace, bajarFramesPopup);
}

function bajarFramesPopup() {
  const enlace = "./scripts/classes/Frame.css?n=14";
  bajarCss(enlace, dibujarFrames);
}

let videosCat = [
  70, 71, 72, 73, 74, 80, 81, 83, 84, 85, 86, 94, 102, 106, 116, 118, 119, 120,
  122, 123, 124, 129, 153, 154, 156, 157, 158, 159, 161, 162, 163, 164, 165,
  166, 167, 168, 169, 170, 171, 172, 173, 176, 177, 178, 179, 188, 189, 190,
  191, 192, 193, 202, 206, 207, 208, 209, 210, 211, 212, 213,
];

function dibujarFrames() {
  contenido.main.innerHTML = "";

  const seccion = tag("section", contenido.main);

  const divE = tag("div", seccion);
  divE.className = "menu-explicacion";

  const p = tag("p", divE);
  p.innerHTML =
    "Cuando nos enfrentamos a los errores donados, descubrimos en cada una de estas imágenes aspectos que nos llevaron a preguntarnos por qué eran un error, en algunos casos era evidente, pero en otros no, por lo que recurrimos a la imaginación, como si fuéramos arqueólogos, observamos detenidamente los contenidos de las imágenes  atentos a cualquier pista  sobre el movimiento y su temporalidad, por insignificante que fuera, basándonos en las formas, los colores, su lugar en el encuadre. Estábamos frente a imágenes solitarias que reclamaban por ser activadas. De acuerdo con Esther Leslie, “las cosas que una vez se movieron, pero que con el tiempo entraron en reposo, se vuelven rígidas, se petrifican. En animación, el proceso se invierte: las cosas que nunca se desplazaron por sí mismas se dirigen hacia el movimiento. La petrificación original se convierte en agitación” (Animation's Petrified Unrest. Pervasive Animation. Animation documentaries. Edited By Suzanne Buchan Routledge, 2014), queríamos entonces sacar esas imágenes de su petrificación confiando en su secreto temporal, ellas mismas revelarían a la persona que las activara sus temporalidades, se dirigirían hacia el movimiento.<br>" +
    "<br>" +
    "Parecería contradictorio categorizar los errores, pues, son imágenes que quedaron abandonadas, son libres, no pertenecen ya ninguna película así contengan alguna huella latente del tiempo para el que fueron creadas. Al ver estos fotogramas varias veces, era inevitable encontrar algún tipo de conexiones entre ellos por lo que decidimos crear estas categorías para invitar a jugar con ellas, y, ¿por qué no?, a crear nuevas formas de agrupar los errores";

  const divDescarga = tag("div", divE);
  divDescarga.className = "descarga";

  const pDescarga = tag("p", divDescarga);

  pDescarga.innerHTML =
    "Les invitamos a descargar los fotogramas para que hagan sus propias animaciones. Las compartiremos en este sitio. Escríbannos a: cecihyde@moebiusanimacion.com";

  const divC = tag("div", seccion);
  divC.className = "submenu";

  const divF = tag("div", seccion);

  pintarCategorias(divC, divF);

  pintarFramesSeleccionados(null, divF);
}

function pintarCategorias(padre, padreFrames) {
  const categorias = [
    {
      id: "todos",
      titulo: "Innumerables",
      frames: null,
    },
    {
      id: "colores",
      titulo: "Deslumbrantes",
      frames: colores,
    },
    {
      id: "interiores",
      titulo: "Memorables",
      frames: interiores,
    },
    {
      id: "animales",
      titulo: "Agitados",
      frames: animales,
    },
    {
      id: "humanoides",
      titulo: "Terrenales",
      frames: humanoides,
    },
    {
      id: "objetos",
      titulo: "Fabulosos",
      frames: objetos,
    },
    {
      id: "abstractos",
      titulo: "Indeterminados",
      frames: abstractos,
    },
    {
      id: "atmosferas",
      titulo: "Estimulantes",
      frames: atmosferas,
    },
    {
      id: "luzysombra",
      titulo: "Plisados y rugosos",
      frames: luzysombra,
    },
    {
      id: "movimientos",
      titulo: "Efervescentes",
      frames: movimientos,
    },
  ];

  categorias.map((categoria) => {
    const span = tag("span", padre);
    span.innerHTML = categoria.titulo;
    span.addEventListener("click", () => {
      if (categoria.id === "todos") {
        pintarFramesSeleccionados(null, padreFrames);
      } else {
        pintarFramesSeleccionados(categoria, padreFrames);
      }
    });
  });
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function pintarFramesSeleccionados(categoria, padre) {
  padre.innerHTML = "";

  await delay(800);

  const divT = tag("div", padre);
  divT.className = "submenu-titulo";
  divT.innerHTML = categoria ? categoria.titulo : "Innumerables";

  const divFrames = tag("div", padre);
  divFrames.className = "frames-container";

  if (categoria) {
    categoria.frames.map((frameId) => {
      const n = frameId.split("_")[0];

      const divFI = tag("div", divFrames);
      divFI.className = "categoria-img-contenedor";

      crearFrame(divFI, parseInt(n));
    });
  } else {
    for (let i = 66; i < 216; i++) {
      const divFI = tag("div", divFrames);
      divFI.className = "categoria-img-contenedor";

      crearFrame(divFI, i);
    }
  }
}

function crearFrame(divFI, n) {
  let esVideo = videosCat.indexOf(n) < 0 ? false : true;
  let ext = videosCat.indexOf(n) < 0 ? "_P.jpg" : "_O.mp4";
  let nombre = `../assets/imgs/categorias/${n}_P.jpg`;
  let nombreData = `../assets/imgs/categorias/${n}${ext}`;
  let extDescarga = videosCat.indexOf(n) < 0 ? "_O.jpg" : "_O.mp4";
  let nombreDescarga = `../assets/imgs/categorias/${n}${extDescarga}`;

  const divV = tag("span", divFI);
  divV.className = "frames-header";

  const spanOjo = tag("span", divV);
  spanOjo.className = "frames-header-btn";
  spanOjo.addEventListener("click", () => {
    const frameObj = new Frame();
    frameObj.ponerFrame(nombreData);
  });

  const eye = tag("img", spanOjo);
  eye.src = "./assets/eye.png?n=14";

  if (!esVideo) {
    const span = tag("span", divV);
    span.className = "frames-header-btn";

    const a = tag("a", span);
    a.download = n;
    a.href = nombreDescarga;

    const descargar = tag("img", a);
    descargar.src = "./assets/descargar.png?n=14";

    const img = tag("img", divFI);
    img.src = nombre;
  } else {
    const spanS = tag("span", divV);
    spanS.innerHTML = "(Secuencia) ";

    const span = tag("span", divV);
    span.className = "frames-header-btn";

    const a = tag("a", span);
    a.download = n;
    a.href = nombreDescarga;

    const descargar = tag("img", a);
    descargar.src = "./assets/descargar.png?n=14";

    const img = tag("img", divFI);
    img.src = nombre;
  }
}

const colores = [
  "66_O",
  "67_O",
  "68_O",
  "69_O",
  "70_O",
  "71_O",
  "72_O",
  "73_O",
  "74_O",
  "75_O",
  "76_O",
  "78_O",
  "79_O",
  "80_O",
  "81_O",
  "82_O",
  "83_O",
  "84_O",
  "85_O",
  "86_O",
  "87_O",
  "89_O",
  "90_O",
  "91_O",
  "92_O",
  "93_O",
  "94_O",
  "95_O",
  "96_O",
  "97_O",
  "98_O",
  "100_O",
  "101_O",
  "102_O",
  "103_O",
  "104_O",
  "105_O",
];
const interiores = [
  "107_O",
  "108_O",
  "109_O",
  "110_O",
  "111_O",
  "112_O",
  "113_O",
  "114_O",
  "115_O",
  "105_O",
  "69_O",
  "76_O",
  "77_O",
  "104_O",
];
const animales = [
  "116_O",
  "117_O",
  "118_O",
  "119_O",
  "120_O",
  "121_O",
  "122_O",
  "123_O",
  "124_O",
  "125_O",
  "77_O",
];
const humanoides = [
  "126_O",
  "127_O",
  "128_O",
  "129_O",
  "130_O",
  "131_O",
  "132_O",
  "133_O",
  "134_O",
  "135_O",
  "136_O",
  "137_O",
  "138_O",
  "139_O",
  "140_O",
  "141_O",
  "142_O",
  "143_O",
  "144_O",
  "145_O",
  "146_O",
  "147_O",
  "148_O",
  "149_O",
  "150_O",
  "151_O",
  "152_O",
  "75_O",
  "153_O",
  "154_O",
  "155_O",
  "156_O",
  "157_O",
  "158_O",
  "159_O",
  "160_O",
  "161_O",
  "162_O",
  "163_O",
  "164_O",
  "165_O",
];
const objetos = [
  "167_O",
  "168_O",
  "105_O",
  "69_O",
  "169_O",
  "170_O",
  "215_O",
  "216_O",
];
const abstractos = [
  "171_O",
  "172_O",
  "173_O",
  "174_O",
  "175_O",
  "176_O",
  "177_O",
  "178_O",
  "179_O",
  "180_O",
  "181_O",
  "182_O",
  "183_O",
  "184_O",
  "185_O",
  "186_O",
  "187_O",
  "188_O",
  "189_O",
  "190_O",
  "89_O",
  "90_O",
  "91_O",
  "92_O",
  "93_O",
  "94_O",
  "71_O",
  "73_O",
  "214_O",
];
const atmosferas = [
  "191_O",
  "192_O",
  "193_O",
  "194_O",
  "195_O",
  "196_O",
  "196_O",
  "197_O",
  "198_O",
  "199_O",
  "200_O",
  "201_O",
  "103_O",
  "198_O",
  "199_O",
];
const luzysombra = [
  "202_O",
  "203_O",
  "204_O",
  "205_O",
  "206_O",
  "191_O",
  "188_O",
  "154_O",
  "98_O",
  "99_O",
  "100_O",
  "101_O",
  "112_O",
  "113_O",
  "114_O",
];
const movimientos = [
  "207_O",
  "208_O",
  "209_O",
  "210_O",
  "102_O",
  "211_O",
  "212_O",
  "213_O",
  "81_O",
  "70_O",
  "71_O",
  "72_O",
  "73_O",
  "81_O",
  "86_O",
  "94_O",
  "118_O",
  "119_O",
  "120_O",
  "153_O",
  "154_O",
  "156_O",
  "157_O",
  "158_O",
  "159_O",
  "161_O",
  "162_O",
  "163_O",
  "165_O",
  "171_O",
  "172_O",
  "173_O",
  "167_O",
  "168_O",
  "169_O",
  "170_O",
];
