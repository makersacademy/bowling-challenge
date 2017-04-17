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

  Bowling.prototype.bowl = function(val1,val2,val3) {
    this.checkScores(val1,val2);
    this.frames[this.frameCount][0] = val1;
    this.frames[this.frameCount][1] = val2;
    if(this.isTenthFrame() == true){
      this.tenthFrameBowl(val1,val2,val3)
    }
    else {
      this.updateScore(val1,val2);
      this.updateFrame();
    };
  };

  Bowling.prototype.tenthFrameBowl = function(val1,val2,val3) {
    this.frames[this.frameCount][0] = val1;
    this.frames[this.frameCount][1] = val2;
    this.frames[this.frameCount][2] = val3;
    this.updateScoreTenth(val1,val2);
    if(this.finalRoll()){this.score += val3};
    return "game over";
  };

  Bowling.prototype.finalRoll = function() {
    if(this.frames[10][0] == 10 || this.frames[10][0] + this.frames[10][1] == 10){
      return true;
    };
  };

  Bowling.prototype.isTenthFrame = function() {
    if(this.frameCount == 10){return true};
  }

  Bowling.prototype.updateScoreTenth = function(val1,val2) {
    if(this.isStrike() == true && val1 == 10){
      var orig = this.frames[this.frameCount - 1][0];
      this.frames[this.frameCount - 1][0] += val1 * 2;
      this.score += this.frames[this.frameCount - 1][0] - orig;
      this.score += val1 + val2;
    }
    else if(this.isSpare()){
      this.score += val1 + val2;
      this.updateScore(val1,val2);
    }
    else{
      this.updateScore(val1,val2);
    };
  }
  Bowling.prototype.updateScore = function(val1,val2) {
    if(this.isStrike() == true){
      this.frames[this.frameCount - 1][0] += (val1 + val2) * 2;
      this.score += this.frames[this.frameCount - 1][0]
    }
    else if(this.isSpare() == true){
      this.frames[this.frameCount - 1][1] += (val1 * 2);
      this.score += this.frames[this.frameCount - 1][1] + val2;
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

  Bowling.prototype.checkScores = function(val1,val2) {
    if(val1 + val2 > 10){throw "frame score cannot exceed 10"};
  };
