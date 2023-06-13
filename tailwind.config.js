/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navbarColor: "#989C94",//COLOR DE LA BARRA SUPERIOR
        categoriesColor: "#F7ECE1",//COLOR DE LAS CATEGORIAS
        submitColor: "#E6E4E1",//COLOR DE LOS PRODUCTOS
        focusedItemColor: "#F7ECE1",//COLOR DE INFORMACIÓN DE LA PÁGINA
        bordeColor: "#BFBFBF",
        compraBoton: "#90A56F",//COLOR DEL BOTON COMPRAR
        eliminarBoton: "#BFBFBF",//COLOR DEL BOTON ELIMINAR
        compraFondo: "#F3F2F2",//COLOR DEL FONDO COMPRAR 
        modalBorderColor: "#BFBFBF",
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
