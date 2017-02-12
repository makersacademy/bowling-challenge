function Frame(){
  this._rolls = [];
  this._total = 0;
  this._bonus = null;
};

Frame.prototype.getRolls = function () {
  return this._rolls
};

Frame.prototype.getTotal = function() {
  return this._total;
};

Frame.prototype.addRolls = function(roll) {
  this._rolls.push(roll);
};

Frame.prototype.sumRolls = function() {
  return this._rolls.reduce(function(score, nextRoll) { return score + nextRoll; }, this._total);
};

Frame.prototype.totalScore = function() {
  return this.sumRolls() + this._bonus;
};

Frame.prototype.isStrike = function() {
  return this._rolls.length === 1 && this.sumRolls() === 10;
};

Frame.prototype.isSpare = function() {
  return this._rolls.length === 2 && this.sumRolls() === 10;
};

Frame.prototype.calculateBonus = function(bonusPremium) {
  if (this.isStrike()) {
    this._bonus = bonusPremium.reduce(function(sum, bonus) { return sum + (bonus*2); }, this._total);
  } else if (this.isSpare()) {
    this._bonus = bonusPremium[0]*2;
  }
};
