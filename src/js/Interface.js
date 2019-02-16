'use strict'

// setup
var scorecards = []
var displays = []
scorecards.push(new Scorecard())
displays.push(new Display())
var playerNumber = 1
var scorecard = scorecards[playerNumber - 1]
var display = displays[playerNumber - 1]
var ball = 0
var total = 0

$(document).ready(function () {
  // add a new player row
  $('.new').click(function () {
    $('.players .player').last().clone().appendTo('.players')
    scorecards.push(new Scorecard())
    displays.push(new Display())
    $('.players .player').last().find('.bottom-row input').val('')
    $('.players .player').last().attr('id', `player-${scorecards.length}`)
  })

  // start the game
  $('.start').click(function () {
    $('.new').hide()
    $('.start').hide()
    $('.button').show()
    $(`#player-${playerNumber} #ball-${ball}`).addClass('current-with-border')
    $(`#player-${playerNumber} #ball-${ball + 1}`).addClass('current')
    $(`#player-${playerNumber} #total-${total}`).addClass('current')
  })

  // clicking a number button
  $('.button').click(function () {
    var whichButton = $(this).text()
    var buttonValue = parseInt(whichButton)
    // record the number of pins knocked down
    scorecard.throw(buttonValue)
    display.toDisplay(buttonValue)
    // remove frame highlight
    $(`#player-${playerNumber} #ball-${ball}`).removeClass('current-with-border')
    $(`#player-${playerNumber} #ball-${ball + 1}`).removeClass('current')
    if (total === 9) {
      $(`#player-${playerNumber} #ball-${ball + 2}`).removeClass('current')
    }
    $(`#player-${playerNumber} #total-${total}`).removeClass('current')

    var frameComplete = (scorecard._scores.length % 2 === 0)
    var tenthFrameComplete = (scorecard._frames[9] !== undefined)
    var notTheLastPlayer = (playerNumber < scorecards.length)
    var notTheTenthFrame = (scorecard._scores.length < 19)
    // move to the the next player or back to the first
    if (notTheTenthFrame && frameComplete) {
      if (notTheLastPlayer) {
        playerNumber += 1
      } else {
        playerNumber = 1
        ball += 2
        total += 1
      }
    } else if (tenthFrameComplete) {
      if (notTheLastPlayer) {
        playerNumber += 1
      } else {
        playerNumber = 1
        ball += 2
        total += 1
      }
    }
    // check if the game is over
    if (total < 10) {
      // add frame highlight
      $(`#player-${playerNumber} #ball-${ball}`).addClass('current-with-border')
      $(`#player-${playerNumber} #ball-${ball + 1}`).addClass('current')
      if (total === 9) {
        $(`#player-${playerNumber} #ball-${ball + 2}`).addClass('current')
      }
      $(`#player-${playerNumber} #total-${total}`).addClass('current')
    }
    // switch to the correct scorecard
    scorecard = scorecards[playerNumber - 1]
    display = displays[playerNumber - 1]
    // hide and unhide buttons according to situation
    if (scorecard._frames[9] !== undefined) {
      $('.button').hide()
    } else if (scorecard._scores.length % 2 === 0) {
      $('.button').show()
    } else {
      $('.button').slice((11 - scorecard._scores[scorecard._scores.length - 1]), 11).hide()
    }
  })

  $(document).on('click', function () {
    var player, b, t
    // display each players scorecard
    for (player = 1; player <= scorecards.length; player++) {
      for (b = 0; b < 21; b++) {
        $(`#player-${player} #ball-${b}`).text(displays[player - 1]._display[b])
      }
      for (t = 0; t < 10; t++) {
        $(`#player-${player} #total-${t}`).text(scorecards[player - 1]._frames[t])
      }
    }
  })
})
