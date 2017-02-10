var Scorecard = function Scorecard() {
  this.firstBowl = 0;
  this.secondBowl = 0;
  this.currentFrame = new Array;
  this.allFrames = new Array;
  this.playerScore = 0;
};

Scorecard.prototype.bowlOne = function(number){
  this.firstBowl = number;
};

Scorecard.prototype.bowlTwo = function(number){
  this.secondBowl = number;
};

Scorecard.prototype.finishFrame = function(){
  this.currentFrame = [ (this.firstBowl), (this.secondBowl) ];
  this.playerScore += (this.firstBowl + this.secondBowl);
  this.allFrames.push(this.currentFrame);
};
