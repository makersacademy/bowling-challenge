function Bowling() {
  this.score = 0;
  this.bowlingFrames = [['', ''],
                        ['', ''],
                        ['', ''],
                        ['', ''],
                        ['', ''],
                        ['', ''],
                        ['', ''],
                        ['', ''],
                        ['', ''],
                        ['', '', '']];
}

  Bowling.prototype.roll = function (pins) {
    if (this.bowlingFrames[9][2] !== '') {
      throw new Error('invalid roll');
    }
    if (this.checkStrike()) {
      this.bowlingFrames[this.getCurrentFrame()][1] = null;
    }
    for (i = 0; i < 21; i++) {
      if (this.getCurrentRoll() === 0) {
        if (this.checkSpare()) {
          this.score += (pins * 2);
          this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
        } else if (this.checkStrike() === false){
          this.score += pins;
          this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
        } else {
          this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
        }
      } else if (this.getCurrentRoll() === 1) {
        if (this.checkStrike()) {
          this.score += (pins * 2 + this.bowlingFrames[this.getCurrentFrame()-1][0] * 2);
          this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
        } else {
          this.score += pins;
          this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
        }
      } else {
        return "last roll";
      }
    }
  };

  Bowling.prototype.getCurrentFrame = function() {
    for (i=0; i < this.bowlingFrames.length; i++){
      if (this.bowlingFrames[9][0] !== '') {
        return 9;
      } else if (this.bowlingFrames[i][1] === '') {
        return i;
      }
    }
  };

  Bowling.prototype.getCurrentRoll = function () {
    if (this.bowlingFrames[8][0] !== 10 & this.bowlingFrames[8][1] !== '') {
      if (this.bowlingFrames[9][0] !== '' & this.bowlingFrames[9][1] !== '') {
        return 2;
      } else if (this.bowlingFrames[9][0] === '') {
        return 0;
      } else {
        return 1;
      }
    } else if (this.bowlingFrames[this.getCurrentFrame()][0] === '') {
      return 0;
    } else {
      return 1;
    }
  };

  Bowling.prototype.checkSpare = function () {
    if (this.getCurrentFrame() > 0) {
      return (this.bowlingFrames[this.getCurrentFrame()-1][0] + this.bowlingFrames[this.getCurrentFrame()-1][1] === 10);
    }
    return false;
  };

  Bowling.prototype.checkStrike = function () {
    return (this.bowlingFrames[this.getCurrentFrame()][0] === 10);
  };
