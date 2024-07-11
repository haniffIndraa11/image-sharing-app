/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#6B7280", // Warna abu-abu yang tidak terlalu terang
          "secondary": "#4B5563", // Warna abu-abu yang sedikit lebih gelap
          "accent": "#9CA3AF", // Warna abu-abu muda
          "neutral": "#111827", // Warna hitam pekat untuk kontras
          "base-100": "#F3F4F6", // Warna abu-abu sangat muda untuk background
        },
      },
    ],
  },
};
