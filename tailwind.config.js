module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./layout/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "90%": "90%",
      },
      maxWidth: {
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        355: "355px",
        310: "310px",
      },
      height: {
        "20vw": "20vw",
      },
      maxHeight: {
        257: "257px",
      },
      minHeight: {
        235: "235px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
