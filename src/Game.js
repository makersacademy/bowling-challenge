/* globals Frame */
function Game(frame) {
  'use strict';
  var _frames = [];
  var firstFrameRoll, currentRollIndex = 0;

  Game.prototype.totalScore = function(){
   return _frames.last().getScore();
  };

  Game.prototype.frameLength = function() {
    return _frames.length;
  };

  Game.prototype.roll = function(pins) {
    currentRollIndex++;
    if (currentRollIndex % 2 !== 0) {  // first roll of frame
      firstFrameRoll = pins;
      checkStrike();
    } else {   // second roll of frame
      checkExceptions(firstFrameRoll, pins);
      frame = new Frame(firstFrameRoll, pins);
      addFrame(frame);
    }

    function checkStrike() {
      if (firstFrameRoll === 10) {
        frame = new Frame(pins);
        addFrame(frame);
      }
    }
  };

  function addFrame(frame) {
    _frames.push(frame);
    currentRollIndex++;
  }

  function checkExceptions(roll1,roll2) {
    if (isError(roll1) || isError(roll2)) {
      var error = 'rolls are not within range or not numbers';
      throw new Error(error);
    }
    if ((roll1 + roll2) > 10) {
      throw new Error("frame can't exceed 10");
    }

    function isError(number) {
      return (typeof(number) !== "number" || number < 0 || number > 10)
    }
  }

  if (!Array.prototype.last){
    Array.prototype.last = function(){
      return this[this.length - 1];
    };
  }
}