$(document).ready(function () {
  var game = new Game();
  var frame = new Frame();
  var roll = new Roll();
  var newRoll1;
  var newRoll2;
  var impossibleRoll2;

  updateScoreText();

  $('button').click(function() {
    if(frame.checkRolls() < 2){
      value = $(this).attr('id');
      newRoll1 = roll.getRoll(value);
      showFirstRoll();
      findImpossibleRolls();
      frame.addRoll();
    } else {
      value = $(this).attr('id');
      newRoll2 = roll.getRoll(value);
      frameScoreText();
      showSecondRoll();
      updateScore();
      isGameOver();
      frame.addRoll();
      showButtons();
    };
  });

  function showFirstRoll() {
    if(newRoll1 === '10') {
      $(`#roll${game.getFrameNumber()}`).text("X")
    } else {
      $(`#roll${game.getFrameNumber()}`).text(roll.getRoll(value))
    };
  };

  function showSecondRoll() {
    $(`#secondRoll${game.getFrameNumber()}`).text(roll.getRoll(value))
  };

  function showButtons() {
    if(game.getFrameNumber() === 'Game over!') {
      $('button').hide();
    } else {
      $('button').show();
    };
  };

  function findImpossibleRolls(){
    impossibleRoll2 = frame.getImpossibleRolls(parseInt(newRoll1));
    for(var r = 0; r < impossibleRoll2.length; r++) {
      $(`#${impossibleRoll2[r]}`).hide();
    };
  };

  function updateFrameScore() {
    frame.calculateScore(parseInt(newRoll1), parseInt(newRoll2));
  };

  function updateScore() {
    game.updateTotalScore(frame, parseInt(newRoll1));
    updateScoreText();
  };

  function frameScoreText() {
    updateFrameScore();
    $(`#frame_score${game.getFrameNumber()}`).text(frame.getCurrentScore());
  };

  function updateScoreText() {
    $('#current_score').text(game.getTotalScore());
  };

  function isGameOver() {
    if(game.getFrameNumber() === 'Game over!') {
      $('#frame_number').text(game.getFrameNumber());
    };
  };
});
