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
    for (let i = 0; i < 9; i += 1) {
      $(`#${i}`).text(game.scoreBoard()[i]);
    }
  }

  function showTotalScore() {
    if (game._isGameOver()) {
      $('#total-score').text(`You scored ${game.totalScore()} points`);
    }
  }
});
