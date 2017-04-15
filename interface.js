$(document).ready(function() {

  var game = new Game();

  updateFrame();

  $('#roll').on('click', function() {
    game.roll();
    updateFrame();
  });

  function updateFrame() {
    $('#frame-number').text(game._currentFrame.number());
    $('#frame-points').text(game._currentFrame.points());
    $('#frame-roll').text(game._currentFrame.currentRoll());
    $('#frame-pins').text(game._currentFrame.pins());
  };

});
