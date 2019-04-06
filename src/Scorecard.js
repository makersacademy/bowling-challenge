function Scorecard() {
  this.frames = [];
};

Scorecard.prototype.takeFrames = function (frame) {
  if (this.frames.length === 10) {
    return;
  }
  this.frames.push(frame);
};

function Frame(score1, score2) {
  this.turn = [score1, score2];
};
