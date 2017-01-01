var Game = function() {
  this._frames = [];
  this.bonus;
};

Game.prototype.firstRoll = function(score) {
  this._frames.push([score]);
};

Game.prototype.secondRoll = function(score) {
  this._frames[this.currentFrame()].push(score);
};

Game.prototype.currentFrame = function() {
  return this._frames.length-1;
}

Game.prototype.individualFrame = function(frame) {
  return this._frames[frame-1];
};

Game.prototype.completeGame = function() {
  return this._frames.reduce(function(x, y) {
    return x + y;
  }, 0);
};

Game.prototype.isStrike = function(frame) {
  return this.individualFrame(frame)[0] === 10;
};

Game.prototype.isSpare = function(frame) {
  var currentFrame = this.individualFrame(frame);
  return (currentFrame[0] + currentFrame[1]) === 10;
};

Game.prototype.isOpen = function(frame) {
  var currentFrame = this.individualFrame(frame);
  return currentFrame[0] + currentFrame[1] < 10;
};
