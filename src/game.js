function Game() {

  this.score = 0
  this.currentRoll = 0
  this.frames = []
  
}

// Game.prototype.roll = function(pins) {
//   this.rollSet.push(pins);
//   this.currentRoll ++;
// }

Game.prototype.addFrame = function(frame) {
  this.frames.push(frame);
}
