var game = new Game();

$('.bowl-number').on('click', function() {
  bowl = Number($(this).val())
  game.bowl(bowl);
  updateScores();
  if (game.finalFrame.score.length > 0) {
    updateFinalFrame(bowl);
  } else if (game.currentFrame !== null) {
    $('#frame' + game.frames.length + '-1').text(bowl);
  };
  toggleOptions(bowl);
});

function updateScores() {
  var i = 0;
  var total = 0;
  game.frames.forEach(function(frame) {
    if (frame.isSpare()) {
      $('#frame' + i + '-1').text(frame.score[0]);
      $('#frame' + i + '-2').text('/');
      if (game._calculateBonus(frame, i) !== null) {
        total += game._calculateFrame(frame, i);
        $('#score' + (i)).text(total);
      };
    } else if (frame.isStrike()) {
        $('#frame' + i + '-2').text('X');
        if (game._calculateBonus(frame, i) !== null) {
          total += game._calculateFrame(frame, i)
          $('#score' + (i)).text(total);
        };
    } else {
      $('#frame' + i + '-1').text(frame.score[0]);
      $('#frame' + i + '-2').text(frame.score[1]);
      total += game._calculateFrame(frame, i - 1)
      $('#score' + (i)).text(total);
    };
    i++;
  });
};

function updateFinalFrame(bowl) {
  var frame = game.finalFrame;
  var index = frame.score.length;
  for (i = 1; i <= frame.score.length; i++) {
    if (bowl !== 10) {
      $('#frame9-' + index).text(game.storedBowl);
    } else {
      $('#frame9-' + index).text('X');
    };
  };
  if (frame.score[0] + frame.score[1] === 10) {
    $('#frame9-2').text('/');
  };
  if (frame.isEnded()) {
    $('#score9').text(game.totalScore);
    disableOptions(11);
  };
  game.storedBowl = null;
  for (i = 1; i <= frame.score.length; i++) {
    if ($('#frame9-' + i).text() == 10) {
      ($('#frame9-' + i).text('X'));
    };
  };
  finalChecks();
};

function finalChecks() {
  if (game.frames[7].isStrike() && game.frames[8].isStrike()) {
    game.frames[7].total = game.frames[7].total || $('#score7').text();
    $('#score7').text(game.frames[7].total);
  };
  if (game.frames[8].isStrike() && game.finalFrame.score.length === 2) {
    var bonus = game.finalFrame.score[0] + game.finalFrame.score[1] + 10;
    var currentTotal = Number($('#score7').text());
    game.frames[8].total = game.frames[8].total || currentTotal + bonus;
    $('#score8').text(game.frames[8].total);
  };
};

function toggleOptions(choice) {
  if (game.finalFrame.score.length === 2 && !game.finalFrame.isEnded()) {
    enableOptions();
  } else if (game.currentFrame === null) {
    enableOptions();
  } else if (choice !== 10) {
    disableOptions(choice);
  };
};

function disableOptions(choice) {
  var i = 11 - choice;
  for (; i <= 10; i++) { $('#' + i).attr("disabled", true); };
};

function enableOptions() {
  $('.bowl-number').attr("disabled", false);
};
