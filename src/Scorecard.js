function Scorecard() {
  this.frames = [];
  this.score = 0;
};

Scorecard.prototype.takeFrames = function (frame) {
  if (this.frames.length === 10) {
    return;
  }
  this.frames.push(frame)
};

Scorecard.prototype.scoreGame = function(game) {
  return game;
};
