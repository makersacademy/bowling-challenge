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
    console.log(scorecard._allFrames);
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
  scorecard.calculateWhich(turn);
}

function displayScore() {
  let score = scorecard.calculateTotal();
  let idToChange = `f${frameCounter - 1}total`;
  document.getElementById(idToChange).innerHTML = score;
}

function displayScoreLogic() {
  // frameCounter starts at 2
  if (scorecard.strikeWasScored(frameCounter - 2) || scorecard.spareWasScored(frameCounter - 2)) {
      displayScore(); // If spare was scored, just display the score.
      }
    else {
      calculateScore(frameCounter - 2); // Calculate Score
      displayScore(); // Display Score
    }
    updateStrikesAndSpares();
  }

function updateStrikesAndSpares() {
  if (frameCounter > 2) {
    if (scorecard.strikeWasScored(frameCounter - 3) || scorecard.spareWasScored(frameCounter - 3)) {
        calculateScore(frameCounter - 3); // Calculate Score}
      }
    }
}
