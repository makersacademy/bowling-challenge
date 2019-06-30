function Game() {
  this.frames = [new Frame()]
  this.currentScore = 0
  this._bonusStrike = 0
}

Game.prototype.addFrame = function() {
  if(this.lastFrame().rolls.length == 2 || this.lastFrame().rolls[0] == 10)
  this.frames.push(new Frame())
}

Game.prototype.add = function(pins) {
  this.addFrame()
  this.lastFrame().addPins(pins)
  this.score()
}

Game.prototype.score = function() {
  this._bonusStrike = 0
  this.bonusStrike()
  return this.currentScore += this.lastFrame().frameScore();
}

Game.prototype.lastFrame = function() {
  return this.frames[this.frames.length - 1];
}

Game.prototype.previousFrame = function() {
  return this.frames[this.frames.length - 2];
}

Game.prototype.bonusStrike = function() {
  if(this.frames.length > 1) {
    if(this.previousFrame().rolls[0] == 10 && this.lastFrame().rolls.length == 2 ) {
    return this._bonusStrike = this.lastFrame().frameScore()
    }
  }
}