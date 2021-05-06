$(() => {
  const game = new Game();

  $('#add-roll').on('click', () => {
    if (!$('#roll-input').val()) {
      alert('Please enter a valid roll!');
      return;
    }

    try {
      game.addRoll($('#roll-input').val());
      updateScores();
      updateRolls();
      showTotalScore();
    } catch (error) {
      errorHandler(error);
    }
  });

  function updateRolls() {
    updateFrames();
    if (game.frames.length === 10) {
      updateFinalFrame();
    }
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
    for (let i = 0; i < 3; i += 1) {
      $(`#10-${i + 1}`).text(game.frames[9].rolls[i]);
    }
  }

  function updateScores() {
    for (let i = 0; i < 10; i += 1) {
      $(`#${i + 1}`).text(game.scoreBoard()[i]);
    }
  }

  function showTotalScore() {
    if (game._isGameOver()) {
      $('#total-score').text(`You scored ${game.totalScore()} points`);
    }
  }

  function errorHandler(error) {
    if (error === 'Invalid roll') {
      alert('Please enter a valid roll!');
    } else if (error === 'Game Over') {
      alert('This game is over! Refresh to score a new game');
    }
  }
});
