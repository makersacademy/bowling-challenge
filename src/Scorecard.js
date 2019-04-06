function Scorecard() {
  this.frames = [];
};

Scorecard.prototype.takeFrames = function (frame) {
  this.frames.push(frame);
};

function Frame(score1, score2) {
  this.turn = [score1, score2];
};
