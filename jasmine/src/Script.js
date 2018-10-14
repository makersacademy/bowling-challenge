'use strict'

$(document).ready(function() {
  let game = new Game() 

  $('input').click(function () {
    let pinVal = parseInt($(this).attr('data-value'))


    // var pinValNumber = parseInt(pinVal)
    game.enterDroppedPins(pinVal);
    updateScoresheetRoll()
    updateScoresheetFrameScore()
    updateScoresheetTotalScore()
    console.log(game)
  })

  let updateScoresheetRoll = function () {
    let _frameNumber = game.getCurrentFrameNumber()
    let _roll1 = game.getDroppedPins()[_frameNumber - 1][0]
    let _roll2 = game.getDroppedPins()[_frameNumber - 1][1]

    
    switch (_frameNumber) {
      case 1:
        $('#rolls td:nth-child(1)').text(_roll1)
        $('#rolls td:nth-child(2)').text(_roll2)
        break
      case 2:
        $('#rolls td:nth-child(3)').text(_roll1)
        $('#rolls td:nth-child(4)').text(_roll2)
        break
      case 3:
        $('#rolls td:nth-child(5)').text(_roll1)
        $('#rolls td:nth-child(6)').text(_roll2)
        break
      case 4:
        $('#rolls td:nth-child(7)').text(_roll1)
        $('#rolls td:nth-child(8)').text(_roll2)
        break
      case 5:
        $('#rolls td:nth-child(9)').text(_roll1)
        $('#rolls td:nth-child(10)').text(_roll2)
        break
      case 6:
        $('#rolls td:nth-child(11)').text(_roll1)
        $('#rolls td:nth-child(12)').text(_roll2)
        break
      case 7:
        $('#rolls td:nth-child(13)').text(_roll1)
        $('#rolls td:nth-child(14)').text(_roll2)
        break
      case 8:
        $('#rolls td:nth-child(15)').text(_roll1)
        $('#rolls td:nth-child(16)').text(_roll2)
        break
      case 9:
        $('#rolls td:nth-child(17)').text(_roll1)
        $('#rolls td:nth-child(18)').text(_roll2)
        break
      case 10:
        $('#rolls td:nth-child(19)').text(_roll1)
        $('#rolls td:nth-child(20)').text(_roll2)
        $('#rolls td:nth-child(21)').text(_roll2)
        break
    }
  }

  let updateScoresheetFrameScore = function () {
    let _frameNumber = game.getCurrentFrameNumber()
    let _frameScore = game.getFrame(_frameNumber).calculateScore()
    // let _currentFrame = game.getFrame(_frameNumber)
    // let _frameScore = _currentFrame.calculateScore()

    switch (_frameNumber) {
      case 1:
        $('#frame-score td:nth-child(1)').text(_frameScore)
        break
      case 2:
        $('#frame-score td:nth-child(2)').text(_frameScore)
        break
      case 3:
        $('#frame-score td:nth-child(3)').text(_frameScore)
        break
      case 4:
        $('#frame-score td:nth-child(4)').text(_frameScore)
        break
      case 5:
        $('#frame-score td:nth-child(5)').text(_frameScore)
        break
      case 6:
        $('#frame-score td:nth-child(6)').text(_frameScore)
        break
      case 7:
        $('#frame-score td:nth-child(7)').text(_frameScore)
        break
      case 8:
        $('#frame-score td:nth-child(8)').text(_frameScore)
        break
      case 9:
        $('#frame-score td:nth-child(9)').text(_frameScore)
        break
      case 10:
        $('#frame-score td:nth-child(10)').text(_frameScore)
        break
    }
  }

  let updateScoresheetTotalScore = function () {
    let _frameNumber = game.getCurrentFrameNumber()
    let _runningScore = game.getCurrentScore()
    
    switch (_frameNumber) {
      case 1:
        $('#total-score td:nth-child(1)').text(_runningScore)
        break
      case 2:
        $('#total-score td:nth-child(2)').text(_runningScore)
        break
      case 3:
        $('#total-score td:nth-child(3)').text(_runningScore)
        break
      case 4:
        $('#total-score td:nth-child(4)').text(_runningScore)
        break
      case 5:
        $('#total-score td:nth-child(5)').text(_runningScore)
        break
      case 6:
        $('#total-score td:nth-child(6)').text(_runningScore)
        break
      case 7:
        $('#total-score td:nth-child(7)').text(_runningScore)
        break
      case 8:
        $('#total-score td:nth-child(8)').text(_runningScore)
        break
      case 9:
        $('#total-score td:nth-child(9)').text(_runningScore)
        break
      case 10:
        $('#total-score td:nth-child(10)').text(_runningScore)
        break
    }
  }

})

