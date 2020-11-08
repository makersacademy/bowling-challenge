$(document).ready(function() {
  let game = new Game();
  updateScore();

  $('#new').on('click', function(){
    game.newGame();
    $('#current_score').text('');
    updateScore();
  });

  $('#bowl').on('click', function() {
    const pins = parseInt($('#bowl_input').val());
    displayCurrentScore(pins);
    let bowl = game.bowl(pins);
    isGameOver(bowl);
    updateScore();
    $('#bowl_input').val('');
  });

  function updateScore() {
    $('#score').text(`Score: ${game.score()}`);
  };

  function displayCurrentScore(pins) {
    let scoreDisplay;
    if (Number.isInteger(pins)) {
      scoreDisplay = game.isInvalidRoll(pins) ? 'NOT POSSIBLE' : pins === 10 ? 'STRIKE' : pins;
    }
    else {
      scoreDisplay = "That's not a number!";
    }
    $('#current_score').text(`${scoreDisplay}`);
  }
  

  function isGameOver(bowl) {
    if (bowl === "GAME OVER") {
      $('#current_score').text("GAME OVER");
    };
  }
});