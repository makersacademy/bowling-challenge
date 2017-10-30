$(document).ready(function() {
  var game = new BowlingGame();

  showScoreAndFrame();

  $('#roll').click(function() {
    game.roll($('#rollOne').val(), $('#rollTwo').val());
    showScoreAndFrame();
  });

  function showScoreAndFrame() {
    $('#current-frame').text(game._currentFrame);
    $('#total-score').text(game._totalScore);
  }

  // function clearFields() {
  //   $('#rollOne').value = "";
  //   $('#rollTwo').value = "";
  // }
});
