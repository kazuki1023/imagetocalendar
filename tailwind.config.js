module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: { extend: {} },
  variants: { extend: {} },
  plugins: [require("daisyui")],
  daisyui: {
    themes: {
      mytheme: {
        primary: "#38BDF8",
        secondary: "#818CF8",
        accent: "#F471B5",
        neutral: "#1E293B",
        "base-100": "#0F172A",
        info: "#0CA5E9",
        success: "#2DD4BF",
        warning: "#F4BF50",
        error: "#FB7085",
      },
    },
  },
};
