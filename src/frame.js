var Frame = function() {
  this.firstBowl = null;
  this.spare = false;
  this.strike = false;
};
 
Frame.prototype.receiveBowl = function(pinsKnockedOver) {
  if (this.isBowlStrike(pinsKnockedOver)) {
    this.receiveFirstBowl(pinsKnockedOver);
    this.receiveSecondBowl(0);
  } else if (this.firstBowl != null) {
    this.receiveSecondBowl(pinsKnockedOver);
  } else {
    this.receiveFirstBowl(pinsKnockedOver);
  };
};

Frame.prototype.calculateResult = function() {
  if (this.firstBowl === 10) this.strike = true;
  if (this.firstBowl + this.secondBowl === 10) this.spare = true;
  this.result = this.firstBowl + this.secondBowl;
};

Frame.prototype.receiveSecondBowl = function(pinsKnockedOver) {
  this.secondBowl = pinsKnockedOver;
  this.calculateResult();
}

Frame.prototype.receiveFirstBowl = function(pinsKnockedOver) {
  this.firstBowl = pinsKnockedOver;
}

Frame.prototype.isBowlStrike = function(pinsKnockedOver) {
  if (this.firstBowl === null && pinsKnockedOver === 10) return true;
}