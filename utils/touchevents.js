
/**
 * They don't have module system and i wasn't feel like
 * creating a custom build.
 *
 * @author Modernizr
 * @link https://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript/4819886#4819886
 * @link https://github.com/Modernizr/Modernizr/blob/master/feature-detects/touchevents.js
 */
export default function hasTouchEvents() {
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  var mq = function(query) {
    return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch) {
    return true;
  }
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}
