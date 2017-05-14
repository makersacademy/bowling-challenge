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
  game.cachedScore = game.totalScore;
  $('#score' + i).text(game.totalScore);
  console.log("OH REALLY?")
};

function endWithStrike() {
  game.spare = undefined;
  $('#frame' + i + '-2').text('X');
  $('#score' + i).text(" ");
  console.log("Here?")
};

function endWithTwoStrikes() {
  $('#frame' + i + '-2').text('X');
  $('#frame' + (i + 1) + '-2').text('X');
  $('#score' + i).text(" ");
  console.log("HereTWO?")
};

function finalStrikeScore(index) {
  console.log(game.cachedScore);
  game.cachedScore += 10 + Number(game.frames[index].score[0]) + Number(game.frames[index].score[1]);
  $('#score8').text(game.cachedScore);
}
