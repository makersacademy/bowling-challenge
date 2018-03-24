function Game() {
  this._score = 0;
};

function Frame(lastRoundFrame = false, round = new Round()) {
  this._score = 0;
  this._isLastRoundFrame = lastRoundFrame;
  this._rounds = lastRoundFrame ? [round, round, round] : [round, round];
};

function Round() {
  this._score = 0;
};

Round.prototype.updateScore = function (numberOfPins) {
  if (numberOfPins > 10) {
    throw new Error("Max number of pins exceeded");
  } else {
    this._score = numberOfPins;
  };
};
