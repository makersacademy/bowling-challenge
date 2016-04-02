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

function Game(frame) {
  this._score  = 0
  this._frames = []
  this.currentFrame = frame
}

Game.prototype.currentScore = function() {
  var total = this._frames.reduce(function (first, second, index) {
    return first + second;
  })
  return this._score += total
};

Game.prototype.addFrame = function() {
  if(this.currentFrame.isFinished()) {
    this._frames.push(this.currentFrame.score())
    this.currentFrame._rolls = []
  }
}

// use strike / spare >> frames for score

// if !frame.isFinished
// game.roll(pins)
// else save score in frame index
// start new frame.


// Game.prototype.scoreUpdate = function () {
//   this._score += this._rollScore
// };
//
