var Frame = function(game) {
  this.game = game;
  this.total = 0;
  this.rolls = 0
  this.bonusRolls = 0;
};

Frame.prototype.add = function(value) {
  this.total += value;
}

Frame.prototype.expendBonus = function(value) {
  if (this.hasBonus()) {
    this.reduceBonus();
    if (!this._isFinal()) this.add(value);
  };
};

Frame.prototype.expendBonuses = function(value) {
  this.game.frames.forEach(function(frame) {
    frame.expendBonus(value);
  });
};

Frame.prototype.roll = function(value) {
  this.expendBonuses(value);
  this.add(value)
  this.rolls ++;
  if (this.total === 10) this._setBonus();
};

Frame.prototype.isComplete = function() {
  if (this._isFinal()) return this._tenthFrameComplete();
  else return this._normalComplete();
};

Frame.prototype._normalComplete = function() {
  return this.rolls >= 2 || this.total >= 10;
};

Frame.prototype._tenthFrameComplete = function() {
  if (this.rolls >= 3) return true;
  if (this.rolls == 2 && this.bonusRolls == 0) return true;
  return false;
};

Frame.prototype.hasBonus = function() {
  return this.bonusRolls > 0;
};

Frame.prototype.reduceBonus = function() {
  this.bonusRolls -= 1;
};

Frame.prototype._setBonus = function() {
  if (this.rolls == 1) this.bonusRolls += 2 // strike
  else this.bonusRolls += 1; // spare
};

Frame.prototype._isFinal = function() {
  return this === this.game.frames[9];
};

module.exports = Frame;
