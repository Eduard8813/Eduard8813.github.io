// Obtener usuarios registrados del almacenamiento local
var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || {};

// Función para guardar usuarios registrados en el almacenamiento local
function guardarUsuariosRegistrados() {
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
}

// Función para iniciar sesión
function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuariosRegistrados.hasOwnProperty(usuario) && usuariosRegistrados[usuario] === contrasena) {
        alert("Inicio de sesión exitoso");
        redirigirSitio();
        return false; // Para prevenir el comportamiento por defecto del formulario
    } else {
        alert("Credenciales incorrectas");
        return false; // Para prevenir el comportamiento por defecto del formulario
    }
}

// Función para registrar un nuevo usuario
function registrarUsuario() {
    var nuevoUsuario = document.getElementById("nuevo-usuario").value;
    var nuevaContrasena = document.getElementById("nueva-contrasena").value;

   if (nuevoUsuario in usuariosRegistrados) {
        alert("El nombre de usuario ya existe. Por favor, elige otro.");
        return false; // Para prevenir el comportamiento por defecto del formulario
   } else {
        usuariosRegistrados[nuevoUsuario] = nuevaContrasena; 
        guardarUsuariosRegistrados();
        alert("Usuario registrado exitosamente");
        ocultarRegistro();
        return false; // Para prevenir el comportamiento por defecto del formulario
   }
}

// Función para redirigir al sitio
function redirigirSitio() {
   window.location.href = "http://192.168.0.13";
}

// Función para mostrar el formulario de registro y ocultar el formulario de inicio de sesión
function mostrarRegistro() {
   var registroContainer = document.getElementById("registro-container");
   registroContainer.classList.remove("oculto");
   
   var loginContainer = document.getElementById("login-form");
   loginContainer.classList.add("oculto");
   
   var registroEnlace = document.querySelector(".remember-forgot a");
   registroEnlace.classList.add("oculto");
}

// Función para ocultar el formulario de registro y mostrar el formulario de inicio de sesión
function ocultarRegistro() {
   var registroContainer = document.getElementById("registro-container");
   registroContainer.classList.add("oculto");
   
   var loginContainer = document.getElementById("login-form");
   loginContainer.classList.remove("oculto");

   var registroEnlace = document.querySelector(".remember-forgot a");
   registroEnlace.classList.remove("oculto");
}
