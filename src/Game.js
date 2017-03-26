function Game() {
  this.score = 0;
  this.frames = [];
  this.frame = new Frame();
  this.currentResult = 0;
}

Game.prototype.bowl = function() {
  frame = this.frame;
  if (this.frames.length === 10) {
    return "Game Over";
  } else {
    this.currentResult = frame.roll();
    if (frame.complete) {
      this.frames.push(frame.score);
      frame = new Frame();
    }
  }
};

function Frame() {
  this.score = [];
  this.pins = 10;
  this.complete = false;
}

Frame.prototype.roll = function() {
  result = this.knockDownPins(this.pins);
  this.updateScore(result);
  this.isFrameComplete() ? this.complete = true : this.complete = false;
  return result;
}

Frame.prototype.knockDownPins = function(pins) {
  return (Math.floor(Math.random() * pins) + 1);
};

Frame.prototype.updateScore = function(result) {
  this.score.push(result);
}

Frame.prototype.isFrameComplete = function() {
  return (this.score.length > 1);
}
