// Create a timed quiz using Javascript.
// Needs to store high scores of multiple users.

// Click start button begins timer, presents question.
    // Timer
// Timer that counts down from 5
// function countdown() {
//     var timeLeft = 5;
  
//     // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
//     var timeInterval = setInterval(function () {
//       // As long as the `timeLeft` is greater than 1
//       if (timeLeft > 1) {
//         // Set the `textContent` of `timerEl` to show the remaining seconds
//         timerEl.textContent = timeLeft + ' seconds remaining';
//         // Decrement `timeLeft` by 1
//         timeLeft--;
//       } else if (timeLeft === 1) {
//         // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
//         timerEl.textContent = timeLeft + ' second remaining';
//         timeLeft--;
//       } else {
//         // Once `timeLeft` gets to 0, set `timerEl` to an empty string
//         timerEl.textContent = '';
//         // Use `clearInterval()` to stop the timer
//         clearInterval(timeInterval);
//         // Call the `displayMessage()` function
//         displayMessage();
//       }
//     }, 1000);
//   }

// Question is answered, presented with another question.
    // Event listener to check answer correct/move to next question.

// When answered incorrectly, time is removed from clock.
// All questions answered/timer reaches 0, game is over.
// When game ends, save initials/score.
// Score and initials will need to persist against reload/leaving and returning to page.
    // Localstorage

// ---------- Example of question/answers?

    // var questions = [
    //     {
    //       title: "Which one is a looping structure in JavaScript?",
    //       choices: ["All the below", "For", "While", "do-while loops"],
    //       answer: "All the below"
    //     },
    //     {
    //       title: "What are the two basic groups of data types in JavaScript?",
    //       choices: [
    //         "Primitive and attribute",
    //         "Primitive and reference types",
    //         "Reference types and attribute",
    //         "None of the above"
    //       ],
    //       answer: "Primitive and reference types"
    //     },
    //     {
    //       title: "Commonly used data types DO NOT include:",
    //       choices: ["strings", "booleans", "alerts", "numbers"],
    //       answer: "alerts"
    //     },

    // Look for trivia data base.
    // Review how an object in js works.