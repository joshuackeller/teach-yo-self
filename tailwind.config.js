module.exports = {
  mode: "jit",
  purge: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       
        inter: ["Inter", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
        source: ["Source Sans Pro", "sans"],
      },
      colors: {
        ss: {
          "dark-blue": "#102135",
          "light-blue": "#4566B0",
          "hover-blue": "#263D71",
          white: "#FFFFFF",
          grey: "#EDECED",
          "accent-blue": "#20A4FF",
          "accent-orange": "#FF5600",
          "accent-green": "#20EEBF",
          sfpink: "#FF009E",
          sfteal: "#0FF0EA",
          "dark-grey": "#1D1E1E",
          gradient1: "#AEC8FF",
          gradient2: "#DAE1FE",
          gradient3: "#EADBFD",
          "sponsor-blue": "#3F21ED",
          "sponsor-gray": "#E8EEFF",
        },
      },
      width: {
        128: "32rem",
        160: "40rem",
        256: "64rem",
      },
      maxWidth: {
        "10xl": "120rem",
      },
      height: {
        video: "40rem",
        banner: 600,
      },
      zIndex: {
        "-1": -1,
      },
      boxShadow: {
        t: "0px 1px 5px rgba(0, 0, 0, 0.5);",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
      textColor: ["disabled"],
    },
  },
};
