/**
 * Function to check the user's answer and provide feedback.
 */
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer using querySelector
    const selectedRadio = document.querySelector('input[name="quiz"]:checked');

    // Access the feedback element
    const feedback = document.getElementById('feedback');

    // Check if a radio button was actually selected
    if (selectedRadio) {
        const userAnswer = selectedRadio.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // Fallback if no answer is selected
        feedback.textContent = "Please select an answer.";
    }
}

// Select the submit button and add the event listener
document.getElementById('submit-answer').addEventListener('click', checkAnswer);