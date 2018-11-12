$(document).ready(function () {
  var game = new Game()
  updateTotalScore()
  game.startNextFrame()

  $(':button').click(function () {
    var pins = parseInt($(event.target).attr('value'))
    $('#error').empty()
    addBowl(pins)
    updateScorecard()
    updateTotalScore()
  })

  $('#reset').click(function () {
    game = new Game()
    updateTotalScore()
    game.startNextFrame()
    $('.frame').each(function () {
      $(this).empty()
    })
    $('.frameScore').each(function () {
      $(this).empty()
    })
  })

  function updateTotalScore () {
    $('#currentScore').text('score: ' + game.getCurrentScore())
  }

  function addBowl (pins) {
    try {
      game.addBowl(pins)
    } catch (error) {
      $('#error').text(error)
    }
  }

  function updateScorecard () {
    var frameNumber = game.getFrames().length
    var bowls = game.getCurrentFrame().getBowls().join(', ')
    $(`#frame${frameNumber}`).text(bowls)
    updateFrameScores()
  }

  function updateFrameScores () {
    $('.frameScore').each(function () {
      var frameNumber = parseInt($(this).attr('frameNumber'))
      $(this).text(game.getFrames()[frameNumber].getScore(
        game.getFrames()[frameNumber + 1], game.getFrames()[frameNumber + 2]
      ))
    })
  }
})
