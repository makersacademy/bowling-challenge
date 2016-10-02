$(document).ready(function() {
var game = new Game();

  $('#submit_score').submit(function(event){
    event.preventDefault();
    score = $('#score_input').val();
    game.bowl(parseInt(score));
    updateDisplay();
  });

  function updateDisplay() {
      game.calculateScores();
      console.log(game._finalScores);
      $('#display_scores').text(game._finalScores.join());
      if (game._frames.length <= 10)
        $('#game_status').text(game._frames.length + ' frames played');
      else
        $('#game_status').text('game is over');
  };

})
