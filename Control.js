
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

const axios = require('axios');

const url = 'https://eduard8813.github.io';

function activateMotor(motorNumber) {
  console.log(`Activando el motor ${motorNumber}`);
  // Aquí va tu código para activar los motores
}

// Función para verificar las compras
async function checkPurchases() {
  try {
    const response = await axios.get(url);

    if (response.data.includes('comprar planta sabila')) {
      activateMotor(1);
    } else if (response.data.includes('comprar hierba buena')) {
      activateMotor(2);
    } else if (response.data.includes('comprar planta culantro')) {
      activateMotor(3);
    }
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

// Verifica las compras cada 5 segundos
setInterval(checkPurchases, 5000);


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
