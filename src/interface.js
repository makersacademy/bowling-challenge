var game = new Game();

$('.bowl-number').on('click', function() {
  game.bowl($(this).val())
});

function updateScores() {
  checkForSpare();
  for (i = 0; i < game.frames.length; i++) {
    if (game.frames[i].isSpare()) {
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
};

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
