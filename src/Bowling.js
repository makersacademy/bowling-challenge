function Bowling() {
  this.frameCount = 1;
  this.frames = { 1: [0,0],
                  2: [0,0],
                  3: [0,0],
                  4: [0,0],
                  5: [0,0],
                  6: [0,0],
                  7: [0,0],
                  8: [0,0],
                  9: [0,0],
                  10: [0,0,0]
                };
  this.score = 0;
};

  Bowling.prototype.updateFrame = function() {
    this.frameCount++;
  };

  Bowling.prototype.bowl = function(val1,val2) {
    this.frames[this.frameCount][0] = val1;
    this.frames[this.frameCount][1] = val2;
    this.updateScore(val1,val2);
    this.updateFrame();
  };

  Bowling.prototype.tenthFrameBowl = function(val1,val2,val3) {
    this.frames[this.frameCount][0] = val1;
    this.frames[this.frameCount][1] = val2;
    this.frames[this.frameCount][2] = val3;
    this.score += val1 + val2 + val3;
  };

  Bowling.prototype.isTenthFrame = function() {
    if(this.frameCount == 10){return true};
  }

  Bowling.prototype.updateScore = function(val1,val2) {
    if(this.isStrike() == true){
      this.score += (val1 + val2) * 2;
    }
    else if(this.isSpare() == true){
      this.score += (val1 * 2) + val2;
    }
    else{
      this.score += val1 + val2;
    };
  };


  Bowling.prototype.isStrike = function() {
    if(this.frameCount > 1){
      if(this.frames[this.frameCount - 1][0] == 10){return true}
      else{return false};
    };
  };

  Bowling.prototype.isSpare = function() {
    if(this.frameCount > 1){
      if(this.frames[(this.frameCount) - 1][0] + this.frames[(this.frameCount) - 1][1] == 10 && this.frames[(this.frameCount) - 1][1] > 0){
        return true;
      }
      else{return false};
    };
  };
