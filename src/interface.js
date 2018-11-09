$(document).ready(function() {
  game = new Game();
  updateScore();


  $('#record-roll').submit(function(event) {
    event.preventDefault();
    var numberOfPins = $('#number-of-pins').val();
    game.recordRoll(parseInt(numberOfPins));
    updateScore();
    showPreviousRolls();
  });

  function updateScore() {
    $('#score').text(game._totalScore);
  };

  function showPreviousRolls() {
    rolls = ""
    for (var i = 0; i < game._allFrames.length; i ++) {
      rolls += game._allFrames[i]["rolls"].join(' ')
    };
    $('#previous-rolls').text(rolls);
  };

});
