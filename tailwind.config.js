/* * @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',

          secondary: "#19D3AE",

          accent: "#3A4256",

          neutral: "#021431",

          "base-100": "#FFFFFF",

          info: "#93E7FB",

          success: "#81CFD1",

          warning: "#EFD7BB",

          error: "#E58B8B",
        }
      }
    ]
  }

  ,
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

