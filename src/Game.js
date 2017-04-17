var Game = function(firstFrame) {
  this.frameRecord = [firstFrame];
};

Game.prototype.overallScore = function(frame) {
  var total = 0;
  this.frameRecord.forEach(function(frame){
    total = total + frame.totalScoreWithBonus();
  });
  return total;
};

Game.prototype.isComplete = function() {
  return (this.frameRecord.length == 10 && !this.currentFrame().isInProgress());
};

Game.prototype.newFrame = function(frame) {
  if (this.isComplete()) {throw 'the game is complete'}

  if (this.currentFrame().isInProgress()) {throw 'the frame is still in progress'}

  this.frameRecord.push(frame);
};

Game.prototype.calculateBonuses = function() {
  if (!this.currentFrame().isInProgress()) {
    this.bonusForSpare();
    this.bonusForStrike();
    this.bonusForStrikeStrike();
  };
};

Game.prototype.bonusForSpare = function(first_argument) {
  if (this.previousFrame() && this.previousFrame().isSpare()) {
    this.previousFrame().bonusRecord.push(this.currentFrame().scoreRecord[0]);
  };
};

Game.prototype.bonusForStrike = function(first_argument) {
  if (this.previousFrame() && this.previousFrame().isStrike()) {
    var bonus = this.currentFrame().scoreRecord.slice(0,2);
    this.previousFrame().bonusRecord = this.previousFrame().bonusRecord.concat(bonus);
  };
};

Game.prototype.bonusForStrikeStrike = function(first_argument) {
  if (this.frameBeforeLast() && this.frameBeforeLast().isStrike() && this.frameBeforeLast().bonusRecord.length != 2) {
    this.frameBeforeLast().bonusRecord.push(this.currentFrame().scoreRecord[0]);
  };
};

Game.prototype.currentFrame = function() {
  return this.frameRecord.slice(-1)[0];
};

Game.prototype.previousFrame = function() {
  if (this.frameRecord.length > 1) {
    return this.frameRecord.slice(-2)[0];
  };
};

Game.prototype.frameBeforeLast = function() {
  if (this.frameRecord.length > 2) {
    return this.frameRecord.slice(-3)[0];
  };
};

// Calculate bonuses and the methods it calls only work when the frame is complete. They/it mus
// be called before the new frame method.
// Currently, these methods could be run multiple times if user is interacting with the naked code (exploit).


