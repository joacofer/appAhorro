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
