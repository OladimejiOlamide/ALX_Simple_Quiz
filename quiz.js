/**
 * Function to check the user's selected answer against the correct answer.
 */
function checkAnswer() {
    // 1. Identify the Correct Answer:
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer:
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    // Note: If no option is selected, selectedOption will be null.
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Get the feedback display element
    const feedback = document.getElementById("feedback");
    
    // Clear previous text
    feedback.textContent = "";

    // Optional: Add basic validation to avoid confusing incorrect message if nothing is selected
    if (!userAnswer) {
         feedback.textContent = "Please select an answer.";
         return;
    }

    // 3. Compare the User’s Answer with the Correct Answer:
    if (userAnswer === correctAnswer) {
        // Correct answer branch
        feedback.textContent = "Correct! Well done.";
    } else {
        // Incorrect answer branch
        feedback.textContent = "That's incorrect. Try again!";
    }
}

// Add an Event Listener to the Submit Button:
document.getElementById("submit-answer").addEventListener("click", checkAnswer);