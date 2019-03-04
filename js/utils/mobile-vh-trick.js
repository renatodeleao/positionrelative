import _ from "./lodash.js";

/**
 * @desc Fix bug when browser chrome (bottom bar) appears
 * and viewport units are not resize properly
 * @link https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 */
export default class MobileVhTrick {
  static DEFAULTS = {
    debounceRate: 150
  }

	constructor(options = {}) {
    this.options = {...MobileVhTrick.DEFAULTS, ...options}
    this._fixOn = _.debounce(this.fixViewportHeight, this.options.debounceRate)
  }

  fixViewportHeight = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  _addEvents() {
    window.addEventListener('resize', this._fixOn)
  }

  _removeEvents() {
    window.removeEventListener('resize', this._fixOn)
  }

  init = () => {
    this.fixViewportHeight();
    this._addEvents();
  }

  destroy = () => {
    this._removeEvents();
  }
}
