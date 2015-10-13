function Game(frameConstructor) {
  this.frameArrayGenerator(frameConstructor);
  this.frameIndex = 0;
};

Game.prototype.frameArrayGenerator = function(frameConstructor) {
  this.frameArray = [];
  for (var i = 0; i < 10; i++) {
    this.frameArray[i] = new frameConstructor;
  };

  this.frameArray[9].setLastFrame();
};

Game.prototype.bowl = function(number) {
  var rollValue;
  rollValue = this.currentFrame().roll(number);

  this.bonusUpdate(rollValue);

  if (this.currentFrame().isComplete()) this.frameIndex++;

  return rollValue;
};

Game.prototype.currentFrame = function() {
  var i = this.frameIndex;
  return this.frameArray[i];
};

Game.prototype.bonusUpdate = function(bonus) {
  var i = this.frameIndex;
  if (i > 1 && this.twoFramePrevious().isAwaitingBonus()) {
    this.twoFramePrevious().bonuses.push(bonus);
  };

  if (i > 0 && this.oneFramePrevious().isAwaitingBonus()) {
    this.oneFramePrevious().bonuses.push(bonus);
  };

};

Game.prototype.oneFramePrevious = function() {
  var i = this.frameIndex;
  return this.frameArray[i-1];
};

Game.prototype.twoFramePrevious = function() {
  var i = this.frameIndex;
  return this.frameArray[i-2];
};

Game.prototype.totalAllFrames = function() {
  var total = 0;
  for (var i = this.frameArray.length - 1; i >= 0; i--) {
    total += this.frameArray[i].totalScore();
  };

  return total;
};
