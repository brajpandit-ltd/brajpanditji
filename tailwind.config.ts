/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        primary: "var(--primary)",
        "primary-dark": "var(--primary-dark)",
        "primary-light": "var(--primary-light)",
        secondary: "var(--secondary)",
        "secondary-dark": "var(--secondary-dark)",
        "secondary-light": "var(--secondary-light)",

        accent: "var(--accent)",
        muted: "var(--muted)",

        "text-black": "var(--text-black)",
        "text-white": "var(--text-white)",
        "text-gray": "var(--text-gray)",
      },
    },
  },
  plugins: [],
};
