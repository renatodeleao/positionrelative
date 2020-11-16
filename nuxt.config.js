// replace with require.context
const PRIMARY_FONT_WEIGHTS = ['Regular', 'SemiBold', 'Bold']
const SECONDARY_FONT_WEIGHTS = ['Regular', 'Bold']
const pkg = require('./package.json');

const banner = `
@preserve
@name ${pkg.name}
@version ${pkg.version}
@license: ${pkg.license}
© ${pkg.author}`;

const stateClasses = [/^is-/i, /^js-/i, /-js$/, /^no-/i, /^has-/i];

export default {
  head: {
    titleTemplate: '%s — Position Relative',
    htmlAttrs: {
      lang: 'en',
    },

    /**
     * META STUFF
     */
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, width=device-width, initial-scale=1.0',
      },
    ],

    /**
     * FONT-PRELOAD
     */
    link: [
      ...PRIMARY_FONT_WEIGHTS.map(w => ({
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
        href: `/fonts/inter/Inter-${w}.woff2`
      })),
      ...SECONDARY_FONT_WEIGHTS.map(w => ({
        rel: 'preload',
        as: 'font',
        type: 'font/woff2',
        crossorigin: 'anonymous',
        href: `/fonts/rajdhani/Rajdhani-${w}.woff2`
      }))
    ],
  },

  components: true,
  css: ['~/styles/index.scss'],

  /**
   * Make sass variables/mixins/functions available globally
   */
  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-purgecss',
  ],

  /**
   * BUILD MODULES CONFIGS
   */
  styleResources: {
    // your settings here
    scss: [
      '~/styles/settings/_index.scss',
      '~/styles/tools/_index.scss',
    ],
  },

  purgecss: {
    whitelist: stateClasses,
  },

  build: {
    postcss: {
      // Add plugin names as key and arguments as value
      // Install them before as dependencies with npm or yarn
      plugins: {
        // Disable a plugin by passing false as value
        'postcss-banner': {
          banner: banner,
          important: true
        },
        // '@fullhuman/postcss-purgecss': {
        //   content: ['~/layouts/**/*.vue', '~/components/**/*.vue'],
        //   whitelistPatterns: stateClasses,
        //   whitelistPatternsChildren: stateClasses,
        //   // https://gist.github.com/reinink/83058f9af402aa474010844f7f2b1c54
        //   extractors: [
        //     {
        //       extractor: class {
        //         static extract(content) {
        //           return content.match(/[A-z0-9-@:\/]+/g)
        //         }
        //       },
        //       extensions: ['vue', 'js']
        //     }
        //   ]
        // }
      },
      preset: {
        // Change the postcss-preset-env settings
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
