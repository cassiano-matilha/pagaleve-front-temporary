module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'custom-gray': {
            DEFAULT: '#EDEDED',
            lighter: '#FAFAFA',
            dark: '#B4B4B4',
            darker: '#555555'
          },
          'custom-pink': {
            DEFAULT: '#FE35F1',
            lighter: '#FFD0EB',
            dark: '#C720B5',
            darker: '#840086',
          },
          'custom-green': {
            DEFAULT: '#12F2AA',
            lighter: '#BCFBD6',
            dark: '#00AD8E',
            darker: '#007F6F',
          },
          'custom-blue': {
            DEFAULT: '#1232A1',
            light: '#7D93DA',
            lighter: '#C9D2ED',
            darker: '#00144A',
          },
          dark: '#111518',
        }
      }
    },
    variants: {
		extend: {},
    },
    plugins: [],
}
