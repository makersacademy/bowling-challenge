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
    // console.log(game)
  })
  
  $('.btn:last').click(function() {
    location.reload()
  })

  // handles the rendering of the rolls for each frame
  function updateScoresheetRolls() {
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

  // handles the rendering of a 'Spare' frame
  function recordSpare() {
    let _frameNumber = game.getCurrentFrameNumber()

      $(`#rolls td:nth-child(${_frameNumber * 2 - 1})`).text('')
      $(`#rolls td:nth-child(${_frameNumber * 2})`).text('/')
  }

  // handles the rendering of a 'Strike' frame
  function recordStrike() {
    let _frameNumber = game.getCurrentFrameNumber()

    $(`#rolls td:nth-child(${_frameNumber * 2 - 1})`).text('')
    $(`#rolls td:nth-child(${_frameNumber * 2})`).text('X')
  }

  // handles the rendering of the tenth frame
  function playTenth() {
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

  // populates the 'Frame Score' row of the table with the score (regular rolls)of each frame
  function updateScoresheetFrameScore() {
    let _frameNumber = game.getCurrentFrameNumber()
    let _currentFrame = game.getFrame(_frameNumber)
    let _frameScore = _currentFrame.calculateScore()

    $(`#frame-score td:nth-child(${_frameNumber})`).text(_frameScore)
  }

  // populates the 'Total Score' row of the table with the running total (regular rolls and bonus rolls of frames played)
  function updateScoresheetTotalScore() {
    let _frameNumber = game.getCurrentFrameNumber()
    let _runningScore = game.getCurrentScore()

    $(`#total-score td:nth-child(${_frameNumber})`).text(_runningScore)
  }

  // hides buttons to ensure users cannot input more than 10 pins per frame
  function showValidRolls(roll) {
    let _frameNumber = game.getCurrentFrameNumber()

    if (_frameNumber === 10 && game.getBonusRolls()[9][0] < 10) {
      showValidRollsLastFrame(roll)
      return
    }
    // this causes a problem with the last frame, which will not have an active frame - workaround 'showValidRollsLastFrame(roll)' below
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

  // hides buttons to ensure users cannot input more than 10 pins during last frame
  function showValidRollsLastFrame(roll) {
    $('.btn-outline-secondary').each(function () {
      let _dataValue = parseInt($(this).attr('data-value'))
      if (_dataValue > 10 - roll) {
          $(this).hide()
      }
    })
  }

})
