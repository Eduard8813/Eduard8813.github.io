var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || {};

function guardarUsuariosRegistrados() {
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuariosRegistrados.hasOwnProperty(usuario) && usuariosRegistrados[usuario] === contrasena) {
        alert("Inicio de sesión exitoso");
        mostrarBoton();
        return false; 
    } else {
        alert("Credenciales incorrectas");
        return false;
    }
}

function registrarUsuario() {
    var nuevoUsuario = document.getElementById("nuevo-usuario").value;
    var nuevaContrasena = document.getElementById("nueva-contrasena").value;

    usuariosRegistrados[nuevoUsuario] = nuevaContrasena;
    guardarUsuariosRegistrados();
    alert("Usuario registrado exitosamente");
    return false; 
}

function mostrarBoton() {
    var boton = document.getElementById("boton-container");
    boton.classList.remove("oculto");
   
    window.location.href = "#boton-container";
}

function redirigirSitio() {
    window.location.href = "content://com.paprbit.dcoder.fileprovider/files/temp.html ";
}

function irARegistro() {
    var registroContainer = document.getElementById("registro-container");
    registroContainer.classList.remove("oculto");
    
    window.location.href = "#registro-container";
}
