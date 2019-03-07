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
      content: ['layouts/**/*.html', 'js/**/*.js'],
      whitelistPatterns: stateClasses,
      whitelistPatternsChildren: stateClasses,
      // https://gist.github.com/reinink/83058f9af402aa474010844f7f2b1c54
      extractors: [
        {
          extractor: class {
            static extract(content) {
              return content.match(/[A-z0-9-@:\/]+/g)
            }
          },
          extensions: ['html', 'js']
        }
      ]
    })
  ];

  return {
    plugins
  }
})();
