"use strict"

function BonusCounter(frame, life) {
  this.frame = frame;
  this.life = life;
  this.bonus = 0;
};
BonusCounter.prototype.update = function() {
  this.life --;
};
BonusCounter.prototype.add = function(rolledScore) {
  this.bonus += rolledScore;
};
