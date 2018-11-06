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
      frameScore();
      showSecondRoll();
      updateScore();
      updateFrameText();
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
    if(frameScore() === '10') {
      $(`#secondRoll${game.getFrameNumber()}`).text('/')
    } else {
      $(`#secondRoll${game.getFrameNumber()}`).text(roll.getRoll(value))
    };
  };

  function showButtons() {
    if(game.getFrameNumber() === 'Game over!') {
      $('button').hide();
    } else {
      $('button').show();
    };
  };

  function findImpossibleRolls(){
      impossibleRoll2 = frame.impossibleRolls(parseInt(newRoll1));
      for(var r = 0; r < impossibleRoll2.length; r++) {
      $(`#${impossibleRoll2[r]}`).hide();
    };
  };

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
    $(`#frame_score${game.getFrameNumber()}`).text(frame.getCurrentScore());
  };

  function updateScoreText() {
    $('#current_score').text(game.getTotalScore());
  };

  function updateFrameText() {
    if(game.getFrameNumber() === 'Game over!') {
      $('#frame_number').text(game.getFrameNumber());
    };
  };
});
