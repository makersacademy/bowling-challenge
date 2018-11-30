"use strict"

function BonusCounter(life) {
  this.life = life;
};
BonusCounter.prototype.update = function() {
  this.life --;
};
