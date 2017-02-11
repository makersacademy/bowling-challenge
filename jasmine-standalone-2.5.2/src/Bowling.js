var Scorecard = function Scorecard() {
  this.firstBowl;
  this.secondBowl;
  this.currentFrame = new Array;
  this.allFrames = new Array;
  this.playerScore = 0;
  this.strike = false;
  this.spare = false;
};

Scorecard.prototype.bowlOne = function(number){
  if(number == 10){
    this.strike = true;
    this.currentFrame = ['X']
    this.allFrames.push(this.currentFrame);
  } else {
    this.firstBowl = number;
  };
};

Scorecard.prototype.bowlTwo = function(number){
  this.secondBowl = number;
  if((this.firstBowl + this.secondBowl) == 10){
    this.currentFrame = [ (this.firstBowl), '/' ]
  } else {
    this.openFrame();
  };
};

Scorecard.prototype.openFrame = function(){
  this.currentFrame = [ (this.firstBowl), (this.secondBowl) ];
  this.playerScore += (this.firstBowl + this.secondBowl);
  this.allFrames.push(this.currentFrame);
};
