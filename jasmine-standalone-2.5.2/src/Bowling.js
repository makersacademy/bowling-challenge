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
  this.addPoints(10);
};

Scorecard.prototype.spare = function(){
  this.lastFrame = [ (this.firstBowl), '/' ];
  this.allFrames.push(this.lastFrame);
  this.addPoints(10);
};

Scorecard.prototype.addBonusPoints = function(number){
  var lastScoreIndex = (this.playerScores.length - 1);
  this.playerScores[lastScoreIndex] += number;
};

Scorecard.prototype.openFrame = function(){
  this.lastFrame = [ (this.firstBowl), (this.secondBowl) ];
  this.allFrames.push(this.lastFrame);
  this.addScore();
};

Scorecard.prototype.lastScore = function(){
  index = this.playerScores.length - 1;
  if(index >= 0){
    return this.playerScores[index];
  } else {
    return 0;
  }
};

Scorecard.prototype.addScore = function(){
  var totalScore = (this.firstBowl + this.secondBowl + this.lastScore());
  this.playerScores.push(totalScore);
};

Scorecard.prototype.addPoints = function(number){
  var newScore = this.lastScore() + number;
  this.playerScores.push(newScore);
};
