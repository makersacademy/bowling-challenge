var game = new Game();

$('.bowl-number').on('click', function() {
  game.bowl($(this).val())
});

$('#calculate').on('click', function() {
  updateScores();
});

function updateScores() {
  checkForSpare();
  for (i = 0; i < game.frames.length; i++) {
    if (i === 9) {
      finalFrameLogic();
    } else if (game.frames[i].isSpare()) {
      spareLogic();
    } else if (game.frames[i].isStrike() && i + 1 === game.frames.length) {
      endWithStrike();
      break;
    } else if (game.frames[i].isStrike()) {
      strikeLogic();
    } else {
      calculate();
    };
  };
  game.cachedScore = game.totalScore;
  if (game.frames[9] && game.frames[9].isEnded()) { gameOver() };
};

function gameOver() {
  $('.bowl-number').hide();
  $('#restart').show();
}

function finalFrameLogic() {
  var frame = game.frames[game.frames.length - 1]
  updateFinalFrame(frame);
  calculateFinalScore(frame);
}

function calculateFinalScore(frame) {
  var finalScore = game.cachedScore;
  frame.score.forEach( function(num) {
      finalScore += num
  });
  $('#score9').text(finalScore);
};

function updateFinalFrame(frame) {
  var i = 1;
  var previousScore = 0;
  frame.score.forEach( function(value) {
    if (value === 10) {
      $('#frame9' + '-' + i).text('X');
    } else if (value + previousScore === 10) {
      $('#frame9' + '-' + i).text('/');
      previousScore = 0;
    } else {
      $('#frame9' + '-' + i).text(value);
      previousScore = value;
    };
    i++;
  });
};

function strikeUpdate() {
  game.cachedScore += 30;
  $('#score7').text(game.cachedScore);
}

function updatePartialBowl(num) {
  $('#frame' + game.frames.length + '-1').text(num);
  if (game.spare) { spareUpdate(num) };
};

function calculate() {
  game.totalScore += game.frames[i].calculate()
  $('#frame' + i + '-1').text(game.frames[i].score[0]);
  $('#frame' + i + '-2').text(game.frames[i].score[1]);
  $('#score' + i).text(game.totalScore);
}
