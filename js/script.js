
let nombre;
let sueldo; //este es el dato, con el que sacaremos todos los porcentajes



//inicio
nombre = prompt("Hola extraño, cual es tu nombre?") 

sueldo = parseFloat(prompt("Hola " + nombre + ", ingrese el monto de su sueldo"))

while (sueldo != Number(sueldo)) {

    alert(nombre + " ingrese el monto de su sueldo en valor numerico, para continuar")
    sueldo = parseFloat(prompt("Hola " + nombre + ", ingrese el monto de su sueldo"))
} 

document.querySelector(".head").innerText = "Hola " + nombre + ", bienvenido a la app que administra tu sueldo por ti, elije como deseas manejar tu plata!"; //modifico el encabezado de la pag, saludando al usuario




//botones 
//opcion Premium
let botonPremium = document.getElementById("botonPremium"); //seleccionamos el boton 
    
botonPremium.addEventListener("click", activarPremium); //como dice el nombre del metodo, detecta que el usuario dio clik

// botonPremium.onclick = activarPremium; //logramos lo mismo que con addEventListener

function activarPremium () {     //esta funcion da el aviso que no se puede usar, ya que es para usuarios premium
    document.getElementById("premium").innerHTML = "Lo siento esta version esta solo disponible para usuarios premium!"; }



//opcion Standar 
let porcentajeStandar = [(sueldo / 2), (sueldo * 0.30), (sueldo * 0.20)];

let botonStandar = document.getElementById("botonStandar");

botonStandar.addEventListener("click", activarStandar);

function activarStandar () { 
    document.getElementById("standar").innerHTML = nombre + " el porcentaje destinado a tus gastos fijos es de $" + porcentajeStandar[0] + "mil. El porcentaje para tus gastos extras en de $" + porcentajeStandar[1] + "mil. El porcentaje destinado para tus ahorros es de $" + porcentajeStandar[2] + "mil."; 
};
//intento hacer un salto de linea con <br>, pero ma salta un error?  como lo puedo realizar?



//opcionAhorro
let porcentajeAhorro = [(sueldo / 2), (sueldo * 0.15), (sueldo * 0.35)]

let botonAhorro = document.getElementById("botonAhorro");

botonAhorro.addEventListener("click" , activarAhorro);

function activarAhorro() {
    document.getElementById("ahorro").innerHTML = nombre + " el porcentaje destinado a tus gastos fijos es de $" + porcentajeAhorro[2]  + " mil. El porcentaje para tus gastos extras en de $" + porcentajeAhorro[1] +  " mil. El porcentaje destinado para tus ahorros es de $" + porcentajeAhorro[0] + " mil."; 
}
  
     


let porcentajeRicki = [(sueldo / 2), (sueldo * 0.25)]

let botonRicki = document.getElementById("botonRicki");

botonRicki.addEventListener("click" , activarRicki);

function activarRicki() {
    document.getElementById("ricki").innerHTML = nombre + " el porcentaje destinado a tus gastos fijos es de $" + porcentajeRicki[1]  + " mil. El porcentaje para tus gastos extras en de $" + porcentajeRicki[0] +  " mil. El porcentaje destinado para tus ahorros es de $" + porcentajeRicki[1] + " mil."; 
}
  
     
