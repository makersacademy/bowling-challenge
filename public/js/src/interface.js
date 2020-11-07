$(document).ready(function() {
  let game = new Game();
  updateScore();

  $('#new').on('click', function(){
    game.newGame();
    $('#current_score').val('');
    updateScore();
  });

  $('#bowl').on('click', function() {
    const pins = parseInt($('#bowl_input').val());
    displayCurrentScore(pins);
    game.bowl(pins);
    $('#bowl_input').val('');
  });

  $('#calculate-score').on('click', function() {
    updateScore();
  });

  function updateScore() {
    $('#score').text(`Score: ${game.score()}`);
  };

  function displayCurrentScore(pins) {
    let scoreDisplay;
    if (Number.isInteger(pins)) {
      scoreDisplay = pins === 10 ? 'STRIKE' : pins;
    }
    else {
      scoreDisplay = "That's not a number!";
    }
    $('#current_score').text(`${scoreDisplay}`);
  }
});