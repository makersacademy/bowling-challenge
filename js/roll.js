var Roll = function() {
  this.rollScore = 0;
};

Roll.prototype.setPinsHit = function(pinsHit) {
  this.rollScore = pinsHit;
};

Roll.prototype.getPinsHit = function() {
  return this.rollScore;
};