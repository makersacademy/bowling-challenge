var game = new Game();

$('.bowl-number').on('click', function() {
  bowl = Number($(this).val())
  game.bowl(bowl);
  if (game.currentFrame) { $('#frame' + game.frames.length + '-1').text(bowl) };
  updateScores();
});

function updateScores() {
  var i = 0;
  var total = 0;
  game.frames.forEach(function(frame) {
    if (frame.isSpare()) {
      $('#frame' + i + '-1').text(frame.score[0]);
      $('#frame' + i + '-2').text('/');
      if (game._calculateBonus(frame, i) !== 0) {
        total += game._calculateFrame(frame, i)
        $('#score' + (i)).text(total);
        i++;
      }
    } else if (frame.isStrike()) {
        console.log('what even')
        $('#frame' + i + '-2').text('X');
        console.log(i);
        console.log('the bonus is', game._calculateBonus(frame, i))
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
