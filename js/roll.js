var Roll = function() {
  this.rollScore = 0;
};

Roll.prototype.setPinsHit = function(pinsHit) {
  if (pinsHit < 11){
    this.rollScore = pinsHit;
  }else{
    this.rollScore = 0
  }
};

Roll.prototype.getPinsHit = function() {
  return this.rollScore;
};