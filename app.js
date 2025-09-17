// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];  
var inputAddAmigo = document.getElementById("amigo");
var outputListaAmigos = document.getElementById("listaAmigos");
var outputResultado = document.getElementById("resultado");
// Array para almacenar los nombres de los amigos
function agregarAmigo(params) { // Función para agregar un amigo al array
    // Se agrega el amigo al array
    if (params === "") {
        alert("No se puede agregar un amigo vacío");
    }
    amigos.push(inputAddAmigo.value);
    clearInput();
    clearResultado();
    // Limpiar la lista primero
    listaAmigos.innerHTML = "";
    // Crear un elemento <li> para cada amigo
    amigos.forEach(function(amigo) {
        var li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
    // Se retorna el amigo agregado
} // Fin de la función agregarAmigo

function sortearAmigo() { // Función para sortear el amigo secreto
    // Se sortea el amigo al azar
    var amigo = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.innerHTML = amigo;
    clearListaAmigos();
    clearInput();
    // Se retorna el amigo sorteado al azar
    return amigo;
} // Fin de la función sortearAmigo

function clearInput() { // Función para limpiar el input
    // Se limpia el input
    inputAddAmigo.value = "";
    return inputAddAmigo.value = "";
} // Fin de la función clearInput

function clearListaAmigos() { // Función para limpiar el input
    // Se limpia la lista de amigos
    outputListaAmigos.innerHTML = "";
    amigos = []; // Se limpia el array de amigos
} // Fin de la función clearListaAmigos

function clearResultado() { // Función para limpiar el input
    // Se limpia la lista de amigos
    outputResultado.innerHTML = ""; // Se limpia el resultado
} // Fin de la función clearListaAmigos
