
let usuarioValido = "admin"; //datos quemados
let contrasenaValida = "admin";
let usuario = "";
let contrasena = "";
let intentos = 0;
let maxIntentos = 3;

//captura- selecciona
const formLogin = document.getElementById("form-login");
const inputUsuario = document.getElementById("login-usuario");
const inputContrasena = document.getElementById("login-contrasena");
const btnVerContrasena = document.getElementById("btn-ver-contrasena");
const btnLogin = document.getElementById("btn-login");
const mensaje = document.getElementById("login-mensaje");




formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault()


    usuario = inputUsuario.value.trim();
    contrasena = inputContrasena.value;

    mensaje.textContent = "";

   //valida contraseña vacia
    if (usuario === "" || contrasena === "") {
        alert("Por favor complete todos los campos.");
        mensaje.textContent = "Todos los campos son obligatorios.";
        return;
    }

   //valida los datos insertados
    if (usuario === usuarioValido && contrasena === contrasenaValida) {
        alert("¡Bienvenido, " + usuario +"ingreso exitoso");
        intentos = 0;
        
    } else {
        intentos++;
        
        let restantes = maxIntentos - intentos;
        if (intentos >= maxIntentos) {
            alert("Has superado el número máximo de intentos. Acceso bloqueado.");
            mensaje.textContent = "Acceso bloqueado por exceder los intentos.";
            inputUsuario.disabled = true;
            inputContrasena.disabled = true;
            btnLogin.disabled = true;
        } else {
            alert("Usuario o contraseña incorrectos. Te quedan " + restantes + " intento(s).");
            mensaje.textContent = "Datos incorrectos. Intentos restantes: " + restantes;
            inputContrasena.value = "";
            inputContrasena.focus();
        }
    }
});