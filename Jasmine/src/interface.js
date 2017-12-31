$(document).ready(function() {
  var game = new Game();

  $('#roll-form').submit(function(evt) {
    evt.preventDefault();
    var pinsDown = Number($('#pins-down').val());
    game.currentMove(pinsDown);
    updateFrames();
    updateTotalScore();
  });

  function updateFrames() {
    game.frames.forEach(function(frame) {
      $('.frame-' + frame.frameNumber).text(frame.formattedRolls());
    });
  };

  function updateTotalScore() {
    $('.total').text(game.calculateTotalScore());
  };
});
