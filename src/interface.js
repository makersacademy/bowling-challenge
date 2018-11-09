$(document).ready(function() {
  game = new Game();
  updateScore();


  $('#record-roll').submit(function(event) {
    event.preventDefault();
    var numberOfPins = $('#number-of-pins').val();
    game.recordRoll(parseInt(numberOfPins));
    updateScore();
  });

  function updateScore() {
    $('#score').text(game._totalScore);
  };

});
