var Roll = function() {
  this.rollScore = 0;
};

  Roll.prototype.hits = function(pinsHit) {
    this.rollScore = pinsHit;
  };

