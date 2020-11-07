$(document).ready(function() {
  let game = new Game();
  updateScore();

  $('#new').on('click', function(){
    game.newGame();
    updateScore();
  });

  $('#bowl').on('click', function() {
    const pins = parseInt($('#bowl_input').val())
    game.bowl(pins);
    $('#bowl_input').val('');
  });

  $('#calculate-score').on('click', function() {
    updateScore();
  });

  function updateScore() {
    $('#score').text(`Score: ${game.score()}`);
  };
});