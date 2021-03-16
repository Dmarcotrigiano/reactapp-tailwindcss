// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        spawnLeft: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "70%": { transform: "translateX(-50%)", opacity: "0" },
          "80%": { transform: "translateX(10%)", opacity: "100" },
          "100%": { transform: "translateX(0%)", opacity: "100" },
        },
        spawnBot: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "70%": { transform: "translateY(-50%)", opacity: "0" },
          "80%": { transform: "translateY(10%)", opacity: "100" },
          "100%": { transform: "translateY(0%)", opacity: "100" },
        },
        spawnTop: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "70%": { transform: "translateY(50%)", opacity: "0" },
          "80%": { transform: "translateY(-10%)", opacity: "100" },
          "100%": { transform: "translateY(0%)", opacity: "100" },
        },
      },
      animation: {
        spawnLeft1: "spawnLeft 1.5s ",
        spawnBot1: "spawnBot 1.5s",
        spawnTop1: "spawnTop 1.5s",
        spawnLeft2: "spawnLeft 3s ",
        spawnBot2: "spawnBot 3s",
        spawnTop2: "spawnTop 3s",
        spawnLeft3: "spawnLeft 4.5s ",
        spawnBot3: "spawnBot 4.5s",
        spawnTop3: "spawnTop 4.5s",
        spawnLeft4: "spawnLeft 6s ",
        spawnBot4: "spawnBot 6s",
        spawnTop4: "spawnTop 6s",
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
