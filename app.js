// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var amigos = [];    // Array para almacenar los nombres de los amigos
function agregarAmigo(params) { // Función para agregar un amigo al array
    // Se agrega el amigo al array
    if (params === "") {
        return "No se puede agregar un amigo vacío";
    }
    amigos.push(params);
    
    // Se retorna el amigo agregado
    return params;
} // Fin de la función agregarAmigo

function sortearAmigo() { // Función para sortear el amigo secreto
    // Se sortea el amigo al azar
    var amigo = amigos[Math.floor(Math.random() * amigos.length)];
    // Se retorna el amigo sorteado al azar
    return amigo;
} // Fin de la función sortearAmigo