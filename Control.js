
const mainDiv = document.getElementById("main");
const infoDiv = document.getElementById("infoDiv");
const question = document.getElementById("question");
const infoSi = document.getElementById("infoSi");
const infoNo = document.getElementById("infoNo"); 
const infoTalvez = document.getElementById("infoTalvez");

const btnSi = document.getElementById("btnSi");
const btnNo = document.getElementById("btnNo");
const btnTalvez = document.getElementById("btnTalvez");

function showElement(element) {
    if (element) {
        element.style.display = "block";
    }
}

function hideElement(element) {
    if (element) {
        element.style.display = "none";
    }
}

// Event listeners para los botones de plantas
btnSi.addEventListener("click", function() {
    // Mostrar información específica sobre Culantro
    hideElement(question);
    hideElement(mainDiv);
    showElement(infoDiv);
    showElement(infoSi);
    hideElement(infoNo);
    hideElement(infoTalvez);
});

btnNo.addEventListener("click", function() {
    // Mostrar información específica sobre Hierba buena
    hideElement(question);
    hideElement(mainDiv);
    showElement(infoDiv);
    hideElement(infoSi);
    showElement(infoNo);
    hideElement(infoTalvez);
});

btnTalvez.addEventListener("click", function() {
    // Mostrar información específica sobre Sábila
    hideElement(question);
    showElement(mainDiv);
    showElement(infoDiv);
    hideElement(infoSi);
    hideElement(infoNo);
    showElement(infoTalvez);
});

// Event listeners para los botones de compra
document.getElementById("btnActivarPlanta1").addEventListener("click", function() {
    activarPlanta(1);
});

document.getElementById("btnActivarPlanta2").addEventListener("click", function() {
    activarPlanta(2);
});

document.getElementById("btnActivarPlanta3").addEventListener("click", function() {
    activarPlanta(3);
});

function activarPlanta(planta) {
    // Realiza una solicitud HTTP POST al ESP32 para activar la planta
    fetch('/activar_planta', {
        method: 'POST',  // Método HTTP utilizado (POST)
        headers: {
            'Content-Type': 'application/json'  // Encabezados de la solicitud
        },
        body: JSON.stringify({ planta: planta })  // Cuerpo de la solicitud en formato JSON
    })
    .then(response => response.text())  // Convierte la respuesta a texto
    .then(data => {
        alert(data); // Muestra la respuesta del ESP32 en una ventana emergente (alert)
        location.reload(); // Recarga la página después de activar la planta
    })
    .catch(error => {
        console.error('Error:', error);  // Maneja cualquier error que ocurra durante la solicitud
    });
}

// Event listeners para los botones "Atrás"
const btnAtrasCulantro = document.getElementById("btnAtrasCulantro");
const btnAtrasHierbaBuena = document.getElementById("btnAtrasHierbaBuena");
const btnRetroceso = document.getElementById("btnRetroceso");

btnAtrasCulantro.addEventListener("click", function() {
    // Mostrar la página de selección de plantas nuevamente
    showElement(question);
    showElement(mainDiv);
    hideElement(infoDiv);
});

btnAtrasHierbaBuena.addEventListener("click", function() {
     // Mostrar la página de selección de plantas nuevamente
     showElement(question);
     showElement(mainDiv);
     hideElement(infoDiv);
});
