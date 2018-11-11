$(document).ready(function() {
  game = new Game();
  updateScore();

  $('button').click(function() {
    roll = ($(this).text());
    if (roll === "Start Again") {
      location.reload();
    } else {
      game.recordRoll(parseInt(roll));
      updateScore();
      displayInFrame(game._currentFrame);
    };
  });

  function updateScore() {
    $('#score').text(game._totalScore);
  };

  function displayInFrame(frame) {
    if (game._rollsThisFrame.length == 0) {frame-- };
    if ($('#f' + frame + 'r1').text() == '') {
      roll = 1;
    } else if (frame == 10 && $('#f' + frame + 'r2').text() != '') {
      roll = 3;
    }else {
      roll = 2;
    };
    $('#f' + frame + 'r' + roll).text(game._allRolls[game._allRolls.length - 1]);
  };

});
