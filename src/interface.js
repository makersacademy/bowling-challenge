$( document ).ready(function() {

  var game = new Game();

  var rollValueInput = $('#rollValue');
  var submitButton = $('#enterRollValue');

  $('form').submit(false);
  rollValueInput.focus();

  submitButton.on('click', function() {
    updateRollScores();
    printRunningTotals(game._frames);
    resetInputField();
  })

  var updateRollScores = function() {
    var rollValue = parseInt(rollValueInput.val());
    game.addRoll(rollValue);

    var frame = game._lastFrame();
    var frameIndex = game.numberOfFrames() - 1;

    if (frameIndex < 9) {
      printRegularFrameScores(frame, frameIndex, rollValue);
    }
    else {
      printFrameTenScores(frame, frameIndex, rollValue);
    }
  }

  var printRegularFrameScores = function(frame, frameIndex, rollValue) {
    if (frame.isOngoing()) {
      $('.rollOne:eq(' + frameIndex + ') p').text(subStrikesAndGutterballs(rollValue))
    }
    else {
      if (frame.isSpare()) {
        $('.rollTwo:eq(' + frameIndex + ') p').text('/');
      } else {
        $('.rollTwo:eq(' + frameIndex + ') p').text(subStrikesAndGutterballs(rollValue));
      }
    }
  }

  var printFrameTenScores = function(frame, frameIndex, rollValue) {
    if (frame.secondRoll === null) {
      $('.rollOneFrameTen p').text(subStrikesAndGutterballs(rollValue));
    }
    else if (frame.thirdRoll === null) {
      if (frame.isSpare()) {
        $('.rollTwoFrameTen p').text('/');
      }
      else {
        $('.rollTwoFrameTen p').text(subStrikesAndGutterballs(rollValue));
      }
    }
    else if (frame.firstRoll + frame.secondRoll >= 10) {
      $('.rollThreeFrameTen p').text(subStrikesAndGutterballs(rollValue));
    }
  }

  var printRunningTotals = function(frames) {
    frames.forEach(function(frame, frameIndex) {
      if (frame.bonusRollsRequired() === 0 && !frame.isOngoing()) {
        $('.runningTotal:eq(' + frameIndex + ') p').text(frame.runningTotal())
      }
    });
  }

  var subStrikesAndGutterballs = function(rollValue) {
    return String(rollValue).replace('10', 'X').replace('0', '-');
  }

  var resetInputField = function() {
    rollValueInput.val('');
    rollValueInput.focus();
  }
});
