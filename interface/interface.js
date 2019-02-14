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
  if (turnCounter === 3) { turnCounter = 1; frameCounter++; }
}
