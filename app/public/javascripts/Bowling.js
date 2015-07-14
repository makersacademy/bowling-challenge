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
                        [null, null]];

  Bowling.prototype.roll = function (pins) {
    if(pins > 10 || pins < 0) {
      throw new Error("invalid roll");
    }
    if(this.bowlingFrames[this.getCurrentFrame()][0]===10) {
      this.bowlingFrames[this.getCurrentFrame()][1] = 0;
    }
    for (i = 0; i < this.bowlingFrames.length; i++) {
      if (this.bowlingFrames[i][0] === null) {
        this.bowlingFrames[i][0] = pins;
        if (this.checkSpare) {
          this.score += pins;
        }
        break;
      }
      else if (this.bowlingFrames[i][1] === null) {
        if((this.bowlingFrames[i][0] + pins) > 10) {
          throw new Error("invalid roll");
        }
        this.bowlingFrames[i][1] = pins;
        if (this.checkStrike) {
          this.score += this.bowlingFrames[this.getCurrentFrame()][0];
          this.score += this.bowlingFrames[this.getCurrentFrame()][1];
        }
        break;
      }
    }
    this.score += pins;
  };

  Bowling.prototype.checkSpare = function () {
    if (this.getCurrentFrame > 0) {
      return (this.bowlingFrames[this.getCurrentFrame()-1][0] + this.bowlingFrames[this.getCurrentFrame()-1][1] === 10);
    }
    return false;
  };

  Bowling.prototype.checkStrike = function () {
    return (this.bowlingFrames[this.getCurrentFrame()][0] === 10);
  };

  Bowling.prototype.getCurrentFrame = function() {
  for (i=0; i < this.bowlingFrames.length; i++){
    if (this.bowlingFrames[i][1] === null) {
      return i;
    }
  }
};

}
