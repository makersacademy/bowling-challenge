$(document).ready(function() {
  var game = new Game()
  updateTotalScore()
  game.startNextFrame()


  $('.scoreButton').click(function () {
    var pins = parseInt($(event.target).attr('value'))
    $('#error').empty()
    bowl(pins)
    updateTotalScore()
    updateScoreCard()
  })

  $('#new_game').click(function() {
    game = new Game(Frame, FinalFrame)
    updateTotalScore()
    game.startNextFrame()
    $('.frame').each(function() {
      $(this).empty()
    })
    $('.frameScore').each(function() {
      $(this).empty()
    })
  })

  function updateTotalScore() {
    $('#currentScore').text('Current score: ' + game.getCurrentScore())
  }

  function bowl(pins) {
    try {
      game.bowl(pins)
    } catch (error) {
      $('#error').text(error)
    }
  }

  function updateScoreCard() {
    var frameNo = game.getFrames().length
    var bowls = game.getCurrentFrame().getBowls().join(', ')
    $(`#frame${frameNo}`).text(bowls)
    updateFrameScores()
  }

  function updateFrameScores() {
    $('.frameScore').each(function() {
      var frameNo = $(this).attr('frameNo')
      $(this).text(game.getFrames()[frameNo].getScore(
        game.getFrames()[frameNo + 1], game.getFrames()[frameNo + 2]
      ))
    })
  }
})
