import MobileVhTrick from "~utils/mobile-vh-trick.js";
import hasTouchEvents from "~utils/touchevents.js";
import { select, selectAll } from "~utils/dom.js";
import _ from "~utils/lodash.js";
import { BREAKPOINTS } from "~utils/enums.js";

export class Masthead {
  static ns = "masthead";
  static DEFAULTS = {
    drawerOpenClassname: "is-open"
  }

  constructor() {
    // we should use some webcomponents library/stimulus.js
    // Something that makes this more readable and without
    // So much parsing boilerplate code.
    this.node = select(`[data-js-component="${Masthead.ns}"]`);
    this.targets = selectAll(`[data-js-target*="${Masthead.ns}."]`, this.node);
    this.actions = selectAll(`[data-js-action*="${Masthead.ns}#"]`, this.node);
    this.drawer = select(`[data-js-target*="${Masthead.ns}.drawer"]`, this.node);

    this.drawerIsOpen = false;
    this.init();
  }

  openDrawer = () => {
    this.drawerIsOpen = true;
    this.node.classList.add(Masthead.DEFAULTS.drawerOpenClassname)
    document.body.classList.add('no-overflow')
    this.drawer.removeAttribute('aria-hidden');
  }

  closeDrawer = () => {
    this.drawerIsOpen = false;
    this.node.classList.remove(Masthead.DEFAULTS.drawerOpenClassname)
    document.body.classList.remove('no-overflow');
    this.drawer.setAttribute('aria-hidden', 'true');
  };

  toggleDrawer = () => {
    this.drawerIsOpen
      ? this.closeDrawer()
      : this.openDrawer()
  }

  _handleDrawerOnResize = _.debounce((e) => {
    if(
      window.matchMedia(`(min-height: ${BREAKPOINTS.xs})`).matches ||
      window.matchMedia(`(min-width: ${BREAKPOINTS.mdl})`).matches
    ) {
      this.closeDrawer();
    }
  }, 300)

  _mapActions = () => {
    this._actionsMap = [];
    this.actions.map(el => {
      let evt = el.getAttribute('data-js-action-event');
      let method = el.getAttribute('data-js-action').trim().replace(" ", "").split(`${Masthead.ns}#`).slice(1)[0];

      this._actionsMap.push({el, evt, method})
    })
  }

  _addEvents = () => {
    this._actionsMap.map(a => {
      a.el.addEventListener(a.evt, this[a.method]);
    })

    window.addEventListener('resize', this._handleDrawerOnResize)
  }

  _removeEvents = () => {
    this._actionsMap.map(a => {
      a.el.removeEventListener(a.evt, this[a.method]);
    })

    window.removeEventListener('resize', this._handleDrawerOnResize)
  }

  init = () => {
    if(hasTouchEvents()){
      this.vhFixer = new MobileVhTrick({debounceRate: 10});
      this.vhFixer.init();
    }

    this._mapActions();
    this._addEvents();
  }

  destroy = () => {
    if(this.vhFixer) this.vhFixer.destroy();
    this._removeEvents();
  }
}

new Masthead();
