var Scorecard = function Scorecard() {
  this.firstBowl = 0;
  this.secondBowl = 0;
  this.lastFrame = new Array;
  this.allFrames = new Array;
  this.playerScores = new Array;
};

Scorecard.prototype.bowlOne = function(number){
  if(this.lastFrame == "X"){ this.addBonusPoints(number); }
  if(this.lastFrame[1] == "/"){ this.addBonusPoints(number); }
  if(number == 10){
    this.lastFrame = ['X'];
    this.allFrames.push(this.lastFrame);
    this.playerScores.push(10);
  } else {
    this.firstBowl = number;
  }
};

Scorecard.prototype.bowlTwo = function(number){
  if(this.lastFrame == "X"){ this.addBonusPoints(number); }
  this.secondBowl = number;
  if((this.firstBowl + this.secondBowl) === 10){
    this.lastFrame = [ (this.firstBowl), '/' ];
    this.allFrames.push(this.lastFrame);
    this.playerScores.push(10);
  } else {
    this.openFrame();
  }
};

Scorecard.prototype.addBonusPoints = function(number){
  var lastScore = (this.playerScores.length - 1);
  this.playerScores[lastScore] += number;
};


Scorecard.prototype.openFrame = function(){
  this.lastFrame = [ (this.firstBowl), (this.secondBowl) ];
  this.playerScores.push(this.firstBowl + this.secondBowl);
  this.allFrames.push(this.lastFrame);
};
