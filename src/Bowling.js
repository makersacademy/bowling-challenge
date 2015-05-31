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
  this.scoresheet['Frame ' + this.frameCount]['Bonus'] = null;
  this.score += pinsKnocked;
  this.scoresheet['Frame ' + this.frameCount]['Roll 1'] = pinsKnocked;
  this.spareBonus();
  if(pinsKnocked < 10) {
    this.rollCount = 2;
  } else {
    this.logRoll2(null)
  }
};

Game.prototype.logRoll2 = function(pinsKnocked) {
  this.scoresheet['Frame ' + this.frameCount]['Roll 2'] = pinsKnocked;
  this.score += pinsKnocked;
  this.strikeBonus();
  this.rollCount = 1;
  this.frameCount += 1;
};

Game.prototype.spareBonus = function() {
  if(this.frameCount > 1) {
    if((this.scoresheet['Frame ' + (this.frameCount - 1)]['Roll 1'] + this.scoresheet['Frame ' + (this.frameCount - 1)]['Roll 2'] === 10) && (this.scoresheet['Frame ' + (this.frameCount - 1)]['Roll 1'] < 10)) {
      var bonus = this.scoresheet['Frame ' + this.frameCount]['Roll 1'];
      this.scoresheet['Frame ' + (this.frameCount - 1)]['Bonus'] = bonus;
      this.score += bonus;
    };
  };
};

Game.prototype.strikeBonus = function() {
  if(this.frameCount > 1) {
    if(this.scoresheet['Frame ' + (this.frameCount - 1)]['Roll 1'] === 10) {
      var bonus = this.scoresheet['Frame ' + this.frameCount]['Roll 1'] + this.scoresheet['Frame ' + this.frameCount]['Roll 2'];
      this.scoresheet['Frame ' + (this.frameCount - 1)]['Bonus'] = bonus;
      this.score += bonus;
    };
  };
};