
let nombre;
let sueldo;

nombre = prompt("Hola extraño, cual es tu nombre?") 

sueldo = prompt("Hola " + nombre + ", ingrese el monto de su sueldo para continuar") //este es el dato, con el que sacaremos todos los porcentajes

document.querySelector(".head").innerText = "Hola " + nombre + ", bienvenido a la app que administra tu sueldo por ti, elije como deseas manejar tu plata!"; //modifico el encabezado de la pag, saludando al usuario




function activarPremium () {     //esta funcion da el aviso que no se puede usar, ya que es para usuarios premium
    document.getElementById("premium").innerHTML = "Esta version es solo para usuarios premium!";
}

function botonPremium () {      //cuando el usuario hace clik en el boton standar activa la funcion (activarPremium)
     document.getElementById("botonPremium").onclick = function() { //funciona, si activo desde la consola, pero no cuando apreto el boton!(preguntar)
        activarPremium ();
    }
}

// function  Standar () {      en proceso 

//     gastosFijos = function(){ 
//       let fijos = sueldo / 2;
//       return fijos
//     }

//     gastosExtras = function() {
//          let extra = sueldo * 0.30;
//      }

//     ahorro = function(){
//         let ahorro = sueldo * 0.20;
//     }

//     this.resultado = console.log(nombre + " la plata destina a tus gastos fijos es de $" + fijos + ", tu plata destinada a tus gastos extras es de $"
//     + extra + " y tu plata destinada a tus ahorros es de $" + ahorro)
// }


// let moodAhorro  { en proceso
//     gastosFijos: function(){
//       let fijos = sueldo *0.35;
//     },

//     gastosExtras: function(){
//         let extra = sueldo * 0.15;
//     },

//     ahorro: function(){
//         let ahorro = sueldo /2;
//     },

//     resultado: console.log(nombre + " la plata destina a tus gastos fijos es de $" + fijos + ", tu plata destinada a tus gastos extras es de $"
//     + extra + " y tu plata destinada a tus ahorros es de $" + ahorro),    
// }



// let ricky  {   en proceso
//     gastosFijos: function(){
//       let fijos = sueldo * 0.25;
//     },

//     gastosExtras: function(){
//         let extra = sueldo /2;
//     },

//     ahorro: function(){
//         let ahorro = sueldo * 0.25;
//     },

//     resultado: console.log(nombre + " la plata destina a tus gastos fijos es de $" + fijos + ", tu plata destinada a tus gastos extras es de $"
//     + extra + " y tu plata destinada a tus ahorros es de $" + ahorro),    
// }


