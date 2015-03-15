var Frame = function() {
  this.firstBowl = null;
  this.secondBowl = 0;
  this.result;
  this.spare = false;
  this.strike = false;
};
 
Frame.prototype.receiveBowl = function(pinsKnockedOver) {
  if (this.firstBowl === null && pinsKnockedOver === 10) {
    this.firstBowl = pinsKnockedOver;
    this.secondBowl = 0;
    this.calculateResult();
  } else if (this.firstBowl != null) {
    this.secondBowl += pinsKnockedOver;
    this.calculateResult();
  } else {
    this.firstBowl = pinsKnockedOver;
  };
};

Frame.prototype.calculateResult = function() {
  if (this.firstBowl === 10) {
    this.strike = true;
  } else if (this.firstBowl + this.secondBowl === 10) {
    this.spare = true;
  } else {
    this.result = this.firstBowl + this.secondBowl;
  };
};