var scorecard = new Scorecard();
var turnCounter = 1;
var frameCounter = 1;

document.addEventListener("DOMContentLoaded", function() {
  console.log("Hello World");
});

function pinHit(number) {
  logThrow(number);
  displayInputLogic(number);
}

function logThrow(number) {
  if (turnCounter === 1) {
    scorecard.firstThrow(number);
  } else {
    scorecard.secondThrow(number);
  }
}

function displayInputLogic(number) {
  if (scorecard._firstThrow === 10) {
    scorecard.recordStrike(); // Pushes [10, 0]
    scorecard.resetThrows(); // Empties throws
    incrementCounters(); // Sets to turn 2
    displayThrow("X"); // Displays X in Corner
    incrementCounters(); // Sets to turn 1
    displayScoreLogic();
  } else if (scorecard._firstThrow + scorecard._secondThrow === 10) {
    displayThrow("/"); // Displays X in Corner
    incrementCounters(); // Sets to turn 2
    scorecard.addToFrames(); //Working
    displayScoreLogic();
  } else if (turnCounter === 2) {
    scorecard.addToFrames();
    displayThrow(number);
    incrementCounters();
    displayScoreLogic();
  } else {
    displayThrow(number); // Displays Number
    incrementCounters(); // Sets to turn 2
  }
}

function incrementCounters() {
  turnCounter++;
  if (turnCounter === 3) {
    turnCounter = 1;
    frameCounter++;
  }
}

function displayThrow(number) {
  let idToChange = `f${frameCounter}t${turnCounter}`;
  document.getElementById(idToChange).innerHTML = number;
}

function calculateScore(turn) {
  scorecard.calculateWhich(turn - 2);
}

function displayScore(turn) {
  let score = scorecard.calculateTotal();
  let idToChange = `f${turn - 1}total`;
  document.getElementById(idToChange).innerHTML = score;
}

function displayScoreLogic() {
  updateStrikesAndSpares();
  if ( // First frame is a Strike/Spare
    scorecard.strikeWasScored(frameCounter - 2) ||
    scorecard.spareWasScored(frameCounter - 2)
  ) {
    displayScore(frameCounter); // If spare was scored, just display the score.
  } else {
    calculateScore(frameCounter); // Calculate Score
    displayScore(frameCounter); // Display Score
  }
}
function updateStrikesAndSpares() {
  if (frameCounter > 2) { // Any frame after the first
    if (
      scorecard.strikeWasScored(frameCounter - 3) ||
      scorecard.spareWasScored(frameCounter - 3)
    ) {
      calculateScore(frameCounter - 1); // Calculate Score
      displayScore(frameCounter - 1);
    }
  }
  }

function frameTen() {
  if (frameCounter == 11) {
  }
}
