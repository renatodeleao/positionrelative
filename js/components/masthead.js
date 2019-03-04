import MobileVhTrick from "~utils/mobile-vh-trick.js";
import hasTouchEvents from "~utils/touchevents.js";

export class Masthead {
	constructor() {
    this.node = document.querySelector("[data-js-component='masthead']");

    this.init();
  }

  init = () => {
    if(hasTouchEvents()){
      this.vhFixer = new MobileVhTrick({debounceRate: 10});
      this.vhFixer.init();
    }
  }
}

new Masthead();
