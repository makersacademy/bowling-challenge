function Scorecard() {
  this.playerScores = [];
  this.currentFrame = [];
  this.firstBowl = 0;
  this.secondBowl = 0;
};

Scorecard.prototype.bowlOne = function(number){
  this.firstBowl = number;
};

Scorecard.prototype.bowlTwo = function(number){
  this.secondBowl = number;
};

Scorecard.prototype.finishFrame = function(){
  this.currentFrame.push( [(this.firstBowl), (this.secondBowl)] );
};
