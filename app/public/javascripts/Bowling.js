function Bowling() {
  this.score = 0;
  this.lastRoll = 0;
  this.strikeBonus = ['',''];
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
    if (this.bowlingFrames[9][2] !== '' || pins > 10 || pins < 0) {
      throw new Error('invalid roll');
    }
    if (this.checkStrike()) {
      this.bowlingFrames[this.getCurrentFrame()][1] = null;
    }
    for (i = 0; i < 21; i++) {
      if (this.getCurrentRoll() === 0) {
        if (this.getCurrentFrame() === 0) {
          this.bowlingFrames[0][0] = pins;
          this.score += pins;
          this.lastRoll = pins;
          break;
        } else if (this.checkSpare()) {
          this.score += (pins * 2);
          this.bowlingFrames[this.getCurrentFrame()][0] = pins;
          this.lastRoll = pins;
          break;
        } else if (this.bowlingFrames[this.getCurrentFrame()-1][0] !== 10){
          this.score += pins;
          this.bowlingFrames[this.getCurrentFrame()][0] = pins;
          this.lastRoll = pins;
          break;
        } else {
          this.bowlingFrames[this.getCurrentFrame()][this.getCurrentRoll()] = pins;
          this.lastRoll = pins;
          break;
        }
      } else if (this.getCurrentRoll() === 1) {
        if (pins + this.firstRollCurrentFrame() > 10) {
          throw new Error('invalid roll');
        } else if (this.getCurrentFrame() > 0) {
          if (this.bowlingFrames[this.getCurrentFrame()-1][0] === 10) {
            this.score += (pins * 2 + this.firstRollCurrentFrame() * 2);
            this.bowlingFrames[this.getCurrentFrame()][1] = pins;
            this.lastRoll = pins;
            break;
          }
        } else {
          this.score += pins;
          this.bowlingFrames[this.getCurrentFrame()][1] = pins;
          this.lastRoll = pins;
          break;
        }
      } else {
        this.bowlingFrames[9][2] = pins;
        this.lastRoll = pins;
        break;
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

  Bowling.prototype.firstRollCurrentFrame = function () {
    return this.bowlingFrames[this.getCurrentFrame()][0];
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
    if (this.getCurrentFrame() > 0 && this.bowlingFrames[this.getCurrentFrame()-1][0] !== 10) {
      return (this.bowlingFrames[this.getCurrentFrame()-1][0] + this.bowlingFrames[this.getCurrentFrame()-1][1] === 10);
    }
    return false;
  };

  Bowling.prototype.checkStrike = function () {
    return (this.bowlingFrames[this.getCurrentFrame()][0] === 10);
  };
