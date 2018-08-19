'use strict';

function Scoreboard() {
  this._frames = [];
  this._currentFrame = new Frame();
}

Scoreboard.prototype.roll = function() {
  this._currentFrame.roll();
  if (this._currentFrame.done()) {
    this.saveFrame();
  }
}

Scoreboard.prototype.total = function() {
  var total = 0;
  this._frames.forEach(function(frame) {
    total += frame.savePoints();
  })
  return total;
}

Scoreboard.prototype.saveFrame = function() {
  if (this._frames.length > 0) {
    this.addBonus(this._frames[this._frames.length - 1], this._currentFrame)
  }
  this._frames.push(this._currentFrame);
  this._currentFrame = new Frame();
}

Scoreboard.prototype.addBonus = function(prev, current) {
  if (prev.spare()) {
    prev.addBonus(current.spareBonus());
  }
  if (prev.strike()) {
    prev.addBonus(current.savePoints());
  }
}

 // Game.prototype._strikeBonus = function() {
//   this._frames.forEach(function(frame) {
//   })
// }

