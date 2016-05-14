
/* globals Frame */
function Game(frame) {
  'use strict';
  var _frames = [];
  var firstFrameRoll, currentRollIndex = 0;

  Game.prototype.totalScore = function(){
   return _frames.last().getScore();
  };

  if (!Array.prototype.last){
    Array.prototype.last = function(){
      return this[this.length - 1];
    };
  }

  Game.prototype.frameLength = function() {
    return _frames.length;
  }



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

    function addFrame(frame) {
      _frames.push(frame);
      currentRollIndex++;
    }

    function checkStrike() {
      if (firstFrameRoll === 10) {
        frame = new Frame(pins);
        addFrame(frame);
      }
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
  };
}



 // Game.prototype.begin = function() {
  //   for(var i=0;i<21;i++) {
  //     _rolls[i] = 0;
  //   }
  // };


  // Game.prototype.calculateFrameScore = function(currentRoll){
  //   var frameScore = 0;
  //   var frameIndex = Math.round(currentRoll/2)
  //    if (isSpare(frameIndex)) {
  //     this._frames[frameIndex] = 'spare';
  //   } else {
  //     this._frames[frameIndex] = _rolls[currentRoll] + _rolls[currentRoll-1]
  //   }
  //   if (this._frames[frameIndex-1] === 'spare') {
  //     this._frames[frameIndex-1] = 10 + _rolls[currentRoll];
  //     calculateCumulative(frameIndex-1);
  //   }

  // };

  // function isStrike(frame, pins) {
  //   return pins === 10;
  // }

  // function isSpare(frameIndex) {
  //   return (_rolls[frameIndex] + _rolls[frameIndex+1]) === 10;
  // }

  // function isregularFrame(frameIndex) {
  //   return !(isStrike(frameIndex) || isSpare(frameIndex));
  // }

  // function calculateCumulative(index) {
  //   if (index > 0) {
  //     _frames[index] += frames[index-1];
  //   }
  // }