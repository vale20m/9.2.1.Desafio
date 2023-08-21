// Guardamos el "lugar" en el que tenemos que ingresar el texto establecido en index.html

const dato = document.querySelector('#data');

// Guardamos en una variable el valor del texto establecido en "localStorage"

let valor = localStorage.getItem("texto");

// Ingresamos el texto ubicado en "localStorage" en data.html

dato.innerHTML = valor;