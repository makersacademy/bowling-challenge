'use strict';

$(document).ready(function () {

  var bowlingGame = new BowlingGame();
  var allFramesPlayed = false;

  $('#start-game').on('click', function () {
    startGame();
  });

  $('#calculate-game-score').on('click', function () {
    if (allFramesPlayed) {
      $('#total-score').val(bowlingGame.getTotalScore());
    }
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
    for(var i = 0; i < bowlingGame.MAX_FRAMES - 1; i++) {
      console.log(i, bowlingGame._frames);
      throwBalls(i);
    }
    throwBallsLastFrame();
    // display each frame ball throws values
    for(var i = 0; i < bowlingGame.MAX_FRAMES - 1; i++) {
      displayFrame(i);
    }
    displayLastFrame();
    allFramesPlayed = true;
  }

  function throwBalls(n) {
    if (n > bowlingGame.MAX_FRAMES - 1) {
      throw new TypeError("Cannot play such frame!");
    }
    var frameN = bowlingGame._frames[n];

    frameN.addBall(new Ball());
    frameN.balls[0].roll(frameN.remainingPins);

    if ( frameN.balls[0].getThrow() === 10) {
      return; // this throw was a strike
    }
    else {
      frameN.addBall(new Ball());
      frameN[1].roll(frameN.remainingPins);
    }
  } //end of throwBalls(n)

  function throwBallsLastFrame() {

  } //end of throwBallsLastFrame()

  function displayFrame(n) {
    if (n > bowlingGame.MAX_FRAMES - 1) {
      throw new TypeError("Cannot display such frame!");
    }
    var ballId = '#ball' + n;
    var frameN = bowlingGame._frames[n];
    var firstThrow = frameN._firstThrow();

    if (firstThrow === 10) {
      $(ballId + 1).val('x'); // this throw was a strike
    }
    else {
      $(ballId + 1).val(firstThrow);
      // ball no.2 should exist
      if (frameN.remainingPins === 0) {
        $(ballId + 2).val('/'); // this throw was a spare
      }
      else {
        $(ballId + 2).val(firstThrow.toString());
      }
    }
  } //end of displayFrame(n)

  function displayLastFrame() {
    var lastFrameIndex = bowlingGame.MAX_FRAMES - 1;
    var lastFrame = bowlingGame._frames[lastFrameIndex];
    var ballId = '#ball' + lastFrameIndex;
    var ballThrow;

    for(var i = 1; i < lastFrame.getFrameSize() + 1; i++) {
      ballThrow = lastFrame.balls[i].getThrow();

      if (ballThrow === 10) {
        $(ballId + i).val('x');
      }
      else {
        $(ballId + i).val(ballThrow.toString());
      }
    }
  } // end of displayLastFrame()

  function resetGame() {
    allFramesPlayed = false;
    // clear all ball throws values from the UI
    $('input').val('');
    // clear total score
    $('#total-score').val('');
    // delete all frame instances and ball instances
    for(var i = 0; i < bowlingGame.MAX_FRAMES; i++) {
      for(var j = 0; j < bowlingGame.getFrameSize(); j++) {
        bowlingGame._frames[i][j] = null;
        delete bowlingGame._frames[i][j];
      }
      bowlingGame._frames[i] = null;
      delete bowlingGame._frames[i];
    }
  } // end of resetGame()

})
