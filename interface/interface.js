var scorecard = new Scorecard()
var turnCounter = 1;
var frameCounter = 1;

document.addEventListener('DOMContentLoaded', function () {
  console.log("Hello World")
});

function pinHit(number) {
  logThrow(number)
  displayThrow(number)
  incrementCounters()
}

function logThrow(number) {
  if (turnCounter === 1) { scorecard.firstThrow(number) }
  else { scorecard.secondThrow(number) }
}

function displayThrow(number) {
  let idToChange = `f${frameCounter}t${turnCounter}`
  document.getElementById(idToChange).innerHTML = number;
}

function incrementCounters() {
  turnCounter ++;
  if (turnCounter === 3) {
    calculateScore();
    displayScore();
    turnCounter = 1;
    frameCounter++;
  }
}

function calculateScore() {
  scorecard.addToFrames();
  scorecard.calculateBasic(frameCounter - 1);
}

function displayScore() {
  let score = scorecard.calculateTotal();
  let idToChange = `f${frameCounter}total`
  document.getElementById(idToChange).innerHTML = score;
}

function spare() {

}

function strike() {

}

function frameTen() {

}
