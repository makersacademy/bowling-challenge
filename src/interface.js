$(document).ready(function () {
  var game = new Game();
  var frame = new Frame();
  var roll = new Roll();
  var newRoll1;
  var newRoll2;

  updateScoreText();
  frameScoreText();
  updateFrameText();

  $('button').click(function() {
    if(frame.checkRolls() < 2){
      value = $(this).attr('value');
      newRoll1 = roll.getRoll(value);
      frame.addRoll();
    } else {
      value = $(this).attr('value');
      newRoll2 = roll.getRoll(value);
      frameScore();
      updateScore();
      updateFrameText();
      frame.addRoll();
    };
  });

  function updateFrameText() {
    $('#frame_number').text(game.frameNumber());
  }

  function frameScore() {
    frame.calculateScore(parseInt(newRoll1), parseInt(newRoll2));
    frameScoreText();
  };

  function updateScore() {
    currentScore = frame.getCurrentScore();
    game.updateTotalScore(currentScore);
    updateScoreText();
  };

  function frameScoreText() {
    $('#frame_score').text(frame.getCurrentScore());
  };

  function updateScoreText() {
    $('#current_score').text(game.getTotalScore());
  };

});
