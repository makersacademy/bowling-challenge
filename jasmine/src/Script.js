'use strict'

$(document).ready(function() {
  let game = new Game() 

  $('.btn-outline-secondary').click(function () {
    let roll = parseInt($(this).attr('data-value'))

    game.enterDroppedPins(roll);
    showValidRolls(roll)
    updateScoresheetRolls()
    updateScoresheetFrameScore()
    updateScoresheetTotalScore()
  })
  
  $('.btn:last').click(function() {
    location.reload()
  })

  let updateScoresheetRolls = function () {
    let _frameNumber = game.getCurrentFrameNumber()
    let _roll1 = game.getDroppedPins()[_frameNumber - 1][0]
    let _roll2 = game.getDroppedPins()[_frameNumber - 1][1]

    if (_frameNumber === 10) {
      playTenth()
      return
    }

    $(`#rolls td:nth-child(${_frameNumber * 2 - 1})`).text(_roll1)
    $(`#rolls td:nth-child(${_frameNumber * 2})`).text(_roll2)

    if (_roll1 === 10) {
      recordStrike()
    }

    if (_roll1 + _roll2 === 10) {
      recordSpare()
    }
  }

  let recordSpare = function () {
    let _frameNumber = game.getCurrentFrameNumber()

      $(`#rolls td:nth-child(${_frameNumber * 2 - 1})`).text('')
      $(`#rolls td:nth-child(${_frameNumber * 2})`).text('/')
  }

  let recordStrike = function () {
    let _frameNumber = game.getCurrentFrameNumber()

    $(`#rolls td:nth-child(${_frameNumber * 2 - 1})`).text('')
    $(`#rolls td:nth-child(${_frameNumber * 2})`).text('X')
  }

  let playTenth = function (){
    let _roll1 = game.getDroppedPins()[9][0]
    let _roll2 = game.getDroppedPins()[9][1]
    let _extra1 = game.getBonusRolls()[9][0]
    let _extra2 = game.getBonusRolls()[9][1]

    $('#rolls td:nth-child(19)').text(_roll1)
    $('#rolls td:nth-child(20)').text(_roll2)

    if (_roll1 === 10) {
      $('#rolls td:nth-child(19)').text('X')
      $('#rolls td:nth-child(20)').text(_extra1)
      $('#rolls td:nth-child(21)').text(_extra2)
    }

    if (_roll1 + _roll2 === 10) {
      $('#rolls td:nth-child(19)').text('')
      $('#rolls td:nth-child(20)').text('/')
      $('#rolls td:nth-child(21)').text(_extra1)
    }
  }

  let updateScoresheetFrameScore = function () {
    let _frameNumber = game.getCurrentFrameNumber()
    let _frameScore = game.getFrame(_frameNumber).calculateScore()
  
    $(`#frame-score td:nth-child(${_frameNumber})`).text(_frameScore)
  }

  let updateScoresheetTotalScore = function () {
    let _frameNumber = game.getCurrentFrameNumber()
    let _runningScore = game.getCurrentScore()

    $(`#total-score td:nth-child(${_frameNumber})`).text(_runningScore)
  }

  function showValidRolls(roll) {
    if (game._findActiveFrame() === undefined) {
      $('.btn-outline-secondary').show()
      return
    }

    $('.btn-outline-secondary').each(function () {
      let _dataValue = parseInt($(this).attr('data-value'))
      if (_dataValue > 10 - roll) {
        $(this).hide()
      }
    })
  }

})
