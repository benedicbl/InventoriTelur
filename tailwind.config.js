/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js" // Tambahkan ini karena sebelumnya Anda menginstal Flowbite
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin') // Jangan lupa tambahkan plugin Flowbite jika ingin langsung dipakai
  ],
}