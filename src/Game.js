function Game() {

  this.frames = []
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }
  this.lastFrame = this.frames[this.frames.length - 1];

  Game.prototype.roll = function() {
    return Math.floor(Math.random() * (this.lastFrame.standingPins));
  }




}
