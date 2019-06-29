function Scorecard() {
  this.nextFrame = 1;
  this.nextRoll = 1;
  this.frame1 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame2 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame3 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame4 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame5 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame6 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame7 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame8 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame9 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreBonus: 0
  };
  this.frame10 = {
    scoreRoll1: 0,
    scoreRoll2: 0,
    scoreRoll3: 0
  };
  this.frames = [this.frame1, this.frame2, this.frame3, this.frame4, this.frame5, this.frame6, this.frame7, this.frame8, this.frame9, this.frame10];
}

Scorecard.prototype.updateScore = function(num) {
  if (this.nextRoll === 1 && num === 10) {
    this.frames[this.nextFrame - 1].scoreRoll1 = 10;
    this.nextFrame += 1;
    this.nextRoll = 1;
  }
  else if(this.nextRoll === 1) {
    this.frames[this.nextFrame -1].scoreRoll1 = num;
    this.nextRoll = 2;
  }
  else {
    this.frames[this.nextFrame -1].scoreRoll2 = num;
    this.nextRoll = 1;
  }
};

Scorecard.prototype.getRunningTotal = function() {
  return this.frame1.scoreRoll1 + this.frame1.scoreRoll2;
};

