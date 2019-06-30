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

Scorecard.prototype.updateScore = function(numOfPins) {
  this.updateFrame(numOfPins);
  this.updateNextTurn();
  for (i = 0; i < 9; i++) {
    this.frames[i].scoreBonus = this.calculateBonusForFrame(i+1);
  }
};

Scorecard.prototype.getRunningTotal = function() {
  var runningTotal = 0;
  for (i = 0; i < 9; i++) {
    var frame = this.frames[i];
    runningTotal = runningTotal + frame.scoreRoll1 + frame.scoreRoll2 + frame.scoreBonus;
  }
  var frame = this.frames[9];
  runningTotal = runningTotal + frame.scoreRoll1 + frame.scoreRoll2 + frame.scoreRoll3;
  return runningTotal;
};

Scorecard.prototype.getFrameNumber = function() {
  return this.nextFrame;
};

Scorecard.prototype.getRollNumber = function() {
  return this.nextRoll;
};

Scorecard.prototype.isStrike = function(frame) {
  return ((frame.scoreRoll1 === 10) ? true : false );
};

Scorecard.prototype.isSpare = function(frame) {
  return ( (frame.scoreRoll1 < 10) && (frame.scoreRoll1 + frame.scoreRoll2 === 10) ) ? true : false ;
};

Scorecard.prototype.calculateBonusForFrame = function(frameNum) {
  var thisFrame = this.frames[frameNum - 1];
  var nextFrame = this.frames[frameNum];
  var bonus = 0;
  if ((this.isStrike(thisFrame)) && (this.isStrike(nextFrame))) {
    if (frameNum < 9) {
      var subsequentFrame = this.frames[frameNum + 1];
      bonus = nextFrame.scoreRoll1 + subsequentFrame.scoreRoll1;
    }
    else {
      bonus = nextFrame.scoreRoll1 + nextFrame.scoreRoll2;
    }
  }
  else if (this.isStrike(thisFrame)) {
    bonus = nextFrame.scoreRoll1 + nextFrame.scoreRoll2;
  }
  else if (this.isSpare(thisFrame)) {
    bonus = nextFrame.scoreRoll1;
  }
  return bonus;
};

Scorecard.prototype.updateFrame = function(numOfPins) {
  var thisFrame = this.frames[(this.getFrameNumber() - 1)];
  if (this.getRollNumber() === 1) {
    thisFrame.scoreRoll1 = numOfPins;
  }
  else if (this.getRollNumber() === 2) {
    thisFrame.scoreRoll2 = numOfPins;
  }
  else {
    thisFrame.scoreRoll3 = numOfPins;
  }
};

Scorecard.prototype.updateNextTurn = function() {
  thisFrame = this.frames[this.getFrameNumber() - 1];
  if ( this.getFrameNumber() === 10) {
    this.updateNextTurnForLastFrame(thisFrame);
  }
  else {
    this.updateNextTurnForNormalFrame(thisFrame);
  }
};

Scorecard.prototype.updateNextTurnForLastFrame = function(thisFrame) {
  if ( this.isStrike(thisFrame) && this.getRollNumber() === 2 ) {
    this.nextRoll = 3;
  }
  else if ( this.isSpare(thisFrame) && this.getRollNumber() === 2 ) {
    this.nextRoll = 3;
  }
  else {
    this.nextRoll = 2;
  }
};

Scorecard.prototype.updateNextTurnForNormalFrame = function(thisFrame) {
  if ( this.isStrike(thisFrame) ) {
    this.nextFrame += 1;
    this.nextRoll = 1;
  }
  else if ( this.getRollNumber() === 1 ) {
    this.nextRoll = 2;
  }
  else {
    this.nextFrame += 1;
    this.nextRoll = 1;
  }
};
