function Game () {
  this.scoresheet = [];
  this.frameCount = 1;
  this.rollCount = 1;
  this.score = 0;
  this.end = false;
};

Game.prototype.rollResult = function(pinsKnocked) {
  if(this.frameCount <= 10) {
    if(this.rollCount === 1) {
      this.logRoll1(pinsKnocked);
    } else if(this.rollCount === 2) {
      this.logRoll2(pinsKnocked);
    } else {
      this.logRoll3(pinsKnocked);
    };
  };
};

Game.prototype.logRoll1 = function(pinsKnocked) {
  this.scoresheet[this.frameCount] = [];
  if(this.frameCount < 10) {
    this.scoresheet[this.frameCount]['Bonus'] = null;
  }
  this.score += pinsKnocked;
  this.scoresheet[this.frameCount][this.rollCount] = pinsKnocked;
  this.spareBonus();
  this.rollCount = 2;
  if((pinsKnocked === 10) && (this.frameCount < 10)) {
    this.logRoll2(null);
  };
};

Game.prototype.logRoll2 = function(pinsKnocked) {
  this.scoresheet[this.frameCount][this.rollCount] = pinsKnocked;
  this.score += pinsKnocked;
  this.strikeBonus();
  if(this.frameCount < 10) {
    this.rollCount = 1;
    this.frameCount += 1;
  } else if((this.scoresheet[this.frameCount][1] + this.scoresheet[this.frameCount][2]) >= 10) {
    this.rollCount = 3;
  } else {
    this.scoresheet[this.frameCount][this.rollCount] = null;
    this.end = true;
  };
};

Game.prototype.logRoll3 = function(pinsKnocked) {
  this.scoresheet[this.frameCount][this.rollCount] = pinsKnocked;
  this.score += pinsKnocked
  this.end = true;
};

Game.prototype.spareBonus = function() {
  var currFrame = this.frameCount;
  if((this.frameCount > 1) && ((this.scoresheet[currFrame-1][1] + this.scoresheet[currFrame-1][2] === 10) && (this.scoresheet[currFrame-1][1] < 10))) {
    var bonus = this.scoresheet[currFrame][1];
    this.scoresheet[currFrame-1]['Bonus'] = bonus;
    this.score += bonus;
  };
};

Game.prototype.strikeBonus = function() {
  var currFrame = this.frameCount;
  if((this.frameCount > 2) && (this.scoresheet[currFrame-2][1] === 10) && (this.scoresheet[currFrame-1][1] === 10)) {
    var bonus = this.scoresheet[currFrame-1][1] + this.scoresheet[currFrame][1];
    this.scoresheet[currFrame-2]['Bonus'] = bonus;
    this.score += bonus;
  } else if((this.frameCount > 1) && (this.scoresheet[currFrame-1][1] === 10) && (this.scoresheet[currFrame][1] < 10)) {
    var bonus = this.scoresheet[currFrame][1] + this.scoresheet[currFrame][2];
    this.scoresheet[currFrame-1]['Bonus'] = bonus;
    this.score += bonus;
  };
  if(this.frameCount === 10) {
    this.tenthFrameStrikeBonus();
  };
};

Game.prototype.tenthFrameStrikeBonus = function() {
  var currFrame = this.frameCount;
  if((this.scoresheet[currFrame-1][1] === 10)) {
    var bonus = this.scoresheet[currFrame][1] + this.scoresheet[currFrame][2];
    this.scoresheet[currFrame-1]['Bonus'] = bonus;
    this.score += bonus;
  };
};