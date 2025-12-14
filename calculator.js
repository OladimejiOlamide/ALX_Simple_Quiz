/**
 * Simple Calculator Logic
 * Defines arithmetic functions and attaches them to button click events.
 */

// --- 1. Implement Arithmetic Functions ---

function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    // Basic protection against division by zero
    if (number2 === 0) {
        return "Error: Division by Zero";
    }
    return number1 / number2;
}

// --- Helper function to get and parse inputs ---

function getInputs() {
    // Get values from input fields
    const input1 = document.getElementById('number1').value;
    const input2 = document.getElementById('number2').value;

    // Convert input values to floating-point numbers.
    // Use || 0 to provide a default value if the input is empty or invalid (Ensure Input Validation).
    const number1 = parseFloat(input1) || 0;
    const number2 = parseFloat(input2) || 0;
    
    return { number1, number2 };
}

// --- 2. Attach Event Listeners ---

const resultElement = document.getElementById('calculation-result');

// Function to handle the common logic for all operations
function handleOperation(operationFn) {
    const { number1, number2 } = getInputs();
    const result = operationFn(number1, number2);
    resultElement.textContent = result;
}

// Attach listeners to the operation buttons
document.getElementById('add').addEventListener('click', function() {
    handleOperation(add);
});

document.getElementById('subtract').addEventListener('click', function() {
    handleOperation(subtract);
});

document.getElementById('multiply').addEventListener('click', function() {
    handleOperation(multiply);
});

document.getElementById('divide').addEventListener('click', function() {
    handleOperation(divide);
});