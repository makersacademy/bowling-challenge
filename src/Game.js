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
  switch (true) {
    case (result === 10):
      this.updateScoreForStrike(result);
      return "Strike";
    case ((this.score[0] + this.score[1]) === 10):
      return "Spare";
    default:
      this.pins -= result;
    }
}

Frame.prototype.updateScoreForStrike = function(result) {
  this.score.push(0);
}

Frame.prototype.isFrameComplete = function() {
  return (this.score.length > 1);
}
