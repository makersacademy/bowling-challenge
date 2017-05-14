function spareUpdate(num) {
  var spareUpdate = Number(game.cachedScore) + Number(num);
  var index = game.frames.length - 1;
  $('#score' + index).text(spareUpdate);
  game.spare = undefined;
}

function checkForSpare() {
  var frame = game.frames[game.frames.length-1]
  if (frame && frame.isSpare()) {
    game.spare = frame;
  };
};

function calculateSpare() {
  $('#frame' + i + '-1').text(game.frames[i].score[0]);
  $('#frame' + i + '-2').text('/');
  game.totalScore += game.frames[i].calculate() + game.frames[i + 1].score[0];
  $('#score' + i).text(game.totalScore);
}

function spareLogic() {
  if ( i + 1 === game.frames.length ) {
    endWithSpare()
  } else {
    calculateSpare()
  };
};

function endWithSpare() {
  $('#frame' + i + '-1').text(game.frames[i].score[0]);
  $('#frame' + i + '-2').text('/');
  $('#score' + i).text("");
  game.totalScore += 10;
};
