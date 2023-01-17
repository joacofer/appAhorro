//Seleccionando elementos
let saldoTotal = document.getElementById("saldoTotal");

let precioProducto = document.getElementById("precioProducto");

const botonProducto = document.getElementById("botonProducto");

const saldoTotalBoton = document.getElementById("saldoTotalBoton");

const productoTitulo = document.getElementById("productoTitulo");

const walletError = document.getElementById("walletError");

const productoError = document.getElementById("productoError");

const monto = document.getElementById("monto");

const gastosResumen = document.getElementById("gastosResumen");

const resto = document.getElementById("resto");

const lista = document.getElementById("lista");

let gastosTemporales = 0;


// funcion billetera:

saldoTotalBoton.addEventListener("click", ()=> {
    gastosTemporales = saldoTotal.value;

    // valor negativo o vacio
    if (gastosTemporales === "" || gastosTemporales < 0) {
        walletError.classList.remove("ocultar");
    } else {
        walletError.classList.add("ocultar");
    }

    // igualando al total
    monto.innerHTML = gastosTemporales;

    // igualando el resto
    resto.innerHTML = gastosTemporales - gastosResumen.innerText;

    // clear input box
    saldoTotal.value = ("");
})




//funcion para deshabilitar boton de eliminar o editar:
const deshabilitarBoton = (bool) => {
    let editarBoton = document.getElementsByClassName("edit");
    Array.from(editarBoton).forEach((el) =>{
        el.deshabilitar = bool;
    }) ;   
};






//funcion para modificar los elementos de la lista

const modificarElemento = (element, edit = false) => {

    let parentDiv = element.parentElement;
    let restoActual = resto.innerText;
    let currentExpense = gastosResumen.value;
    let parentAmount = parentDiv.querySelector(".monto").innerText;
    
    if (edit) {
        let parentText = parentDiv.querySelector(".producto").innerText;
        productoTitulo.value = parentText;
        precioProducto.value = parentAmount;
        deshabilitarBoton(true);
    }

    resto.innerText = parseInt(restoActual) + parseInt(parentAmount);
    gastosResumen.innerText = parseInt(currentExpense) - parseInt(parentAmount);
    parentDiv.remove();
};



//funcion para crear lista 

const creadorLista = (expenseName, expenseValue) => {

    let subLista = document.createElement("div");
    subLista.classList.add("subLista");
    lista.appendChild(subLista);
    subLista.innerHTML = `<p class="product"> ${expenseName}</p><p class="monto">${expenseValue}</p>`;


    let editButton = document.createElement("button");
    editButton.classList.add("fa-duotone fa-pencil", "edit");
    editButton.style.fontSize = "24px";
    editButton.addEventListener("click", () => {
        modificarElemento(editButton, true);
    });

    
    let deleteButton = document.createElement("button");
    deleteButton.classList.add("fa-sharp fa-solid fa-trash", "delete");
    deleteButton.style.fontSize = "24px";
    deleteButton.addEventListener("click", () =>{
        modificarElemento (deleteButton);
    });

    subLista.appendChild(editButton);
    subLista.appendChild(deleteButton);
    document.getElementById("lista").appendChild(subLista);
};





//funcion para calcular resto y gasto

botonProducto.addEventListener("click", () => {
    //casilleros vacios
    if(!precioProducto.value || !productoTitulo.value) {
        productoError.classList.remove("ocultar");
        return false;
    }
    //deshabilitar boton
    deshabilitarBoton(false);

    //gasto
    let expedienture = parseInt(precioProducto.value);

    //total (gastos existentes + nuevos)
    let sum = parseInt(gastosResumen.innerText) + expedienture;
    gastosResumen.innerText = sum;

    //Resto (monto total - gastos totales)
    const restoTotal = gastosTemporales - sum;
    resto.innerText = restoTotal;

    //creando lista 
    creadorLista(productoTitulo.value, precioProducto.value);
    productoTitulo.value = "";
    precioProducto.value = "";
});