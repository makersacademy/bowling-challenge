function Rules() {};

Rules.prototype.pinChance = function() {
  return Math.floor((Math.random()*11));
};