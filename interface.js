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
    var frameNumber = game.frameNumber;
    if (frameNumber < 11) {
      $('#frame').text(Math.floor(game.frameNumber));
    } else {
      $('#frame').text(10);
    }

  }

  updateFrameNumberInterface(1); // sets default frame number as 1

});
