function Game () {
  this.scoresheet = [];
  this.frameCount = 1;
  this.rollCount = 1;
  this.score = 0;
};

Game.prototype.rollResult = function(pinsKnocked) {
  if(this.frameCount <= 10) {
    if(this.rollCount === 1) {
      this.logRoll1(pinsKnocked);
    } else if(this.rollCount === 2) {
      this.logRoll2(pinsKnocked);
    };
  };
};

Game.prototype.logRoll1 = function(pinsKnocked) {
  this.scoresheet['Frame ' + this.frameCount] = [];
  this.score += pinsKnocked;
  if(pinsKnocked < 10) {
    this.scoresheet['Frame ' + this.frameCount]['Roll 1'] = pinsKnocked;
    this.rollCount = 2;
  } else {
    this.scoresheet['Frame ' + this.frameCount]['Roll 1'] = null;
    this.logRoll2(pinsKnocked);
  }
};

Game.prototype.logRoll2 = function(pinsKnocked) {
  this.scoresheet['Frame ' + this.frameCount]['Roll 2'] = pinsKnocked;
  this.score += pinsKnocked;
  this.prevFrameBonus();
  this.rollCount = 1;
  this.frameCount += 1;
};

Game.prototype.prevFrameBonus = function() {
  if(this.frameCount > 1) {
    if(this.scoresheet['Frame ' + (this.frameCount - 1)]['Roll 2'] === 10) {
      var bonus = this.scoresheet['Frame ' + this.frameCount]['Roll 1'] + this.scoresheet['Frame ' + this.frameCount]['Roll 2'];
      this.scoresheet['Frame ' + (this.frameCount - 1)]['Bonus'] = bonus;
    } else {
      this.scoresheet['Frame ' + (this.frameCount - 1)]['Bonus'] = 0;
    };
  };
};