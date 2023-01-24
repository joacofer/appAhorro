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

    let subLista = document.createElement("div");
    subLista.classList.add("subLista");
    lista.appendChild(subLista);
    subLista.innerHTML = `<p class="product"> ${productoTitulo.value}</p><p class="monto">$${precioProducto.value}</p>`;


    let deleteButton = document.createElement("button");
    deleteButton.className = "editButton";
    deleteButton.innerHTML = 
    `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-backspace" width="35" height="30" viewBox="0 0 24 24"   
     stroke-width="1.5" stroke="#6f32be" fill="none" stroke-linecap="round" stroke-linejoin="round">
     <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
     <path d="M20 6a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-11l-5 -5a1.5 1.5 0 0 1 0 -2l5 -5z" />
     <path d="M12 10l4 4m0 -4l-4 4" />
     </svg>`
    deleteButton.addEventListener("click", () => {
        gastosResumen.innerText = parseInt(gastosResumen.innerText) - expedienture;
        resto.innerText = restoTotal + expedienture;
        subLista.remove();

    });
    subLista.appendChild(deleteButton);
    document.getElementById("lista").appendChild(subLista);
});


//consumiendo api con fetch
const apiBanco = document.getElementById("apiBanco");
let tiposDeDolares = [];
//fetch bcra
fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
.then((response) => response.json())
.then((data) => {
     apiBanco.innerHTML = `
        <h2 class="tituloDolar">Dolar Oficial</h2>
        <p class="pDolar">Compra: ${data[0].casa.venta} Venta: ${data[0].casa.compra}</p>
        <h2 class="tituloDolar">Dolar Blue</h2>
        <p class="pDolar">Compra: ${data[1].casa.venta} Venta: ${data[1].casa.compra}</p>`;
});


