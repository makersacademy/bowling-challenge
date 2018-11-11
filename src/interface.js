$(document).ready(function () {
  var game = new Game();
  var currentFrame = new Frame();
  var previousFrames = [];
  var roll = new Roll();
  var newRoll1;
  var newRoll2;
  var impossibleRoll2;

  updateScoreText();

  $('button').click(function() {
    if(currentFrame.checkRolls() < 2){
      value = $(this).attr('id');
      newRoll1 = roll.getRoll(value);
      showFirstRoll();
      findImpossibleRolls();
      currentFrame.addRoll();
    } else {
      value = $(this).attr('id');
      newRoll2 = roll.getRoll(value);
      addPreviousFrame();
      frameScoreText();
      showSecondRoll();
      updateScore();
      isGameOver();
      currentFrame.addRoll();
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
    score = parseInt(newRoll1) + parseInt(newRoll2);
    if(score === 10){
      $(`#secondRoll${game.getFrameNumber()}`).text('/')
    } else {
      $(`#secondRoll${game.getFrameNumber()}`).text(roll.getRoll(value))
    }
  };

  function showButtons() {
    if(game.getFrameNumber() === 'Game over!') {
      $('button').hide();
    } else {
      $('button').show();
    };
  };

  function addPreviousFrame() {
    previousFrames.push(game.strikeOrSpare(currentFrame));
  };

  function findImpossibleRolls(){
    impossibleRoll2 = currentFrame.getImpossibleRolls(parseInt(newRoll1));
    for(var r = 0; r < impossibleRoll2.length; r++) {
      $(`#${impossibleRoll2[r]}`).hide();
    };
  };

  function updateFrameScore() {
    currentFrame.calculateScore(parseInt(newRoll1), parseInt(newRoll2));
  };

  function updateScore() {
    game.updateTotalScore(currentFrame, parseInt(newRoll1));
    updateScoreText();
  };

  function frameScoreText() {
    updateFrameScore();
    frameNumber = game.getFrameNumber()
    if(previousFrames[previousFrames.length-1] === 'Strike' ){
      $(`#frame_score${frameNumber - 1}`).text(10 + currentFrame.getCurrentScore());
    } else if(previousFrames[previousFrames.length-1] === 'Spare' ){
      $(`#frame_score${frameNumber - 1}`).text(10 + parseInt(newRoll1));
    }
    $(`#frame_score${frameNumber}`).text(currentFrame.getCurrentScore());
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
