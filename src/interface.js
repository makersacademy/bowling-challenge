$( document ).ready(function() {
  $('form').submit(false);
  var game = new Game();
  var rollValueTextInput = $('#rollValue');
  var enterRollValueButton = $('#enterRollValue');
  var totalScoreDisplay = $('#totalScore');
  rollValueTextInput.focus();
  enterRollValueButton.on('click', function() {
    var rollValue = parseInt(rollValueTextInput.val());
    game.addRoll(rollValue);
    var frame = game._lastFrame();
    var frameIndex = game.numberOfFrames() - 1;
    if (frameIndex < 9) {
      if (frame.isOngoing()) {
        $('.rollOne:eq(' + frameIndex + ') p').text(rollValue)
      }
      else {
        if (frame.isStrike()) {
          $('.rollTwo:eq(' + frameIndex + ') p').text('X');
        } else if (frame.isSpare()) {
          $('.rollTwo:eq(' + frameIndex + ') p').text('/');
        } else {
          $('.rollTwo:eq(' + frameIndex + ') p').text(rollValue);
        }
      }
    }
    else {
      if (frame.secondRoll === null) {
        $('.rollOneFrameTen p').text(String(rollValue).replace(10, 'X'));
      }
      else if (frame.thirdRoll === null) {
        if (frame.isSpare()) {
          $('.rollTwoFrameTen p').text('/');
        }
        else {
          $('.rollTwoFrameTen p').text(String(rollValue).replace(10, 'X'));
        }
      }
      else if (frame.firstRoll + frame.secondRoll >= 10) {
        $('.rollThreeFrameTen p').text(String(rollValue).replace(10, 'X'));
      }
    }
    $('.runningTotal:eq(' + frameIndex + ') p').text(game.totalScore())
    totalScoreDisplay.text(game.totalScore());
    rollValueTextInput.val('');
    rollValueTextInput.focus();
  })
});
