function Frame(rolls){
  this._score = 0
  this.MAX_SCORE = 10
  this.rolls = rolls
}

Frame.prototype.firstRoll = function() {
  return this.rolls[0];
};

Frame.prototype.secondRoll = function() {
  return this.rolls[1];
};

Frame.prototype.calculateScore = function() {
  this._score += this.firstRoll() + this.secondRoll();
}