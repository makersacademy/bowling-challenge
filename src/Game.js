function Game() {
  this.score = 0;
  this.frames = [];
  this.rollType = "";
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

Game.prototype.newFrame = function(roll1) {
  if (this.frames.length === 10) {
    throw new Error("Game Over");
  } 

  frame = {
    roll1: roll1,
    roll2: 0,
    total: roll1,
    type: this._rollType(roll1),
  }

  this.frames.push(frame)
}

Game.prototype.updateFrame = function(roll2) {
  this._currentFrame().roll2 = roll2
  this._currentFrame().total += roll2
  if (this._currentFrame().total === 10) {
    this._currentFrame().type = 'spare'
  }
}

Game.prototype._isStrike = function(roll) {
  return roll === 10
}

Game.prototype._rollType = function(roll) {
  if (this._isStrike(roll)) {
    return "strike"
  } else {
    return ""
  }
}

Game.prototype._currentFrame = function() {
  return this.frames[this.frames.length - 1]
}