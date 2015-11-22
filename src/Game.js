function Game() {
  this.frames = []
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }

  Game.prototype.roll = function() {
    var pinsKnockedDown = Math.floor(Math.random() * (this.currentFrame.standingPins));
    this.currentFrame().updateFrame(pinsKnockedDown);
    return pinsKnockedDown;
  }

  Game.prototype.currentFrame = function() {
    return this.frames.filter(function(frame) {
      return !frame.isOver()
    })[0];
  }
}
