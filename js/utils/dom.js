/**
 * @param {String} selector - selector string
 * @param {Element} [context = document] - where to scope the the collection search
 * @return {Array<Element>} - Collection converted to array
 */
export function select(selector, context = document) {
  return context.querySelector(selector);
}


/**
 * @param {String} selector - selector string
 * @param {Element} [context = document] - where to scope the the collection search
 * @return {Array<Element>} - Collection converted to array
 */
export function selectAll(selector, context = document){
  return [].slice.call(context.querySelectorAll(selector));
}
