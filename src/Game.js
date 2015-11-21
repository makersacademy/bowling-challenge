function Game() {

  this.frames = []
  for (var i = 0; i < 10; i++) {
    this.frames.push(new Frame());
  }
  this.lastFrame = this.frames[this.frames.length - 1];

  Game.prototype.roll = function() {
    var pinsKnockedDown = Math.floor(Math.random() * (this.lastFrame.standingPins));
    this.lastFrame.standingPins -= pinsKnockedDown;
    this.lastFrame.rolls.push(pinsKnockedDown);
    return pinsKnockedDown;
  }




}
