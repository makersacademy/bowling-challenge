var game = new Game();

$('.bowl-number').on('click', function() {
  bowl = Number($(this).val())
  console.log(bowl);
  game.bowl(bowl);
  game.currentFrame ? updateFirstBowl(bowl) : updateScores()
});

function updateScores() {
  var i = 0;
  game.frames.forEach(function(frame) {
    $('#frame' + i + '-1').text(frame.score[0]);
    $('#frame' + i + '-2').text(frame.score[1]);
    i++;
  });
  $('#score' + (i - 1)).text(game.totalScore);
};

function updateFirstBowl(bowl) {
  if (game.frames.length >= 9) {
    finalFrameScore(bowl);
  } else {
    $('#frame' + game.frames.length + '-1').text(bowl);
  };
};

function finalFrameScore(bowl) {
  $('#frame9-' + game.finalFrame.score.length).text(bowl);
  if (game.finalFrame.isEnded()) {
    updateScores();
  };
};
