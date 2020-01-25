function Game() {
  this.score = 0;
  this.frames = [];
}

Game.prototype.viewScore = function() {
  return this.score;
}

Game.prototype.viewFrames = function() {
  return this.frames;
}

Game.prototype.roll = function(pins) {
  this.score += pins

  if (this._isStrike(pins)) {
    return 'strike'
  } else {
    return pins
  }
  
}

Game.prototype._isStrike = function(roll) {
  return roll === 10
}

