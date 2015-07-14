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
                        [null, null, null],
                        [null]];

  Bowling.prototype.roll = function (pins) {
    if(pins > 10 || pins < 0) {
      throw new Error("invalid roll");
    }
    if(this.checkStrike()) {
      this.bowlingFrames[this.getCurrentFrame()][1] = 0;
    }
    for (i = 0; i < this.bowlingFrames.length; i++) {
      // if(this.checkTenthFrame()){
      //   if (this.bowlingFrames[9][0] === null) {
      //     if (this.bowlingFrames[this.getCurrentFrame()-1][0] === 10) {
      //       this.score += this.bowlingFrames[this.getCurrentFrame()-1][1];
      //     }
      //   } else if (this.bowlingFrames[9][1] === null) {
      //     if (this.bowlingFrames[this.getCurrentFrame()-1][0] === 10) {
      //       this.score += this.bowlingFrames[this.getCurrentFrame()][0];
      //     }
      //   } else if (this.bowlingFrames[9][2] === null) {
      //     if (this.bowlingFrames[9][0]+this.bowlingFrames[9][1] === 10) {
      //       this.score += pins;
      //       return 'Game over';
      //     } else {
      //       this.bowlingFrames[9][2] = 0;
      //       return 'Game over';
      //     }
      //   }
      // }
      if (this.bowlingFrames[i][0] === null) {
        this.bowlingFrames[i][0] = pins;
        if (this.checkSpare()) {
          this.score += pins;
        }
        if (this.getCurrentFrame() > 1) {
          if (this.bowlingFrames[this.getCurrentFrame()-2][0] === 10) {
            this.score += this.bowlingFrames[this.getCurrentFrame()-1][1];
          }
        }
        break;
      }
      else if (this.bowlingFrames[i][1] === null) {
        if((this.bowlingFrames[i][0] + pins) > 10) {
          throw new Error("invalid roll");
        }
        this.bowlingFrames[i][1] = pins;
        if (this.bowlingFrames[this.getCurrentFrame()-1][0] === 10) {
          this.score += this.bowlingFrames[this.getCurrentFrame()][0];
        }
        break;
      }
    }
    this.score += pins;
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

  Bowling.prototype.getCurrentFrame = function() {
    for (i=0; i < this.bowlingFrames.length; i++){
      if (this.bowlingFrames[i][1] === null) {
        return i;
      }
    }
  };

  Bowling.prototype.checkTenthFrame = function () {
    return(this.getCurrentFrame() === 9);
  };

  // Bowling.prototype.isFinalRoll = function () {
  //   if (this.bowlingFrames[9][2] !== null) {
  //     this.roll(0);
  //   }
  //   else if (this.bowlingFrames[9][1] !== null) {
  //     this.roll(0);
  //   }
  // };


}
