'use strict';

$(document).ready(function () {

  var bowlingGame = new BowlingGame();
  var allFramesPlayed = false;

  $('#start_game').on('click', function () {
    startGame();
  });

  $('#calculate-game-score').on('click', function () {
    if (allFramesPlayed) {
      $('#total-score').text(bowlingGame.getTotalScore());
    }
    console.log('0');
    $('#total-score').val('nil');
  });

  $('#reset-game').on('click', function () {
    resetGame();
  });


  function startGame() {
    //create empty frames
    for(var i = 0; i < bowlingGame.MAX_FRAMES; i++) {
      bowlingGame.addFrame(new Frame());
    }
    //fill in the random balls throw values for each frame
    while (!allFramesPlayed) {
      bowlingGame._frames.forEach(function(frame) {
        frame.addBall(new Ball());

      })

      // display each frame ball throws values

      return;
    }
  }

  function resetGame() {
    // clear all ball throws values from the UI
    $('input').val('');
    // clear total score
    $('#total-score').val('');
    // delete all frame instances and ball instances
    for(var i = 0; i < bowlingGame.MAX_FRAMES; i++) {
      bowlingGame._frames[i] = null;
      delete bowlingGame._frames[i];
    }
    return;
  }

})
