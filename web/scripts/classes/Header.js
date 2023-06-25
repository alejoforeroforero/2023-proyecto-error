import { bajarCss } from "../componentes/css.js?n=2";
import { tag } from "../componentes/tag.js?n=2";
import { menu } from "../classes/Menu.js?n=2";

class Header {
  pintar() {
    const enlace = "./scripts/classes/Header.css";
    bajarCss(enlace, this.pintarHeader.bind(this));
  }

  pintarHeader() {
    const logoH = tag("div", this.headerC);
    logoH.className = "logo-header";
    
    this.pintarLogoHeader(logoH);

    const centroH = tag("div", this.headerC);
    centroH.innerHTML = "Proyecto Error";

    const loginH = tag("div", this.headerC);
    loginH.className = "header-menu";

    this.pintarMenu(loginH);
  }

  pintarLogoHeader(el) {
    el.innerHTML = "";
  }

  pintarMenu(el) {

    const divM = tag('div', el);
    divM.className = 'hamburguesa';
    divM.addEventListener('click', ()=>menu.conmutarMenu())
  
    this.pintarHamburguesa(divM);
  }
  
  pintarHamburguesa(el){
    for(let i=0; i<3; i++){
      const div = tag('div', el);
      div.innerHTML = '';
    }
  }
}

export const header = new Header();
