module.exports = {
  purge: [ './*.html',
  './*.js',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor:['group-hover','active'],
      textColor:['group-hover'],
      padding:['group-hover','hover'],
      borderWidth: ['hover', 'focus'],
      fontWeight: ['hover', 'focus'],
      display: ['hover', 'group-hover'],
      borderRadius: ['hover', 'focus'],
    },
  },
  plugins: [],
}
