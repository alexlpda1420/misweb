let input = document.querySelector("input");
let botonAgregar = document.querySelector(".boton-agregar");
let divContainer = document.querySelector(".container");

class Item {
    constructor(nuevaTarea) {
        this.crearDiv(nuevaTarea);
    }

    crearDiv(nuevaTarea) {
        let inputItem = document.createElement("input");

        inputItem.setAttribute("type", "text");

        inputItem.disabled = true;

        inputItem.value = nuevaTarea;

        inputItem.classList.add("item-input");

        let div = document.createElement("div");

        div.classList.add("item");

        let botonEditar = document.createElement("button");

        botonEditar.innerHTML = "🔒";

        botonEditar.classList.add("boton-editar");

        let botonRemover = document.createElement("button");

        botonRemover.innerHTML = "🗑️";

        botonRemover.classList.add("boton-remover");

        divContainer.appendChild(div);

        div.appendChild(inputItem);
        div.appendChild(botonEditar);
        div.appendChild(botonRemover);

        botonEditar.addEventListener('click', function () {
            if (inputItem.disabled) {
                inputItem.disabled = false;
                botonEditar.innerHTML = '🔓';
            } else {
                inputItem.disabled = true
                botonEditar.innerHTML = '🔒';
            }
        })

        botonRemover.addEventListener("click", function () {
            div.remove();
        });
    }
}

function chequearInput() {
    new Item(input.value);
    console.log(input.value);
}

botonAgregar.addEventListener("click", chequearInput);

window.addEventListener("keydown", function(e){
    if(e.keyCode===13){
        chequearInput() 

    }
})