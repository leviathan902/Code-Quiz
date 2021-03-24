var scores = [];

function init() {
    // Get stored todos from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));
  
    // If todos were retrieved from localStorage, update the todos array to it
    if (storedScores !== null) {
      scores = storedScores;
    }
  
    // This is a helper function that will render todos to the DOM
    renderScores();
  }


// Calls init to retrieve data and render it to the page on load
  init()