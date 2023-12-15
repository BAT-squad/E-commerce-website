/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "login" : "#484c64",
        "mauve": "#6C5DD3",
        "input": "#a0a8ac",
        "continue": "#a34cf8",
        "facebook": "#1877F2",
        "placeholder": "#a9a9a9"
      }
    },
    screens: {
      'iphone': {'min': '400px', 'max': '500px'},
    }
  },
  plugins: [],
}

