
let input = document.querySelector("#inputSaldo"); //este es el dato, con el que sacaremos todos los porcentajes
let sueldo = 0;
// const sueldoBoton = document.getElementById("sueldoBoton");
// const bievendido = document.getElementById("bienvenido");



input.addEventListener("change", ()=> {
    sueldo = input.value;
    console.log(sueldo);
    return sueldo;
 });
// function obtenerLocalstorage () {
//     if ( localStorage.getItem("usuario")) {
//         let nombre =  localStorage.getItem("usuario");
//     }
//     console.log(nombre);
// }
// const nom = localStorage.getItem("usuario.value");




//opcion Premium

let botonPremium = document.getElementById("botonPremium"); 

botonPremium.addEventListener("click", activarPremium);
function activarPremium () {    
    document.getElementById("premium").innerHTML = "Lo siento esta version esta solo disponible para usuarios premium!";
}

//opcion Standar 

botonStandar.addEventListener("click", activarStandar);

function activarStandar () { 
    let porcentajeStandar = [(sueldo / 2), (sueldo * 0.30), (sueldo * 0.20)];
    document.getElementById("standar").innerHTML = `El porcentaje destinado a tus gastos fijos es de $  ${porcentajeStandar[0]} mil.
    El porcentaje para tus gastos extras en de $${porcentajeStandar[1]} mil.
    
    El porcentaje destinado para tus ahorros es de $${porcentajeStandar[2]} mil.`; 
};



//opcionAhorro

botonAhorro.addEventListener("click" , activarAhorro);

function activarAhorro() {
    let porcentajeAhorro = [(sueldo / 2), (sueldo * 0.15), (sueldo * 0.35)]
    document.getElementById("ahorro").innerHTML = "El porcentaje destinado a tus gastos fijos es de $" + porcentajeAhorro[2]  + "\nEl porcentaje para tus gastos extras en de $" + porcentajeAhorro[1] +  " mil. El porcentaje destinado para tus ahorros es de $" + porcentajeAhorro[0] + " mil."; 
}
 


//opcionRicki

botonRicki.addEventListener("click" , activarRicki);

function activarRicki() {
    let porcentajeRicki = [(sueldo / 2), (sueldo * 0.25)]
    document.getElementById("ricki").innerHTML = "El porcentaje destinado a tus gastos fijos es de $" + porcentajeRicki[1]  + " mil. El porcentaje para tus gastos extras en de $" + porcentajeRicki[0] +  " mil. El porcentaje destinado para tus ahorros es de $" + porcentajeRicki[1] + " mil."; 
}
  
     
//Codigo necesario para poder aprobar la actividad 2 a modo de ejemplo (por el momento no se me ocurre donde puedo incluir un objeto en el codigo que tengo hasta ahora, capaz que cuando termine la billetera lo pueda icluir, quedo atento a cualquier sugerencia)

// let usuariosPremium = [
// {
//     id: 01,
//     nombre: "Joaco",
//     edad: 23,
//     localidad:"El calfate"},
// {
//     id: 02,
//     nombre: "Fidel",
//     edad: 43,
//     localidad:"Buenos Aires"},
// { 
//     id: 03,
//     nombre: "Juan Manuel",
//     edad: 15,
//     localidad:"Mendoza"},
// {
//     id: 04,
//     nombre: "Thiago",
//     edad: 18,
//     localidad:"Tierra del fuego"},
// ];

// let mayores = usuariosPremium.filter(usuario => usuario.edad >= 18);

// console.log(mayores);
     
// let premiumUsuarioMendoza = usuariosPremium.find( premium => premium.localidad === "Mendoza");

// console.log(premiumUsuarioMendoza);


