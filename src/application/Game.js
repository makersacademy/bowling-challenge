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
  return this.frameArray[this.frameIndex ];
};

Game.prototype.secondToLastFrame = function() {
  return this.frameArray[8];
};

Game.prototype.bonusUpdate = function(bonus) {
  var i = this.frameIndex;
  this.frameArray.forEach(function(frame, index){
    if (frame.isAwaitingBonus() && index != i) frame.bonuses.push(bonus);
  });

};

Game.prototype.oneFramePrevious = function() {
  return this.frameArray[this.frameIndex-1];
};

Game.prototype.twoFramePrevious = function() {
  return this.frameArray[this.frameIndex-2];
};

Game.prototype.totalAllFrames = function() {
  return this.frameArray.reduce(function(a, b){
    return a + b.totalScore()
  }, 0);
};
