var scorecard = new Scorecard()
var turnCounter = 1
var frameCounter = 1

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello World')
})

function pinHit (number) {
  if (frameCounter === 10) {
    turnTenRules(number)
  } else {
    if (turnCounter === 1) {
      // If Turn 1
      scorecard.firstThrow(number)
      if (scorecard.strikeCheck(scorecard._firstThrow)) {
        ifStrike()
        frameCounter++
      } else {
        displayAndIncrement(number)
      }
    } else {
      // If Turn 2
      scorecard.secondThrow(number)
      if (scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)) {
        ifSpare()
        incrementCounters()
      } else {
        displayAndIncrement(number)
      }
    }
  }
}

function ifStrike () {
  scorecard.recordStrike()
  displayThrow(frameCounter, 2, 'X')
  updateScores()
}

function ifSpare () {
  displayThrow(frameCounter, 2, '/')
}

function displayAndIncrement (number) {
  displayThrow(frameCounter, turnCounter, number)
  incrementCounters()
}

function incrementCounters () {
  turnCounter++
  if (turnCounter === 3) {
    scorecard.addToFrames()
    updateScores()
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
    document.getElementById(`f${i}total`).innerHTML = score
  }
}

function updateTotal () {
  scorecard.updateScores()
  document.getElementById('total').innerHTML = scorecard.calculateTotal()
}

function updateScores () {
  updateTotal()
  displayScores()
}

function turnTenRules (number) {
  var maxTurns = 2
  if (turnCounter === 1) {
    scorecard.firstThrow(number)
    if (scorecard.strikeCheck(number)) {
      // If Strike
      displayThrow(frameCounter, turnCounter, 'X')
      maxTurns = 3
      updateScores()
    }
    // Then
    scorecard._allFrames.push([number])
    console.log(scorecard._allFrames)
  } // Turn 1 If End
  if (turnCounter === 2) {
    scorecard.secondThrow(number)
    if (scorecard.strikeCheck(number)) {
      // If Strike
      displayThrow(frameCounter, turnCounter, 'X')
      maxTurns = 3
    } else if (
      scorecard.spareCheck(scorecard._firstThrow, scorecard._secondThrow)
    ) {
      displayThrow(frameCounter, turnCounter, '/')
      maxTurns = 3
      updateScores()
    }
  } // Turn 2 If End
  // Then
  scorecard._allFrames[9].push(number)
  if (turnCounter === 3) {
    if (scorecard.strikeCheck(number)) {
      // If Strike
      displayThrow(frameCounter, turnCounter, 'Z')
    }
    scorecard._allFrames[9].push(number)
    updateScores()
  }
  if (turnCounter <= maxTurns) {
    turnCounter++
  }
}
