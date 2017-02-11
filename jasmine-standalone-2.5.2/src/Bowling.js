var Scorecard = function Scorecard() {
  this.firstBowl = 0;
  this.secondBowl = 0;
  this.lastFrame = new Array;
  this.allFrames = new Array;
  this.playerScores = new Array;
};

Scorecard.prototype.bowlOne = function(number){
  this.firstBowl = number;
  if(this.lastFrame == "X"){ this.addBonusPoints(number); }
  if(this.lastFrame[1] == "/"){ this.addBonusPoints(number); }
  if(number == 10){
    this.strike();
  }
};

Scorecard.prototype.bowlTwo = function(number){
  this.secondBowl = number;
  if(this.lastFrame == "X"){ this.addBonusPoints(number); }
  if((this.firstBowl + this.secondBowl) === 10){
    this.spare();
  } else {
    this.openFrame();
  }
};

Scorecard.prototype.strike = function(){
  this.lastFrame = ['X'];
  this.allFrames.push(this.lastFrame);
  this.playerScores.push(10);
};

Scorecard.prototype.spare = function(){
  this.lastFrame = [ (this.firstBowl), '/' ];
  this.allFrames.push(this.lastFrame);
  this.playerScores.push(10);
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
