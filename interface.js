$(document).ready(function() {
  var game = new BowlingGame();
  updateScore();

  $('#bowl').on('click', function () {
     
  });

  function updateScore() {
   $('#current_score').text(game.totalScore);
  }


});
