// Solo un log para verificar que el archivo funciona
console.log("App cargada :)");

// Ejemplo pequeño de funcionalidad
const buscador = document.querySelector(".buscador input");

buscador.addEventListener("input", (e) => {
    console.log("Buscando:", e.target.value);
});
