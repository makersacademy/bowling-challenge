$(() => {
  const game = new Game();

  $('#add-roll').on('click', () => {
    if (!$('#roll-input').val()) { return; }

    game.addRoll($('#roll-input').val());
    updateScores();
    updateRolls();
    showTotalScore();
  });

  function updateRolls() {
    updateFrames();
    updateFinalFrame();
  }

  function updateFrames() {
    for (let i = 0; i < 9; i += 1) {
      if (game.frames.length >= i + 1) {
        $(`#${i + 1}-1`).text(game.frames[i].rolls[0]);
        $(`#${i + 1}-2`).text(game.frames[i].rolls[1]);
      }
    }
  }

  function updateFinalFrame() {
    if (game.frames.length === 10) {
      $('#10-1').text(game.frames[9].rolls[0]);
      $('#10-2').text(game.frames[9].rolls[1]);
      $('#10-3').text(game.frames[9].rolls[2]);
    }
  }

  function updateScores() {
    $('#1').text(game.scoreBoard()[0]);
    $('#2').text(game.scoreBoard()[1]);
    $('#3').text(game.scoreBoard()[2]);
    $('#4').text(game.scoreBoard()[3]);
    $('#5').text(game.scoreBoard()[4]);
    $('#6').text(game.scoreBoard()[5]);
    $('#7').text(game.scoreBoard()[6]);
    $('#8').text(game.scoreBoard()[7]);
    $('#9').text(game.scoreBoard()[8]);
    $('#10').text(game.scoreBoard()[9]);
  }

  function showTotalScore() {
    if (game._isGameOver()) {
      $('#total-score').text(`You scored ${game.totalScore()} points`);
    }
  }
});
