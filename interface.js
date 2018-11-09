$(document).ready(function () {
  var game = new Game()
  updateTotalScore()

  $(':button').click(function () {
    var pins = parseInt($( event.target ).attr('value'))
    $('#error').empty()
    addBowl(pins)
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
})
