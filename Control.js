var usuariosRegistrados = JSON.parse(localStorage.getItem("usuariosRegistrados")) || {};

function guardarUsuariosRegistrados() {
    localStorage.setItem("usuariosRegistrados", JSON.stringify(usuariosRegistrados));
}

function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    if (usuariosRegistrados.hasOwnProperty(usuario) && usuariosRegistrados[usuario] === contrasena) {
        alert("Inicio de sesión exitoso");
	    redirigirSitio();
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

 function redirigirSitio() {
window.location.href = "":
  }
    var registroContainer = d1ocument.getElementById("registro-container");
    registroContainer.classList.remove("oculto");

    window.location.href = "#registro-container";
}
