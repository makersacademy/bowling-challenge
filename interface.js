$(document).ready(function () {
  var game = new Game();
  updateScore()

  $(':button').click(function () {
    var pins = parseInt($( event.target ).attr('value'))
    game.addBowl(pins)
    updateScore()
  })

  function updateScore () {
    $('#currentScore').text('score: ' + game.getCurrentScore())
  }
})
