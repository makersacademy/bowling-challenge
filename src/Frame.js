function Frame() {
  this.firstBowl = null;
  this.spare = false;
  this.strike = false;
};

Frame.prototype.receiveBowl = function(hits) {
  if(this.isBowlAStrike(hits)) {
    this.firstBowl = hits;
    this.secondBowl = 0;
  } else if (this.firstBowl != null) {
    this.secondBowl = hits;
  } else {
    this.firstBowl = hits;
  }
  this.calculateResult();
};

Frame.prototype.calculateResult = function() {
  if (this.firstBowl === 10) this.strike = true;
  if (this.firstBowl + this.secondBowl === 10 && this.secondBowl !== 0) this.spare = true;
  this.result = this.firstBowl + this.secondBowl;
}

Frame.prototype.isBowlAStrike = function(hits) {
  if (this.firstBowl === null && hits === 10) return true;
}