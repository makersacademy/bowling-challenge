function Game(frameConstructor) {
  this.frameArrayGenerator(frameConstructor);
  this.frameIndex = 0;
};

Game.prototype.frameArrayGenerator = function(frameConstructor) {
  this.frameArray = [];
  for (var i = 0; i < 10; i++) {
    this.frameArray[i] = new frameConstructor;
  };
};

Game.prototype.bowl = function() {
  var returnValue;
  if (this.currentFrame().rollsTaken === 0) {
    returnValue = this.currentFrame().firstRoll();
    this.firstBowlUpdate();
  } else {
    returnValue = this.currentFrame().secondRoll();
    this.secondBowlUpdate();
  };

return returnValue
};

Game.prototype.currentFrame = function() {
  var i = this.frameIndex;
  return this.frameArray[i];
};

Game.prototype.oneFramePrevious = function() {
  var i = this.frameIndex;
  return this.frameArray[i-1];
};

Game.prototype.twoFramePrevious = function() {
  var i = this.frameIndex;
  return this.frameArray[i-2];
};

Game.prototype.isPreviousTwoStrikes = function() {
  var i = this.frameIndex;
  if (i < 2) return false;
  return (this.oneFramePrevious().isStrike && this.twoFramePrevious().isStrike)
};

Game.prototype.firstBowlUpdate = function() {
  var i = this.frameIndex
  var rollScore = this.currentFrame().firstRollScore
  if (i > 0) {
    this.oneFramePrevious().spareUpdate(rollScore);
  };

  if (this.isPreviousTwoStrikes()) {
    this.twoFramePrevious().strikeUpdate(rollScore + 10);
  };

  if (rollScore === 10) {
    this.frameIndex++;
  };

};

Game.prototype.secondBowlUpdate = function() {
  var i = this.frameIndex
  if (i > 0) {
      this.oneFramePrevious().strikeUpdate(this.currentFrame().totalScore);
    };

  this.frameIndex++;
};


