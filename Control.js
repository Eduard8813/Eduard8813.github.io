function iniciarSesion() {
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    var usuariosPermitidos = {
     "Eduard10" : "Eduard12",
    };

    if (usuariosPermitidos.hasOwnProperty(usuario) && usuariosPermitidos[usuario] === contrasena) {
        window.location.href = "https://github.com/Eduard8813/Eduard8813.github.io/edit/main/index.html";
        return false; 
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.");
        return false; 
    }
}
