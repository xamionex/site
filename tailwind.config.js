module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
      container: {
        padding: '2rem',
      },
      extend: {
        colors: {
          'bgback': 'rgba(221,119,255,.333)',
          'textback': 'rgba(255,255,255,.8)',
          'info': 'linear-gradient(125deg,#01001c 20%,rgba(0,90,102,0.008) 100%)',
          'birthday': 'linear-gradient(125deg,#1c0014 20%,rgba(102,0,92,0.008) 100%)',
          'gallery': 'linear-gradient(125deg,#2d003d 20%,rgba(84,61,0,0.008) 100%)',
        },
        backgroundImage: {
          'info': 'linear-gradient(125deg,#01001c 20%,rgba(0,90,102,0.008) 100%)',
          'birthday': 'linear-gradient(125deg,#1c0014 20%,rgba(102,0,92,0.008) 100%)',
          'bday': 'radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,2,61,1) 80%, rgba(0,212,255,1) 100%);',
          'bdaytxt': 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 20%, rgba(0,212,255,1) 40%, rgba(0,212,255,1) 60%, rgba(9,9,121,1) 80%, rgba(2,0,36,1) 100%);',
          'gallery': 'linear-gradient(125deg,#2d003d 20%,rgba(84,61,0,0.008) 100%)',
          'back': 'linear-gradient(125deg,rgba(255,0,119,0.533) 20%,transparent 100%)',
          'unused': 'linear-gradient(125deg,rgba(94,0,44,0.78) 20%,transparent 100%)',
        },
        fontFamily: {
          londrinashadow: ['Londrina Shadow'],
          solway: ['Solway'],
          josefinsans: ['Josefin Sans'],
          alegreyasans: ['Alegreya Sans']
        }
      },
      textIndent: { // defaults to {}
        '1': '0.25rem',
        '2': '0.5rem',
      },
      textShadow: { // defaults to {}
        'default': 'none',
        'slight': '0 2px 5px rgba(0, 0, 0, 0.5)',
        'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
        'drop': '0.23rem 0.2rem 0.15rem black',
        'drop-invert': '0.23rem 0.2rem 0.15rem white',
        'neon-sm': '0 0 7px #ff9a9a, 0 0 10px #d94012, 0 0 21px #d94012',
        'neon-md': '0 0 7px #ff9a9a, 0 0 10px #d94012, 0 0 21px #d94012, 0 0 42px #d94012, 0 0 82px #d94012',
        'neon-lg': '0 0 7px #ff9a9a, 0 0 10px #d94012, 0 0 21px #d94012, 0 0 42px #d94012, 0 0 82px #d94012, 0 0 92px #d94012',
        'neon-xl': '0 0 7px #ff9a9a, 0 0 10px #d94012, 0 0 21px #d94012, 0 0 42px #d94012, 0 0 82px #d94012, 0 0 92px #d94012, 0 0 102px #d94012',
        'neon-2xl': '0 0 7px #ff9a9a, 0 0 10px #d94012, 0 0 21px #d94012, 0 0 42px #d94012, 0 0 82px #d94012, 0 0 92px #d94012, 0 0 102px #d94012, 0 0 151px #d94012',
        'blueneon': '0 0 7px cyan, 0 0 10px blue, 0 0 21px blue',
      },
      textDecorationStyle: { // defaults to these values
        'solid': 'solid',
        'double': 'double',
        'dotted': 'dotted',
        'dashed': 'dashed',
        'wavy': 'wavy',
      },
      textDecorationColor: { // defaults to theme => theme('colors')
        'red': '#f00',
        'green': '#0f0',
        'blue': '#00f',
      },
      fontVariantCaps: { // defaults to these values
        'normal': 'normal',
        'small': 'small-caps',
        'all-small': 'all-small-caps',
        'petite': 'petite-caps',
        'unicase': 'unicase',
        'titling': 'titling-caps',
      },
      fontVariantNumeric: { // defaults to these values
        'normal': 'normal',
        'ordinal': 'ordinal',
        'slashed-zero': 'slashed-zero',
        'lining': 'lining-nums',
        'oldstyle': 'oldstyle-nums',
        'proportional': 'proportional-nums',
        'tabular': 'tabular-nums',
        'diagonal-fractions': 'diagonal-fractions',
        'stacked-fractions': 'stacked-fractions',
      },
      fontVariantLigatures: { // defaults to these values
        'normal': 'normal',
        'none': 'none',
        'common': 'common-ligatures',
        'no-common': 'no-common-ligatures',
        'discretionary': 'discretionary-ligatures',
        'no-discretionary': 'no-discretionary-ligatures',
        'historical': 'historical-ligatures',
        'no-historical': 'no-historical-ligatures',
        'contextual': 'contextual',
        'no-contextual': 'no-contextual',
      },
      textRendering: { // defaults to these values
        'rendering-auto': 'auto',
        'optimize-legibility': 'optimizeLegibility',
        'optimize-speed': 'optimizeSpeed',
        'geometric-precision': 'geometricPrecision'
      },
      textStyles: theme => ({ // defaults to {}
        heading: {
          output: false, // this means there won't be a "heading" component in the CSS, but it can be extended
          fontWeight: theme('fontWeight.bold'),
          lineHeight: theme('lineHeight.tight'),
        },
        h1: {
          extends: 'heading', // this means all the styles in "heading" will be copied here; "extends" can also be an array to extend multiple text styles
          fontSize: theme('fontSize.5xl'),
          '@screen sm': {
            fontSize: theme('fontSize.6xl'),
          },
        },
        h2: {
          extends: 'heading',
          fontSize: theme('fontSize.4xl'),
          '@screen sm': {
            fontSize: theme('fontSize.5xl'),
          },
        },
        h3: {
          extends: 'heading',
          fontSize: theme('fontSize.4xl'),
        },
        h4: {
          extends: 'heading',
          fontSize: theme('fontSize.3xl'),
        },
        h5: {
          extends: 'heading',
          fontSize: theme('fontSize.2xl'),
        },
        h6: {
          extends: 'heading',
          fontSize: theme('fontSize.xl'),
        },
        link: {
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.blue.400'),
          '&:hover': {
            color: theme('colors.blue.600'),
            textDecoration: 'underline',
          },
        },
        richText: {
          fontWeight: theme('fontWeight.normal'),
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.relaxed'),
          '> * + *': {
            marginTop: '1em',
          },
          'h1': {
            extends: 'h1',
          },
          'h2': {
            extends: 'h2',
          },
          'h3': {
            extends: 'h3',
          },
          'h4': {
            extends: 'h4',
          },
          'h5': {
            extends: 'h5',
          },
          'h6': {
            extends: 'h6',
          },
          'ul': {
            listStyleType: 'disc',
          },
          'ol': {
            listStyleType: 'decimal',
          },
          'a': {
            extends: 'link',
          },
          'b, strong': {
            fontWeight: theme('fontWeight.bold'),
          },
          'i, em': {
            fontStyle: 'italic',
          },
        },
      }),
    },
    variants: { // all the following default to ['responsive']
      textIndent: ['responsive'],
      textShadow: ['responsive'],
      textDecorationStyle: ['responsive'],
      textDecorationColor: ['responsive'],
      ellipsis: ['responsive'],
      hyphens: ['responsive'],
      kerning: ['responsive'],
      textUnset: ['responsive'],
      fontVariantCaps: ['responsive'],
      fontVariantNumeric: ['responsive'],
      fontVariantLigatures: ['responsive'],
      textRendering: ['responsive'],
    },
    plugins: [
      require('postcss-import'),
      require('tailwindcss'),
      require('autoprefixer'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwindcss-typography')({
        // all these options default to the values specified here
        ellipsis: true,         // whether to generate ellipsis utilities
        hyphens: true,          // whether to generate hyphenation utilities
        kerning: true,          // whether to generate kerning utilities
        textUnset: true,        // whether to generate utilities to unset text properties
        componentPrefix: 'c-',  // the prefix to use for text style classes
      }),
    ],
  };