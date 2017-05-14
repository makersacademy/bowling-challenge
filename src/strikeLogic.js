function strikeLogic() {
  if (i + 2 === game.frames.length && game.frames[i+1].isStrike()) {
    endWithTwoStrikes();
  } else {
    calculateStrike();
  };
};

function calculateStrike() {
  $('#frame' + i + '-2').text('X');
  game.totalScore += game.strikeCalc(i);
  $('#score' + i).text(game.totalScore);
};

function endWithStrike() {
  game.spare = undefined;
  $('#frame' + i + '-2').text('X');
  $('#score' + i).text(" ");
};

function endWithTwoStrikes() {
  $('#frame' + i + '-2').text('X');
  $('#frame' + (i + 1) + '-2').text('X');
  $('#score' + i).text(" ");
};
