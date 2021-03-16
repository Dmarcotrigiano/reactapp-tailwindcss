// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        spawnText:{
          "0%": { transform: "translate(200%)", opacity: "0" },
          "40%": { transform: "translate(200%)", opacity: "0" },
          "90%": { transform: "translate(-10%)", opacity: "100" },
          "100%": { transform: "translate(0%)", opacity: "100" },
        },
        spawnLeft: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "40%": { transform: "translateX(-100%)", opacity: "0" },
          "80%": { transform: "translateX(10%)", opacity: "100" },
          "100%": { transform: "translateX(0%)", opacity: "100" },
        },
        spawnBot: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "40%": { transform: "translateY(-100%)", opacity: "0" },
          "80%": { transform: "translateY(10%)", opacity: "100" },
          "100%": { transform: "translateY(0%)", opacity: "100" },
        },
        spawnTop: {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "40%": { transform: "translateY(100%)", opacity: "0" },
          "80%": { transform: "translateY(-10%)", opacity: "100" },
          "100%": { transform: "translateY(0%)", opacity: "100" },
        },
      },
      animation: {
        spawnText1: "spawnText 10s",
        spawnText2: "spawnText 25s",
        spawnText3: "spawnText 30s",
        spawnText4: "spawnText 35s",
        spawnLeft1: "spawnLeft 1.5s ",
        spawnBot1: "spawnBot 1.5s",
        spawnTop1: "spawnTop 1.5s",
        spawnLeft2: "spawnLeft 4.5s ",
        spawnBot2: "spawnBot 4.5s",
        spawnTop2: "spawnTop 4.5s",
        spawnLeft3: "spawnLeft 7s ",
        spawnBot3: "spawnBot 7s",
        spawnTop3: "spawnTop 7s",
        spawnLeft4: "spawnLeft 10s ",
        spawnBot4: "spawnBot 10s",
        spawnTop4: "spawnTop 10s",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
