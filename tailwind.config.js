  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
         keyframes:{
          spawnLeft:{
            '0%':{transform: 'translateX(-50%)'},
            '80%':{transform: 'translateX(10%)'},
            '100%':{transform: 'translateX(0%)'}
          },
          spawnBot:{
            '0%':{transform: 'translateY(-50%)'},
            '80%':{transform: 'translateY(10%)'},
            '100%':{transform: 'translateY(0%)'}
          },
          spawnTop:{
            '0%':{transform: 'translateY(50%)'},
            '80%':{transform: 'translateY(-10%)'},
            '100%':{transform: 'translateY(0%)'}
          },
         },
        animation:{
          spawnLeft: 'spawnLeft 1.5s',
          spawnBot: 'spawnBot 1.5s',
          spawnTop: 'spawnTop 1.5s',
        },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
  }