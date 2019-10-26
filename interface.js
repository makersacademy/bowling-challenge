$(document).ready(function() {
  var game = new BowlingGame();
  updateScore();

  function updateScore() {
    $('#score').text(game.cumulativeScore);
  };

  $('#bowl-0').click(function() {
    game.bowl(0);
    updateScore();
  });

  $('#bowl-1').click(function() {
    game.bowl(1);
    updateScore();
  });

  $('#bowl-2').click(function() {
    game.bowl(2);
    updateScore();
  });

  $('#bowl-3').click(function() {
    game.bowl(3);
    updateScore();
  });

  $('#bowl-4').click(function() {
    game.bowl(4);
    updateScore();
  });

  $('#bowl-5').click(function() {
    game.bowl(5);
    updateScore();
  });

  $('#bowl-6').click(function() {
    game.bowl(6);
    updateScore();
  });

  $('#bowl-7').click(function() {
    game.bowl(7);
    updateScore();
  });

  $('#bowl-8').click(function() {
    game.bowl(8);
    updateScore();
  });

  $('#bowl-9').click(function() {
    game.bowl(9);
    updateScore()
  });

  $('#bowl-10').click(function() {
    game.bowl(10);
    updateScore()
  });

});
