'use strict';

function Scoreboard() {
  this._frames = [];
  this._currentFrame = new Frame();
}

Scoreboard.prototype.roll = function() {
  this._currentFrame.roll();
  if (this._currentFrame.isDone()) {
    this._storeFrame();
  }
}

Scoreboard.prototype.total = function() {
  var total = 0;
  this._frames.forEach(function(frame) {
    total += frame.savePoints();
  })
  return total;
}
 Scoreboard.prototype._storeFrame = function() {
  this._frames.push(this._currentFrame);
  this._currentFrame = new Frame();
}
 // Game.prototype._strikeBonus = function() {
//   this._frames.forEach(function(frame) {
//   })
// }

