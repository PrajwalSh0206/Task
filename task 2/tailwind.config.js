module.exports = {
  purge:{ 
    enabled: true,
    content:[ './*.html',
  './*.js',]
},
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {
    },
  },
  variants: {
    extend: {
      backgroundColor:['group-hover','active'],
      textColor:['group-hover'],
      borderWidth: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
      display: ['hover', 'group-hover'],
      borderRadius: ['hover', 'focus'],
      boxShadow: ['active','hover'],
    },
  },
  plugins: [],
}
