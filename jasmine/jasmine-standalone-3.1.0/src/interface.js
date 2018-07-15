// JQuery
$(document).ready(function() {
  var score = new Score();
  var game = new Game();

  showScorecard();
  updateScore();
  updateFrame();

  $('#bowl-pins').change(function() {
    var pins = $('#bowl-pins').val();
      $('#pins').text(pins);
      game.roll(pins);
      updateScore();
      updateFrame();
      // showScorecard();
  });

  $('#roll-button').on('click', function() {
    game.roll(10);
    // showStrike();
    updateScore();
    updateFrame();
    // showScorecard();
  });

  function updateScore() {
    $('#current-score').text(game.getScore());
  };

  function updateFrame() {
    $('#frame').text(game.getFrames());
  };

  function showScorecard() {
    $('#score-card').text(game.getScore());
  };

  function showStrike() {
    $('#strike').text(game.checkStrike(10));
  };

});
