const mainDiv = document.getElementById("main");
const infoDiv = document.getElementById("infoDiv");
const question = document.getElementById("question");
const infoSi = document.getElementById("infoSi");
const infoNo = document.getElementById("infoNo");
const infoTalvez = document.getElementById("infoTalvez");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const btnTalvez = document.getElementById("btnTalvez");

const btnRetroceso = document.getElementById("btnRetroceso");
const btnComprar = document.getElementById("btnComprar");

// Nuevos botones para comprar plantas
const btnCompraUno = document.createElement("button");
btnCompraUno.textContent = "Compra uno";
btnCompraUno.addEventListener("click", function() {
    alert("¡Información enviada a la ESP32 para comprar Planta uno!");
    // Aquí puedes agregar código para enviar la solicitud al ESP32 para comprar la Planta uno
});

const btnCompraDos = document.createElement("button");
btnCompraDos.textContent = "Compra dos";
btnCompraDos.addEventListener("click", function() {
    alert("¡Información enviada a la ESP32 para comprar Planta dos!");
    // Aquí puedes agregar código para enviar la solicitud al ESP32 para comprar la Planta dos
});

const btnCompraTres = document.createElement("button");
btnCompraTres.textContent = "Compra tres";
btnCompraTres.addEventListener("click", function() {
    alert("¡Información enviada a la ESP32 para comprar Planta tres!");
    // Aquí puedes agregar código para enviar la solicitud al ESP32 para comprar la Planta tres
});

// Agregar los nuevos botones al div principal
mainDiv.appendChild(btnCompraUno);
mainDiv.appendChild(btnCompraDos);
mainDiv.appendChild(btnCompraTres);

btnComprar.addEventListener("click", function() {
    alert("¡Información enviada a la ESP32 para comprar!");
    
    // Volver a la página de inicio
    showElement(question);
    showElement(mainDiv);
    hideElement(infoDiv);
    hideElement(infoSi);
    hideElement(infoNo);
    hideElement(infoTalvez);
});

