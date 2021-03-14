$(document).ready(function() {
  var game = new Game();
  updateScorecard();
  updateFrame();

  function updateScorecard() {
    $('#scorecard').text(game.scorecard);
  }

  function updateFrame() {
    $('#frame-number').text(game.turn)
  }

  $('#begin-frame').on('click', function() {
    game.beginFrame();
    updateFrame();
  })

  $('#enter-points').submit(function(event) {
    event.preventDefault();
    var points = $('#throw-input').val();
    game.throwBall(points);
    updateScorecard();
  })

})