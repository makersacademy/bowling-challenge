function Frame(firstRoll, secondRoll) {
  this.pins = 10
  this.firstRoll = firstRoll
  this.secondRoll = secondRoll
  this.spare = false
  this.strike = false
  this.score = 0
  this.updated = false
};

Frame.prototype.hits = function() {
  this.pins -= this.firstRoll
  this.isAStrike();
  this.pins -= this.secondRoll
  this.isASpare();
  this.calculateScore()
};

Frame.prototype.isASpare = function() {
  if (this.pins === 0 && this.strike === false) {
    this.spare = true
  }
};

Frame.prototype.isAStrike = function() {
  if (this.pins === 0) {
    this.strike = true
  }
};

Frame.prototype.calculateScore = function() {
  this.score += (this.firstRoll + this.secondRoll);
};