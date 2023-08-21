// Guardamos la casilla de texto y el boton en una variable

const boton = document.querySelector('#buttonText');
const texto = document.querySelector('#inputText');

// Definimos un evento para que al presionar el botón se guarde en "localStorage" lo que ingresamos en la casilla de texto

boton.addEventListener("click", function(){
    localStorage.setItem("texto", texto.value);
});