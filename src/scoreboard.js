'use strict()';

function Scoreboard() {
  this._frames = []
  this._frame = 1
  this._currentFrame = new Frame(this._frame)
  this._final = false
}

Scoreboard.prototype.currentFrame = function() {
  return this._currentFrame
}

Scoreboard.prototype.frameNumber = function() {
  return this._frame
}

Scoreboard.prototype.roll = function() {
  this._currentFrame.roll()
}

Scoreboard.prototype.total = function() {
  var total = 0
  this._frames.forEach(function(frame) { total += frame.points() })
  return total
}

Scoreboard.prototype.saveFrame = function() {
  this._frames.push(this._currentFrame);
  this._frame += 1
}

Scoreboard.prototype.addScore = function() {
  if(this._frame > 1) { this.allBonusPoints() }
  if(this._frame > 2) { this.awesomeGame() }
}

Scoreboard.prototype.saveScore = function () {
  this.addScore()
  this.saveFrame();
  this._currentFrame = new Frame(this._frame);
}

Scoreboard.prototype.gameOver = function () {
  this.addScore()
  if(this._frame === 10) { this.saveFrame() }
  if(this._currentFrame.superPlay() === 'strike' || this._currentFrame.superPlay() === 'spare') {
    this.extraRolls()
  } 
  else {
    this._final = true
  }
}

Scoreboard.prototype.done = function() {
  if(this._final === true) {
    return true 
  } 
  else {
    return false
  }
}

Scoreboard.prototype.extraRolls = function() {
  if(this._currentFrame.superPlay() === 'strike') {
    this._currentFrame = new FrameTen(2);
  } 
  else if (this._currentFrame.superPlay() === 'spare') {
    this._currentFrame = new FrameTen(1);
  }
}

Scoreboard.prototype.spareBonus = function() {
  this.finalFrame().bonus(this._currentFrame.spare())
}

Scoreboard.prototype.strikeBonus = function() {
  this.finalFrame().bonus(this._currentFrame.strike())
}

Scoreboard.prototype.awesomeGame = function() {
  if(this.finalFrame().superPlay() === 'strike' && this.extraFrame().superPlay() === 'strike') {
    this.awesomeGameBonus()
  }
}

Scoreboard.prototype.awesomeGameBonus = function() {
  this.extraFrame().bonus(this._currentFrame.spare())
}

Scoreboard.prototype.finalFrame = function() {
  return this._frames[this._frames.length - 1]
}

Scoreboard.prototype.extraFrame = function() {
  return this._frames[this._frames.length - 2]
}

Scoreboard.prototype.allBonusPoints = function() {
  if(this.finalFrame().superPlay() === 'spare') {
    this.spareBonus()
  } else if(this.finalFrame().superPlay() === 'strike') {
    this.strikeBonus()
  }
}
