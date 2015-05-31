function Scorecard(){
  this.totalScore = 0;
  this.frameScore = 0;
  this.bonusScore = 0;
  this.extraBonus = 0;
  this.bowls = [];
  this.halfStrike = false;
  this.Strike = false;
  this.doubleStrike = false;
};

Scorecard.prototype.runFrame = function(bowl1, bowl2, extraBowl) {
  extraBowl = typeof extraBowl !== 'undefined' ? extraBowl : 0;
  if(this.doubleStrike) this.calcDoubleStrike(bowl1);
  if(this.halfStrike) this.calcHalfStrike(bowl1);
  if(this.Strike) this.calcStrike(bowl1, bowl2);
  this.frameScore = this.calcFrame(bowl1, bowl2);
  if(this.frameScore == 10) this.halfStrike = true;
  if(bowl1 == 10) this.Strike = true;
  this.totalScore += this.frameScore + this.bonusScore + this.extraBonus + extraBowl;
  (this.bowls).push([bowl1, bowl2]);
  this.bonusScore = 0;
  this.extraBonus = 0;
};

Scorecard.prototype.calcFrame = function(bowl1, bowl2) {
  return bowl1 + bowl2;
};

Scorecard.prototype.calcHalfStrike = function(bowl1) {
  this.bonusScore = bowl1;
  this.halfStrike = false;
};

Scorecard.prototype.calcStrike = function(bowl1, bowl2) {
  this.bonusScore = bowl1 + bowl2
  if (bowl1 == 10) {
    this.doubleStrike = true;
  }
  this.Strike = false;
};

Scorecard.prototype.calcDoubleStrike = function(bowl1) {
  this.extraBonus = bowl1;
  this.doubleStrike = false;
};


