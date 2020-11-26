$(document).ready(function() {
  let game = new Game();
  updateScore();

  $('#new').on('click', function(){
    game.newGame();
    resetScoreAndError()
    updateScore();
  });

  $('#bowl-input').on('input', function() {
    resetScoreAndError()
  });

  $('#bowl').on('click', function() {
    const pins = parseInt($('#bowl-input').val());
    displayCurrentScore(pins);
    let bowl = game.bowl(pins);
    isGameOver(bowl);
    updateScore();
    $('#bowl-input').val('');
  });

  function updateScore() {
    $('#score').text(`Score: ${game.score()}`);
  };

  function displayCurrentScore(pins) {
    if (!Number.isInteger(pins)) return $('#error').text("That's not a number!");
    if (game.isInvalidRoll(pins)) return $('#error').text('NOT POSSIBLE');
    return $('#current-score').text(`${pins === 10 ? 'STRIKE' : pins}`);
  }
  
  function isGameOver(bowl) {
    if (bowl === "GAME OVER") {
      $('#current-score').text("GAME OVER");
    };
  }

  function resetScoreAndError() {
    $('#error').text('');
    $('#current-score').text('');
  }
});