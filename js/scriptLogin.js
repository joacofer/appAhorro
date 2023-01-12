
const enviar = document.querySelector("#iniciarSesion");
const usuario = document.querySelector("#userName");
const pass = document.querySelector("#password");
const check = document.querySelector("#check");
const olvidasteContra = document.querySelector("#olvidaste");
const parrafo = document.querySelector("#parrafo"); 

function guardar (valor){
    let user = {
        usuario: usuario.value,
        password: pass.value};
    if (user.usuario == "" || user.pass == ""){
        parrafo.innerText = "Los campos no deben estar vacios";
        return;
    } else {
        if (valor === "sesionStorage") {
            sessionStorage.setItem("item", JSON.stringify(user));
        }
        if (valor === "localStorage") {
            localStorage.setItem("item", JSON.stringify(user));
        }
    }
    return user;
}

enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    if (check.checked){
        guardar("localStorage")
    }else {
        guardar("sesionStorage")
    }
});