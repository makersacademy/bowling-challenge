function Frame() {
  this.rolls = [];
  this.isComplete = false;
  this.maxRolls = 2;
  this.score = 0
  this.notes
}

Frame.prototype.enterRoll = function(score) {
  roll = new Roll();
  roll.enterRoll(score);
  this._storeRolls(roll);
  this._countRemainingRolls()
  this._addNotes();
};

Frame.prototype._storeRolls = function(roll) {
  this.rolls.push(roll);
  if(this.rolls.length >= this.maxRolls) {this._markComplete()}
};

Frame.prototype._countRemainingRolls = function() {
  this._calculateFrameScore()
  if( this.score >= 10) {this._markComplete()}
};

Frame.prototype._calculateFrameScore = function () {
  this.score = 0
  this.rolls.forEach(roll => {
    this.score += roll.returnScore();
  });
};

Frame.prototype._markComplete = function() {
  this.isComplete = true;
};

Frame.prototype.returnIsComplete = function() {
  return this.isComplete
};

Frame.prototype._addNotes = function() {
  if(this.rolls[0].notes === "Strike") //|| this.rolls[0].notes === "Strike" )
  { this.notes = "Strike" }
  else if (this.score >= 10)
  {this.notes = "Spare" }
  else if (this.score === 0)
  {this.notes = "Unlucky" }
}
