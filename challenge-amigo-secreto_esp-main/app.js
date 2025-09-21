// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listado_amigos = [];



function agregarAmigo() {

    let nombre_de_amigo = document.getElementById("amigo").value;

    if (nombre_de_amigo === "") {

        alert("El nombre del amigo no puede estar vacío");

    } else if (listado_amigos.includes(nombre_de_amigo)) {

        alert("El nombre del amigo ya está en la lista");
        document.getElementById("amigo").value = "";

    } else {

        listado_amigos.push(nombre_de_amigo);
        document.getElementById("amigo").value = "";

    }
    
    actualizarListaAmigos();

    return;
}

function actualizarListaAmigos() {

    let lista_a_mostrar = document.getElementById("listaAmigos");
    lista_a_mostrar.innerHTML = ""; 

    for (let posicion = 0; posicion < listado_amigos.length; posicion++) {

        let amigo = listado_amigos[posicion];
        let elemento_lista_a_mostrar = document.createElement("li");
        elemento_lista_a_mostrar.innerText = amigo;
        lista_a_mostrar.appendChild(elemento_lista_a_mostrar);

    }
}

function sortearAmigo() {

    let resultado = document.getElementById("resultado")

    if (listado_amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para realizar el sorteo.");
        return;
    } else {
        let indice_aleatorio = parseInt(Math.floor(Math.random() * listado_amigos.length + 1));
        console.log(listado_amigos.length);
        console.log(indice_aleatorio);
        let amigo_seleccionado = listado_amigos[indice_aleatorio];
        resultado.innerHTML = `Tu amigo secreto es ${amigo_seleccionado}`;
    
        return;
    }
}