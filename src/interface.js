$('document').ready(function runDocument() {
  let scorecard = new Scorecard(Frame, FinalFrame);

  refreshPoints = function refreshPoints() {
    for (let i = 0; i < 10; i += 1) {
      const frame = scorecard.frames[i];
      for (let j = 0; j < frame.rolls.length; j += 1) {
        if (frame.rolls[j] === 10) {
          $('#frame' + i + 'roll' + j).text('X');
        } else if (frame.rolls[j] + frame.rolls[j - 1] === 10
            && frame.rolls[j - 1] + frame.rolls[j - 2] !== 10) {
          $('#frame' + i + 'roll' + j).text('/');
        } else {
          $('#frame' + i + 'roll' + j).text(frame.rolls[j]);
        }
      }
    }
  };

  refreshGameOver = function refreshGameOver() {
    if (scorecard.gameOver === true) {
      $('#gameCompleted').text('Game over, you scored '
      + scorecard.totalScore() + '!');
    }
  };

  refreshScores = function refreshScores() {
    for (let i = 0; i < scorecard.currentFrame; i += 1) {
      $('#total' + i).text(scorecard.calculateFrameScore(i));
    }
    if (scorecard.gameOver === true) {
      $('#total9').text(scorecard.calculateFrameScore(9));
    }
    $('#gameCompleted').text('Total points: '
    + scorecard.totalScore());
    refreshGameOver();
    refreshPoints();
  };

  refreshScores();

  $('#resetGame').click(function resetGame() {
    scorecard = new Scorecard(Frame, FinalFrame);
    for (let i = 0; i < 10; i += 1) {
      $('#total' + i).text(' ');
    }
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 2; j += 1) {
        $('#frame' + i + 'roll' + j).text(' ');
      }
    }
    for (let i = 0; i < 3; i += 1) {
      $('#frame9roll' + i).text(' ');
    }
    for (let i = 0; i < 11; i += 1) {
      $('#scored' + i).prop('disabled', false);
    }
  });

  for (let i = 0; i < 11; i += 1) {
    $('#scored' + i).click(function score() {
      scorecard.roll(i);
      refreshScores();
      disableButtons();
    });
  };

  disableButtons = function disableButtons() {
    if (scorecard.currentFrame === 9) {
      disableFinalButtons();
    } else {
      const currentFrame = scorecard.frames[scorecard.currentFrame];
      const minimum = (currentFrame.rolls[0] || 0);
      for (let i = 0; i < 11; i += 1) {
        if (i > 10 - minimum) {
          $('#scored' + i).prop('disabled', true);
        } else {
          $('#scored' + i).prop('disabled', false);
        }
      }
    }
  };

  disableFinalButtons = function disableFinalButtons() {
    for (let i = 0; i < 11; i += 1) {
      if (i > scorecard.frames[9].remaining) {
        $('#scored' + i).prop('disabled', true);
      } else {
        $('#scored' + i).prop('disabled', false);
      }
    }
  };
});
