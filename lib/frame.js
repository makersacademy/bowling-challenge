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
    this.add(value);
  };
};

Frame.prototype.expendBonuses = function(value) {
  this.game.frames.forEach(function(frame) {
    frame.expendBonus();
  });
};

Frame.prototype.roll = function(value) {
  this.expendBonuses();
  this.add(value)
  this.rolls ++;
  this._setBonus();
};

Frame.prototype.isComplete = function() {
  return this.rolls >= 2 || this.total >= 10
};

Frame.prototype.hasBonus = function() {
  return this.bonusRolls > 0;
};

Frame.prototype.reduceBonus = function() {
  this.bonusRolls -= 1;
};

Frame.prototype._setBonus = function() {
  if (this.total >= 10) {
    if (this.rolls == 1) { this.bonusRolls += 2 } // strike
    else { this.bonusRolls += 1 }; // spare
  };
};

module.exports = Frame;
