var scorecard = new Scorecard()
var turnCounter = 1
var frameCounter = 1

document.addEventListener('DOMContentLoaded', function () {})

function pinHit (number) {
  if (frameCounter > 9) {
    turnTenRules(number)
  } else {
    if (turnCounter === 1) {
      scorecard.firstThrow(number)
      if (scorecard.strikeCheck(scorecard._firstThrow)) {
        ifStrike()
        frameCounter++
      } else {
        displayIncrementAndUpdate(number)
      }
    } else {
      scorecard.secondThrow(number)
      if (scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)) {
        ifSpare()
        incrementCounters()
      } else {
        displayIncrementAndUpdate(number)
      }
    }
  }
}

function turnTenRules (number) {
  if (turnCounter === 1) {
    scorecard.firstThrow(number)
    turnTenDisplayScoreHandler(number)
    scorecard._allFrames[9] = [number]
  }
  if (turnCounter === 2) {
    let lastRoll = scorecard._allFrames[9][0]
    if (lastRoll === 10) {
      scorecard._secondThrow = number
    } else {
      scorecard.secondThrow(number)
    }
    turnTenDisplayScoreHandler(number)
    scorecard._allFrames[9].push(number)
  }
  if (turnCounter >= 3) {
    let firstRoll = scorecard._allFrames[9][0]
    let secondRoll = scorecard._allFrames[9][1]
    if (
      scorecard.strikeCheck(firstRoll) ||
      scorecard.spareCheck(firstRoll, secondRoll)
    ) {
      scorecard.resetThrows()
      turnTenDisplayScoreHandler(number)
      scorecard._allFrames[9].push(number)
    }
  }
  updateScores()
  turnCounter++
}

// Helper Methods
function ifStrike () {
  scorecard.recordStrike()
  displayThrow(frameCounter, 2, 'X')
  updateScores()
}

function ifSpare () {
  displayThrow(frameCounter, 2, '/')
}

function incrementCounters () {
  turnCounter++
  if (turnCounter === 3) {
    scorecard.addToFrames()
    turnCounter = 1
    frameCounter++
  }
}

function displayThrow (frame, turn, number) {
  let idToChange = `f${frame}t${turn}`
  document.getElementById(idToChange).innerHTML = number
}

function displayScores () {
  for (var i = 1; i <= 10; i++) {
    let score = scorecard._score[i - 1]
    if (typeof score === 'undefined') {
      score = ''
    }
    if (isNaN(score)) {
      score = ''
    }
    document.getElementById(`f${i}total`).innerHTML = score
  }
}

function updateTotal () {
  total = scorecard.calculateTotal()
  if (!isNaN(total)) {
    document.getElementById('total').innerHTML = scorecard.calculateTotal()
  }
}

function turnTenDisplayScoreHandler (number) {
  if (scorecard.strikeCheck(number)) {
    displayThrow(frameCounter, turnCounter, 'X')
  } else if (
    scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)
  ) {
    displayThrow(frameCounter, turnCounter, '/')
  } else {
    displayThrow(frameCounter, turnCounter, number)
  }
}

// Bundle Methods
function updateScores () {
  scorecard.updateScores()
  updateTotal()
  displayScores()
}

function displayIncrementAndUpdate (number) {
  displayThrow(frameCounter, turnCounter, number)
  incrementCounters()
  updateScores()
}
