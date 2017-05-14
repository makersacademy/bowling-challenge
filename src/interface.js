var game = new Game();

$('.bowl-number').on('click', function() {
  game.bowl($(this).val())
  console.log(game.savedBowl);
  console.log(game.frames.length);
});

function updateScores() {
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
};



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
  $('#score' + i).text(" ");
}

function endWithStrike() {
  $('#frame' + i + '-2').text('X');
  $('#score' + i).text(" ");
}

function endWithTwoStrikes() {
  $('#frame' + i + '-2').text('X');
  $('#frame' + (i + 1) + '-2').text('X');
  $('#score' + i).text(" ");
}
