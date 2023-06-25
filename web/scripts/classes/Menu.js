import { bajarCss } from "../componentes/css.js?n=2";
import { tag } from "../componentes/tag.js?n=2";

class Menu {
  menuActivo = false;

  pintar() {
    const enlace = "./scripts/classes/Menu.css";
    bajarCss(enlace, this.pintarMenu.bind(this));
  }

  pintarMenu() {
    this.menuC.className = "menu";

    const nav = tag("nav", this.menuC);

    this.pintarMenuItem(nav, "Home", "#/home");
    this.pintarMenuItem(nav, "Frames", "#/frames");
    this.pintarMenuItem(nav, "Reflexiones", "#/reflexiones");
  }

  pintarMenuItem(nav, titulo, locacion) {
    const a = tag("a", nav);
    a.innerHTML = titulo;
    a.addEventListener("click", () => {
      this.conmutarMenu();
      window.location.href = locacion;
    });
  }

  conmutarMenu() {
    if (this.menuActivo) {
      this.menuActivo = false;
      this.menuC.style.animation = "slide-up 300ms ease-out forwards";
    } else {
      this.menuActivo = true;
      this.menuC.style.animation = "slide-down 200ms ease-out forwards";
    }
  }
}

export const menu = new Menu();
