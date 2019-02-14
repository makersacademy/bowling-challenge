var scorecard = new Scorecard();
var turnCounter = 1;
var frameCounter = 1;

document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello World");
});

function pinHit(number) {
  if (turnCounter === 1) {
    // If Turn 1
    scorecard.firstThrow(number);
    if (scorecard.strikeCheck(scorecard._firstThrow)) {
      ifStrike();
    } else {
      displayAndIncrement(number);
    }
  } else {
    // If Turn 2
    scorecard.secondThrow(number);
    if (scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)) {
      ifSpare()
    } else {
    displayAndIncrement(number);
  }
  }
}

function ifStrike() {
  scorecard.recordStrike();
  displayThrow(frameCounter, 2, "X");
  updateScores();
  frameCounter++;
}

function ifSpare() {
  displayThrow(frameCounter, 2, "/");
  incrementCounters();
}

function displayAndIncrement(number) {
  displayThrow(frameCounter, turnCounter, number);
  incrementCounters();
}

function incrementCounters() {
  turnCounter++;
  if (turnCounter === 3) {
    scorecard.addToFrames();
    updateScores();
    turnCounter = 1;
    frameCounter++;
  }
}

function displayThrow(frame, turn, number) {
  let idToChange = `f${frame}t${turn}`;
  document.getElementById(idToChange).innerHTML = number;
}

function displayScores() {
  for (var i = 1; i <= 10; i++) {
    let score = scorecard._score[i - 1]
    if (typeof score === "undefined") { score = "" }
    document.getElementById(`f${i}total`).innerHTML = score
  }
}

function updateTotal() {
  scorecard.updateScores();
  document.getElementById("total").innerHTML = scorecard.calculateTotal();
}

function updateScores() {
  updateTotal()
  displayScores()
}
