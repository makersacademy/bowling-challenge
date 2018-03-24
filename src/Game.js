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
