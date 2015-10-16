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
  return this.frameArray[this.frameIndex];
};

Game.prototype.bonusUpdate = function(bonus) {
  var i = this.frameIndex;
  this.frameArray.forEach(function(frame, index){
    if (frame.isAwaitingBonus() && index != i) frame.bonuses.push(bonus);
  });
};

Game.prototype.totalAllFrames = function() {
  return this.frameArray.reduce(function(memo, frame){
    return memo + frame.totalScore();
  }, 0);
};
