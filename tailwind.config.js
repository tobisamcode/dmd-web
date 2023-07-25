/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      helvetica: ["'Helvetica', 'sans-serif'"],
    },
    extend: {
      colors: {
        black: {
          black_2: "#D5D5D5",
          black_8: "#555555",
          black_9: "#404040",
          black_10: "#2B2B2B",
          black_11: "#1A1A1A",
        },
      },
      boxShadow: {
        "header-shadow": "0px 4px 13px 9px rgba(0, 0, 0, 0.02)",
      },
      backgroundImage: {
        "hero-pattern-1": "url('/img/leftherobg.png')",
        "hero-pattern-2": "url('/img/rightherobg.png')",
      },
      backgroundColor: {
        overlay: "rgba(0,0,0,0.5)",
      },
    },
  },
  plugins: [require("daisyui")],
};
