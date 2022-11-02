/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        page2: "url('./img/bg/6.jpg')",
        barn: "url('./img/bg/1.jpg')",
        caffe: "url('./img/bg/shop.jpg')",
        outFarm: "url('./img/bg/outfarm.jpg')",
        farmBarn: "url('./img/bg/farmbarn.jpg')",
        farmCultivature: "url('./img/bg/farmCultivature.jpg')",
        papan1: "url('./img/bg/papan.png')",
        papan2: "url('./img/bg/papan2.png')",
        jualan: "url('./img/bg/jualan.png')",
        city: "url('./img/bg/city.jpg')",
      },
      animation: {
        running: "fill 1.5s linear",
        fadeInKu: "fadeInRight 0.3s ease-in-out",
      },
      keyframes: {
        fill: {
          "0%": {
            width: "0%",
          },
          "100%": {
            width: "100%",
          },
        },
        fadeInRight: {
          "0%": {
            opacity: 0,
            // transform: "translateX",
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      fontFamily: {
        openSans: ["Open Sans"],
        comic: ["Sans Comic Sans"],
        custom1: ["Custom-1", "sans comic sans"],
      },
      rotate: {
        17: "17deg",
      },
    },
  },
  plugins: [],
};
