$(document).ready(function() {
  var game = new Game();

  $('#bowl').on('click', function() {
    var frame = new Frame();
    frame.bowl_round();
    game.addframe(frame);
    game.calculateScores();
    debugger;
    $('#score').text(frame.bowls);
    $('#bowl-frame').text(game.scores);
  });
});
