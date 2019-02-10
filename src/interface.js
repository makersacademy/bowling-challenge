'use strict'

let bowling = new Bowling() // eslint-disable-line

$(document).ready(function () {
  updateAll()
  $('#input-roll').submit(function (event) {
    event.preventDefault()
    let roll = parseInt($('#current-roll').val())
    bowling.enterScore(roll)
    updateAll()
  })
  $('#reset').submit(function (event) {
    bowling = new Bowling() // eslint-disable-line
  })
})

function updateAll () {
  updateGameScore()
  updateFrameNumber()
  updateRollNumber()
  populateTable()
}

function updateGameScore () {
  $('#game-total').text(bowling.gameScore())
}

function updateFrameNumber () {
  $('#frame-number').text(bowling.frame)
}

function updateRollNumber () {
  $('#roll-number').text(bowling.getCurrentRoll())
}

function populateTable () {
  let frames = bowling.getCompleteFrames()
  frames.forEach(function (frame) {
    $('#' + (frame.number() + 1)).find('#frame').text(frame.number() + 1)
    $('#' + (frame.number() + 1)).find('#roll-1').text(frame.firstRoll())
    $('#' + (frame.number() + 1)).find('#roll-2').text(frame.secondRoll())
    $('#' + (frame.number() + 1)).find('#roll-3').text(frame.thirdRoll())
    $('#' + (frame.number() + 1)).find('#total').text(frame.frameScore())
    $('#' + (frame.number() + 1)).find('#symbol').text(getSymbol(frame))
  })
}

function getSymbol (frame) {
  if (frame.isStrike()) {
    return 'X'
  } else if (frame.isSpare()) {
    return '/'
  }
}
