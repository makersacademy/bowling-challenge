function Game() {
  this._score = 0;
};

Game.prototype.addRoll = function(rollScore) {
  if(rollScore <= 10) {
    this._score += rollScore;
  } else {
    throw new Error("Are you trying to cheat?");
  }
};

Game.prototype.addScore = function() {
  return this._score;
};