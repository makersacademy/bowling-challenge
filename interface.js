/*jshint esversion: 6 */
$(document).ready(function() {
  var game = new BowlingGame();

  $('#submit_pins').on('click', function() {
    var pins = $('#pins_hit').val();
    game.roll(pins);
  });

  // $('#final-score').on('click', function() { // event listener
  //   game.score(); // update model
  //   updateScore(); // update view
  // });
  //
  // function updateScore() {
  //   $('#score').text(game.score());
  // }



});
