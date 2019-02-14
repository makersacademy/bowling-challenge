function Scorecard() {
  this._score = [0];
  this._allFrames = [];
}

// Record Scores
Scorecard.prototype.firstThrow = function(score) {
  this._firstThrow = score;
};

Scorecard.prototype.secondThrow = function(score) {
  let pinsRemaining = 10 - this._firstThrow;
  if (this._firstThrow + score > 10) {
    throw new Error(`There are only ${pinsRemaining} pins Pins remaining`);
  } else {
    this._secondThrow = score;
  }
};

Scorecard.prototype.resetThrows = function() {
  this._firstThrow = 0;
  this._secondThrow = 0;
};

Scorecard.prototype.addToFrames = function() {
  this._allFrames.push([this._firstThrow, this._secondThrow]);
  this.resetThrows();
};

Scorecard.prototype.recordStrike = function() {
  this._allFrames.push([10, 0]);
};

// Logic Checks
Scorecard.prototype.spareWasScored = function(turn) {
  let firstThrow = this._allFrames[turn][0];
  let secondThrow = this._allFrames[turn][1];
  if (firstThrow != 10 && firstThrow + secondThrow === 10) { return true }
}

Scorecard.prototype.strikeWasScored = function(turn) {
  let firstThrow = this._allFrames[turn][0];
  if (firstThrow === 10) { return true; }
}

// Calculate Scores
Scorecard.prototype.calculateBasic = function(turn) {
  let throws = this._allFrames[turn];
  this._score.push(throws.reduce((total, amount) => total + amount));
};

Scorecard.prototype.calculateSpare = function(turn) {
  let throws = this._allFrames[turn];
  throws.push(this._allFrames[turn + 1][0]);
  this._score.push(throws.reduce((total, amount) => total + amount));
};

Scorecard.prototype.calculateStrike = function(turn) {
  let throws = this._allFrames[turn];
  throws.push(this._allFrames[turn + 1][0]);
  throws.push(this._allFrames[turn + 1][1]);
  this._score.push(throws.reduce((total, amount) => total + amount));
};

Scorecard.prototype.calculateTotal = function(turn) {
  allScores = this._score;
  let total = allScores.reduce((total, amount) => total + amount);
  return total;
};

Scorecard.prototype.calculateWhich = function(turn) {
  let firstThrow = this._allFrames[turn][0];
  let secondThrow = this._allFrames[turn][1];
  if (this.spareWasScored(turn)) {
    this.calculateSpare(turn);
  } else if (this.strikeWasScored(turn)) {
    this.calculateStrike(turn);
  } else {
    this.calculateBasic(turn);
  }
};
