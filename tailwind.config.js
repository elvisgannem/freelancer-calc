module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      fontFamily: {
        'raleway': ['Raleway'],
      },
      extend: {
        backgroundImage: theme => ({
          'principal-image': "url('/src/img/background.jpg')"
        })
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }