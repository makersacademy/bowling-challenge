$(document).ready(function BowlingGame() {
  var game = new Game();
  var frame = new Frame();

  function updateScore() {
    $('#currentBowlScore').text(frame.score);
  }

  $('#bowl').click(function (event) {
    frame.bowl(frame.pins);
    updateScore();
  });
});
