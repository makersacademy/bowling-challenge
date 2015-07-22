function Bowling() {
  this.score = 0;
  this.bowlingFrames = [[null, null],
                        [null, null],
                        [null, null],
                        [null, null],
                        [null, null],
                        [null, null],
                        [null, null],
                        [null, null],
                        [null, null],
                        [null, null, null]];
}

  Bowling.prototype.roll = function (pins) {
    if (this.bowlingFrames[9][2] !== null) {
      throw new Error('invalid roll');
    }
    this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
  };

  Bowling.prototype.getCurrentFrame = function() {
    for (i=0; i < this.bowlingFrames.length; i++){
      if (this.bowlingFrames[9][0] !== null) {
        return 9;
      } else if (this.bowlingFrames[i][1] === null) {
        return i;
      }
    }
  };

  Bowling.prototype.getCurrentRoll = function () {
    if (this.bowlingFrames[8][0] !== 10 & this.bowlingFrames[8][1] !== null) {
      if (this.bowlingFrames[9][0] !== null & this.bowlingFrames[9][1] !== null) {
        return 2;
      } else if (this.bowlingFrames[9][0] === null) {
        return 0;
      } else {
        return 1;
      }
    } else if (this.bowlingFrames[this.getCurrentFrame()][0] === null) {
      return 0;
    } else {
      return 1;
    }
  };

  Bowling.prototype.spareLogic = function () {

  };

  Bowling.prototype.checkSpare = function () {
    if (this.getCurrentFrame() > 0) {
      return (this.bowlingFrames[this.getCurrentFrame()-1][0] + this.bowlingFrames[this.getCurrentFrame()-1][1] === 10);
    }
    return false;
  };

  Bowling.prototype.strikeLogic = function () {

  };

  Bowling.prototype.checkStrike = function () {
    return (this.bowlingFrames[this.getCurrentFrame()][0] === 10);
  };
