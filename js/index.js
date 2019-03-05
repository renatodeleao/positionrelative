// UTILS
import hasTouchEvents from "./utils/touchevents.js";

// move to some folder sometime
(function touch() {
  if(hasTouchEvents()) {
    document.documentElement.classList.add('touchevents')
  }
})();

// COMPONENTS
import "./components/masthead.js";

