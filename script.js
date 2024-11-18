import { getCryptoPrice } from './pricefetch.js';

// Get elements
const needle = document.getElementById('needle');
const priceElem = document.getElementById('price');
//const range = document.getElementById('risk-range');
//const riskValue = document.getElementById('risk-value');
const riskValue = 17;

// Function to update needle position
function updateNeedlePosition(value) {
      // Map the value (0-100) to an angle (e.g., -135 to 135 degrees)
    const angle = (value / 100) * 270 - 135; // Mapping 0-100 to -135 to 135 degrees
    needle.style.transform = `rotate(${angle}deg)`;
    //riskValue.innerText = value;
}

function updatePrice() { 
    getCryptoPrice().then( result => { 
        priceElem.innerText = `$${result}`;
    });
}

// Initialize with the default value
updateNeedlePosition(riskValue);
updatePrice();

// Event listener for range input
//range.addEventListener('input', (event) => {
//      updateNeedlePosition(event.target.value);
//});

