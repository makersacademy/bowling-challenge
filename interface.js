/*jshint esversion: 6 */
$(document).ready(function() {
  var game = new BowlingGame();

  $('#submit_pins').on('click', function() {
    var pinsString = $('#pins_hit').val();
    var pins = parseInt(pinsString);
    console.log(pins);
    game.roll(pins);
    updateFrameNumberInterface();
  });

  $('#final-score').on('click', function() { // event listener
    $('#score').text(game.score());
  });

  function updateFrameNumberInterface() {
    $('#frame').text(Math.floor(game.frameNumber));
  }

  updateFrameNumberInterface(1); // sets default frame number as 1

});
