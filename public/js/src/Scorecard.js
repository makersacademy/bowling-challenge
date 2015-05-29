function Scorecard(){
  this.totalScore = 0;
  this.frameScore = 0;
  this.bonusScore = 0;
  this.bowls = [];
  this.halfStrike = false;
};

Scorecard.prototype.runFrame = function(bowl1, bowl2) {
  if(this.halfStrike) this.calcHalfStrike(bowl1);
  this.frameScore = this.calcFrame(bowl1, bowl2);
  if(this.frameScore == 10) this.halfStrike = true;
  this.totalScore += this.frameScore + this.bonusScore;
  (this.bowls).push([bowl1, bowl2]);
  this.bonusScore = 0;
};

Scorecard.prototype.calcFrame = function(bowl1, bowl2) {
  return bowl1 + bowl2;
};

Scorecard.prototype.calcHalfStrike = function(bowl1) {
  this.bonusScore = bowl1;
  this.halfStrike = false;
};


