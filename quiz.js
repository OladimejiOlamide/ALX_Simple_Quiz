/**
 * Simple Quiz Logic Script
 * Handles checking the user's selected answer against the correct answer.
 */

function checkAnswer() {
    // 1. Define the correct answer for the current question
    const correctAnswer = "4"; 

    // 2. Select the currently checked radio button within the 'quiz' group
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const feedbackElement = document.getElementById("feedback");

    // Reset previous feedback styles
    feedbackElement.className = '';
    feedbackElement.textContent = '';

    // --- Input Validation: Check if an option was selected ---
    if (!selectedOption) {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.classList.add('warning'); // Use CSS to style this
        return; // Stop execution if no answer is selected
    }

    // Get the value of the selected answer
    const userAnswer = selectedOption.value;

    // 3. Compare the user's answer to the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.classList.add('correct'); // Use CSS to style success
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.classList.add('incorrect'); // Use CSS to style failure
    }
}

// Attach the checkAnswer function to the 'click' event of the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);