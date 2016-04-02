/*Bowling rules:
 1 game has 10 frames
each frame has 2 rolls, unless the first is a strike
after every frame, the pins get reset to 10

each pin = 1 point
a strike = 10 points, plus 'bonus' from both rolls of next frame,
  includes upto 2 next frames
a spare = 10 points, plus 'bonus' from first roll of next frame,
  only includes next frame.
when pins left standing, simple addition.
*/

function Game() {
  this._score = 0
}

// Game.prototype.roll = function(pins) {
//   this._rollScore = pins
//   this.scoreUpdate()
// };

Game.prototype.currentScore = function() {
  return this._score
};

// Game.prototype.scoreUpdate = function () {
//   this._score += this._rollScore
// };

Game.prototype.addFrame = function(frame) {
  var rollScore = frame.isFull()
  this._score += rollScore
}
