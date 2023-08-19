/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    options: {
      safelist: ["dark"], //specific classes
    },
  },

  theme: {
    fontFamily: {
      helvetica: ["'Helvetica', 'sans-serif'"],
    },
    extend: {
      typography: (theme) => ({
        dark: {
          css: {
            color: "white",
          },
        },
      }),
      colors: {
        black: {
          black_2: "#D5D5D5",
          black_8: "#555555",
          black_9: "#404040",
          black_10: "#2B2B2B",
          black_11: "#1A1A1A",
        },
        white: {
          white: "#fff",
          white_8: "#FCFCFC",
          white_9: "#FEFEFE",
        },
      },
      boxShadow: {
        "header-shadow": "0px 4px 13px 9px rgba(0, 0, 0, 0.02)",
      },
      backgroundImage: {
        "hero-pattern-1": "url('/img/leftherobg.png')",
        "hero-pattern-2": "url('/img/rightherobg.png')",
        "contact-pattern": "url('/img/contact-bg.png')",
      },
      backgroundColor: {
        overlay: "rgba(0,0,0,0.5)",
        project_bg: "rgba(31, 31, 31, 0.60)",
      },
    },
  },
  variants: {
    typography: ["dark"],
  },
  plugins: [require("daisyui")],
};
