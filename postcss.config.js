const pkg = require('./package.json');

const banner = `
@preserve
@name ${pkg.name}
@version ${pkg.version}
@license: ${pkg.license}
© ${pkg.author}`;

const stateClasses = [/^is-/i, /^js-/i, /-js$/, /^no-/i, /^has-/i];
module.exports = (context => {
  const plugins =  [
    require('autoprefixer'),
    require('postcss-banner')({banner: banner, important: true}),
    require('@fullhuman/postcss-purgecss')({
      content: ['layouts/**/*.html'],
      whitelistPatterns: stateClasses,
      whitelistPatternsChildren: stateClasses
    })
  ];

  return {
    plugins
  }
})();
