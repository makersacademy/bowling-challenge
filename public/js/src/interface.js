$(document).ready(function() {
  let game = new Game();
  updateScore();

  $('#bowl').on('click', function() {
    const pins = parseInt($('#bowl_input').val())
    game.bowl(pins);

  });

  $('#calculate-score').on('click', function() {
    updateScore();
  });


  function updateScore() {
    $('#score').text(`Score: ${game.score()}`);
  };
  
});