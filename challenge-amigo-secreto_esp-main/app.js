// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listado_amigos = [];






function agregar_texto_elemento(elemento, texto) {
    let elemento_seleccionado = document.querySelector(elemento);
    elemento_seleccionado.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombre_de_amigo = document.getElementById("amigo").value;
    if (nombre_de_amigo === "") {

        alert("El nombre del amigo no puede estar vacío");
        agregar_texto_elemento("h2", "Digite el nombre de sus amigos");

    } else if (listado_amigos.includes(nombre_de_amigo)) {

        alert("El nombre del amigo ya está en la lista");
        agregar_texto_elemento("h2", "Digite el nombre de sus amigos");

    } else {

        listado_amigos.push(nombre_de_amigo);
        document.getElementById("amigo").value = "";
        
    }
    
    document.getElementById("listaAmigos").innerHTML = listado_amigos.join(", ");
}

function sortearAmigo() {
    
}