// script.js

// Get references to HTML elements
const qrTextInput = document.getElementById('qrText');
const generateButton = document.getElementById('generateButton');
const qrcodeContainer = document.getElementById('qrcode');

// Initialize qrcode variable to hold the QR code instance
let qrcodeInstance = null;

// Function to generate the QR code
function generateQRCode() {
    const textToEncode = qrTextInput.value.trim(); // Get value and remove leading/trailing whitespace

    // Clear previous QR code if it exists or if input is empty
    qrcodeContainer.innerHTML = '';

    if (!textToEncode) {
        // Optionally display a message or prevent generation if input is empty
        qrcodeContainer.innerText = 'Please enter some text or a URL.';
        return;
    }

    // Check if qrcode.js (QRCode global object) is loaded
    if (typeof QRCode === 'undefined') {
        console.error("QRCode library not loaded. Make sure the script tag for qrcode.min.js is correct and loads before script.js.");
        return;
    }

    // Create new QR code instance
    // The QRCode constructor will automatically append the canvas/table to qrcodeContainer
    qrcodeInstance = new QRCode(qrcodeContainer, {
        text: textToEncode,
        width: 256,
        height: 256,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H // L, M, Q, H
    });
}

// Add event listener to the button to generate QR code on click
generateButton.addEventListener('click', generateQRCode);

// Generate a QR code on page load with the default text
document.addEventListener('DOMContentLoaded', generateQRCode);