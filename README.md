# Proyecto-curso-ONE-amigo-secreto

Este repositorio contiene todos los archivos pertenecientes a la entrega del proyecto final de la fase de selección de la iniciativa Oracle Next Education (ONE) en colaboración con la plataforma Alura LATAM.

## Descripción del Proyecto

El proyecto consiste en una aplicación para gestionar un sorteo de "Amigo Secreto". Permite agregar amigos, mostrar la lista de amigos y realizar un sorteo para seleccionar un amigo secreto al azar.

---

## Estructura del Script

### Variables Globales

```javascript
let listado_amigos = [];
```

- **`listado_amigos`**: Es un array que almacena los nombres de los amigos agregados.

---

### Función `agregarAmigo`

```javascript
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
```

- **Propósito**: Agrega un nuevo amigo al array `listado_amigos`.
- **Validaciones**:
  - El nombre no puede estar vacío.
  - El nombre no puede estar duplicado.
- **Acciones**:
  - Si el nombre es válido, se agrega al array y se limpia el campo de entrada.
  - Llama a la función `actualizarListaAmigos` para actualizar la lista en la interfaz.

---

### Función `actualizarListaAmigos`

```javascript
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
```

- **Propósito**: Actualiza la lista de amigos en la interfaz.
- **Acciones**:
  - Limpia el contenido actual de la lista.
  - Recorre el array `listado_amigos` y crea un elemento `<li>` para cada amigo.
  - Agrega cada elemento `<li>` al contenedor `<ul>` con el ID `listaAmigos`.

---

### Función `sortearAmigo`

```javascript
function sortearAmigo() {
    let resultado = document.getElementById("resultado");

    if (listado_amigos.length < 2) {
        alert("Debe haber al menos dos amigos en la lista para realizar el sorteo.");
        return;
    } else {
        let indice_aleatorio = Math.floor(Math.random() * listado_amigos.length);
        let amigo_seleccionado = listado_amigos[indice_aleatorio];
        resultado.innerHTML = `Tu amigo secreto es ${amigo_seleccionado}`;
        return;
    }
}
```

- **Propósito**: Realiza el sorteo de un amigo secreto.
- **Validaciones**:
  - Debe haber al menos dos amigos en la lista para realizar el sorteo.
- **Acciones**:
  - Genera un índice aleatorio basado en la longitud del array `listado_amigos`.
  - Selecciona un amigo del array usando el índice aleatorio.
  - Muestra el resultado en el elemento con el ID `resultado`.

---

## Cómo Usar el Proyecto

1. **Agregar Amigos**:
   - Escribe el nombre de un amigo en el campo de entrada y haz clic en "Agregar".
   - La lista de amigos se actualizará automáticamente.

2. **Realizar el Sorteo**:
   - Asegúrate de haber agregado al menos dos amigos.
   - Haz clic en "Sortear" para seleccionar un amigo secreto al azar.
   - El resultado se mostrará en la pantalla.

---

## Notas Técnicas

- **Errores Comunes**:
  - Si el resultado del sorteo muestra `undefined`, verifica que el índice aleatorio generado esté dentro del rango del array. En este caso, se corrigió el cálculo del índice aleatorio:
    ```javascript
    let indice_aleatorio = Math.floor(Math.random() * listado_amigos.length);
    ```

- **Requisitos del HTML**:
  - Asegúrate de que el archivo HTML tenga los siguientes elementos:
    ```html
    <input id="amigo" type="text" placeholder="Nombre del amigo">
    <button onclick="agregarAmigo()">Agregar</button>
    <ul id="listaAmigos"></ul>
    <button onclick="sortearAmigo()">Sortear</button>
    <p id="resultado"></p>
    ```

---

## Autor

Este proyecto fue desarrollado como parte del desafío "Amigo Secreto" para fortalecer habilidades en lógica de programación por el estudiante Luis Daniel Rosas Miranda de la iniciativa Oracle Next Education (ONE) en colaboracion con la plataforma Alura LATAM.
