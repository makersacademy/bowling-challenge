function Game() {
  this.score = 0;
  this.frames = [];
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }
}
  Game.prototype.roll = function(number) {
    // var pinsKnockedDown = Math.floor(Math.random() * (this.currentFrame().standingPins));
    this.currentFrame().updateFrame(number);
    this.score += number;
    return number;
  }

  Game.prototype.currentFrame = function() {
    return this.frames.filter(function(frame) {
      return !frame.isOver()
    })[0];
  }
