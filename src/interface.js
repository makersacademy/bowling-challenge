var game = new Game();

$('.bowl-number').on('click', function() {
  game.bowl($(this).val())
});

function updateScores() {
  checkForSpare();
  for (i = 0; i < game.frames.length; i++) {
    if (game.frames[i].isSpare()) {
      spareLogic();
      console.log(game.totalScore)
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
  console.log(game.cachedScore)
};

function updatePartialBowl(num) {
  $('#frame' + game.frames.length + '-1').text(num);
  if (game.spare) { spareUpdate(num) }
}

function spareUpdate(num) {
  var spareUpdate = Number(game.cachedScore) + Number(num);
  console.log(num)
  console.log(game.cachedScore)
  console.log(spareUpdate);
  var index = game.frames.length - 1
  $('#score' + index).text(spareUpdate);
}

function checkForSpare() {
  var frame = game.frames[game.frames.length-1]
  if (frame.isSpare()) {
    game.spare = frame;
  }
}

function strikeLogic() {
  if (i + 2 === game.frames.length && game.frames[i+1].isStrike()) {
    endWithTwoStrikes();
  } else {
    calculateStrike()
  };
}

function spareLogic() {
  if ( i + 1 === game.frames.length ) {
    endWithSpare()
  } else {
    calculateSpare()
  };
}

function calculateSpare() {
  $('#frame' + i + '-1').text(game.frames[i].score[0]);
  $('#frame' + i + '-2').text('/');
  game.totalScore += game.frames[i].calculate() + game.frames[i + 1].score[0];
  $('#score' + i).text(game.totalScore);
  console.log(game.totalScore);
}

function calculateStrike() {
  $('#frame' + i + '-2').text('X');
  game.totalScore += game.strikeCalc(i);
  console.log(game.strikeCalc(i));
  $('#score' + i).text(game.totalScore);
  console.log(game.totalScore);
}

function calculate() {
  game.totalScore += game.frames[i].calculate()
  $('#frame' + i + '-1').text(game.frames[i].score[0]);
  $('#frame' + i + '-2').text(game.frames[i].score[1]);
  $('#score' + i).text(game.totalScore);
  console.log(game.totalScore);
}

function endWithSpare() {
  $('#frame' + i + '-1').text(game.frames[i].score[0]);
  $('#frame' + i + '-2').text('/');
  $('#score' + i).text("");
  game.totalScore += 10;
};

function endWithStrike() {
  $('#frame' + i + '-2').text('X');
  $('#score' + i).text(" ");
}

function endWithTwoStrikes() {
  $('#frame' + i + '-2').text('X');
  $('#frame' + (i + 1) + '-2').text('X');
  $('#score' + i).text(" ");
}
