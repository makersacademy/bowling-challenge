function ScorecardError(message) {
  const error = new Error(message);
  this.name = 'ScorecardError';
  this.message = message;
  this.stack = error.stack;
}

ScorecardError.prototype = Object.create(Error.prototype);


function Scorecard(frame = new Frame(1)) {
  this.frames = [frame];
  this.currentFrame = frame;
  this.activeRolls = [undefined, undefined];
}

Scorecard.prototype.totalScore = function totalScore() {
  return this.frames.reduce((res, frame) => res + frame.score(), 0);
};

Scorecard.prototype.getFrame = function getFrame(frameNumber) {
  return this.frames[frameNumber - 1];
};

Scorecard.prototype.input = function input(score) {
  if (!this.currentFrame) throw new ScorecardError('The game is already completed');
  this.activeRolls.forEach((roll) => { if (roll) roll.addScore(score); });

  const roll = this.currentFrame.addRoll(score);
  this.activeRolls.push(roll);
  this.activeRolls.shift();

  this.currentFrame = this.currentFrame.getNextFrame();
  if (!this.currentFrame) return false;
  if (this.currentFrame.frameNumber() > this.frames.length) {
    this.frames.push(this.currentFrame);
  }
  return true;
};

if (typeof module !== 'undefined') {
  module.exports = { Scorecard, ScorecardError };
}
