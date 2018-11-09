$(document).ready(function () {
  var game = new Game()
  updateTotalScore()

  $(':button').click(function () {
    var pins = parseInt($( event.target ).attr('value'))
    $('#error').empty()
    addBowl(pins)
    updateScorecard()
    updateTotalScore()
  })

  function updateTotalScore () {
    $('#currentScore').text('score: ' + game.getCurrentScore())
  }

  function addBowl(pins) {
    try {
      game.addBowl(pins)
    }
    catch(error) {
      $('#error').text(error)
    }
  }

  function updateScorecard() {
    var frameNumber = game._frames.length
    var bowls = game.getCurrentFrame().getBowls().join(', ')
    console.log(game.getCurrentFrame().getBowls())
    console.log(bowls)
    $(`#frame${frameNumber}`).text(bowls)
  }
})
