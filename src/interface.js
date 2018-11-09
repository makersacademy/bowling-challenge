$(document).ready(function() {
  game = new Game();
  updateScore();

  $('button').click(function() {
     roll = ($(this).text());
     game.recordRoll(parseInt(roll));
     updateScore();
     showPreviousRolls();
  });

  function updateScore() {
    $('#score').text(game._totalScore);
  };

  function showPreviousRolls() {
    $('#previous-rolls').text(game._allRolls.join(' '));
  };

});
