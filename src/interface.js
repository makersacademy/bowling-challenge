var game = new Game();

$('.bowl-number').on('click', function() {
  bowl = Number($(this).val())
  game.bowl(bowl);
  if (game.finalFrame.score.length > 0) {
    updateScores();
    updateFinalFrame(bowl);
  } else {
    if (game.currentFrame) $('#frame' + game.frames.length + '-1').text(bowl);
    updateScores();
  };
});

function updateScores() {
  var i = 0;
  var total = 0;
  game.frames.forEach(function(frame) {
    if (frame.isSpare()) {
      console.log('Going here')
      $('#frame' + i + '-1').text(frame.score[0]);
      $('#frame' + i + '-2').text('/');
      if (game._calculateBonus(frame, i) !== 0) {
        total += game._calculateFrame(frame, i)
        $('#score' + (i)).text(total);
        i++;
      }
    } else if (frame.isStrike()) {
        $('#frame' + i + '-2').text('X');
        if (game._calculateBonus(frame, i) !== 0) {
          total += game._calculateFrame(frame, i)
          $('#score' + (i)).text(total);
        };
        i++;
    } else {
      $('#frame' + i + '-1').text(frame.score[0]);
      $('#frame' + i + '-2').text(frame.score[1]);
      i++;
      total += game._calculateFrame(frame, i - 1)
      $('#score' + (i - 1)).text(total);
    };
  });
};

function updateFinalFrame(bowl) {
  var frame = game.finalFrame;
  var index = game.finalFrame.score.length;
  for (i = 1; i <= game.finalFrame.score.length; i++) {
    if (bowl !== 10) {
      $('#frame9-' + i).text(bowl);
    } else {
      $('#frame9-' + i).text('X');
    };
  };
  if (frame.score[0] + frame.score[1] === 10) {
    $('#frame9-2').text('/');
  };
  if (frame.isEnded()) {
    console.log('Game over!')
    $('#score9').text(game.totalScore);
  }
};

function disableOptions(n) {
  var i = 11 - n;
  for (; i <= 10; i++) {
    $('#' + i).attr("disabled", true);
  }
}

function gameOver() {
  $('.bowl-number').hide();
  $('#restart').show();
}

function enableOptions() {
  $('.bowl-number').attr("disabled", false);
}
