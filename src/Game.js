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
  frame = {
    roll1: roll1,
    roll2: 0,
    total: roll1,
    type: this._rollType(roll1),
  }
  if (this._isStrike(roll1)) {
    this.frames.push(frame)
  } else {
    return frame
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
