function RollError(message) {
  const error = new Error(message);
  this.message = message;
  this.name = 'RollError';
  this.stack = error.stack;
}

RollError.prototype = Object.create(Error.prototype);

function Roll(score, extraRolls) {
  if (score < 0) throw new RollError('Score cannot be less than 0');
  if (score > 10) throw new RollError('Score cannot be greater than 10');
  if (extraRolls < 0 || extraRolls > 2) {
    throw new RollError('Only 0, 1 or 2 additional rolls allowed');
  }
  if (extraRolls === 2 && score !== 10) {
    throw new RollError('2 additional rolls is only possible with a strike');
  }

  this.internalScore = score;
  this.additionalRolls = extraRolls;
}

Roll.prototype.score = function score() {
  return this.internalScore;
};

Roll.prototype.addScore = function addScore(score) {
  if (score < 0) throw new RollError('Score cannot be less than 0');
  if (score > 10) throw new RollError('Score cannot be greater than 10');
  if (this.additionalRolls < 1) return this.score();

  this.additionalRolls -= 1;
  this.internalScore += score;
  return this.internalScore;
};

if (typeof module !== 'undefined') {
  module.exports = { Roll, RollError };
}
