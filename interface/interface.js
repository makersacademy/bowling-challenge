var scorecard = new Scorecard();
var turnCounter = 1;
var frameCounter = 1;

document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello World");
});

function pinHit(number) {
  if (turnCounter === 1) {
    scorecard.firstThrow(number);
    displayThrow(number);
    incrementCounters();
  } else {
    scorecard.secondThrow(number);
    displayThrow(number);
    incrementCounters();
  }
}

function incrementCounters() {
  turnCounter++;
  if (turnCounter === 3) {
    scorecard.addToFrames()
    displayScores()
    turnCounter = 1;
    frameCounter++;
  }
}

function displayThrow(number) {
  let idToChange = `f${frameCounter}t${turnCounter}`;
  document.getElementById(idToChange).innerHTML = number;
}

function displayScores() {
  scorecard.updateScores()
  updateTotal()
  for (var i = 1; i <= 10; i++) {
    let idToChange = `f${i}total`;
    document.getElementById(idToChange).innerHTML = scorecard._score[i - 1]
  }
}

function updateTotal() {
  document.getElementById('total').innerHTML = scorecard.calculateTotal()
}

// function displayScore() {
//   scorecard.updateScores()
//   let score = scorecard.calculateTotal();
//   console.log(`f${frameCounter}total`);
//   let idToChange = `f${frameCounter}total`;
//   document.getElementById(idToChange).innerHTML = score;
// }
