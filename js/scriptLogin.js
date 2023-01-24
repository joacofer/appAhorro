
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
        Swal.fire({
            icon: 'error',
            title: 'Uep...',
            text: 'Los campos no pueden estar vacios!',
          })
        // parrafo.innerText = "Los campos no deben estar vacios";
        return;
    } else {
        valor === "localStorage" && localStorage.setItem("item", JSON.stringify(user));
        
        valor === "sesionStorage"  && sessionStorage.setItem("item", JSON.stringify(user));
    }
    return user;
}


enviar.addEventListener("click", (e)=>{
    e.preventDefault();
    check.checked ? guardar("localStorage") : guardar("sesionStorage");
});

function redirigir() {
    if (guardar())
    window.location.href="./pages/ahorro.html"
};