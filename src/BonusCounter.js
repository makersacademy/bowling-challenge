"use strict"

function BonusCounter(life) {
  this.life = life;
  this.bonus = 0;
};
BonusCounter.prototype.update = function() {
  this.life --;
};
BonusCounter.prototype.add = function(rolledScore) {
  this.bonus += rolledScore;
};
