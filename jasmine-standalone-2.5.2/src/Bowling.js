var Scorecard = function Scorecard() {
  this.firstBowl = null;
  this.secondBowl = null;
  this.lastFrame = new Array;
  this.allFrames = new Array;
  this.playerScores = new Array;
  this.runningTotal = 0;
  this.currentFrame = 0;
  this.currentBowl = 1;
};

Scorecard.prototype.bowl = function(number){
  if(this.currentBowl == 1) {
    this.bowlOne(number);
  } else if(this.currentBowl == 2) {
    this.bowlTwo(number);
  }
}

Scorecard.prototype.bowlOne = function(number){
  this.firstBowl = number;
  if(this.lastFrame == "X"){ this.addBonusPoints(number); }
  if(this.lastFrame[1] == "/"){ this.addBonusPoints(number); }
  if(number == 10){
    this.strike();
  }
  this.currentBowl += 1;
  this.currentFrame++;
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
  this.addScore(10);
};

Scorecard.prototype.spare = function(){
  this.lastFrame = [ (this.firstBowl), '/' ];
  this.allFrames.push(this.lastFrame);
  this.addScore(10);
};

Scorecard.prototype.addBonusPoints = function(number){
  var lastScoreIndex = (this.playerScores.length - 1);
  this.playerScores[lastScoreIndex] += number;
};

Scorecard.prototype.openFrame = function(){
  this.lastFrame = [ (this.firstBowl), (this.secondBowl) ];
  this.allFrames.push(this.lastFrame);
  var totalScore = (this.firstBowl + this.secondBowl);
  this.addScore(totalScore);
};

Scorecard.prototype.lastScore = function(){
  index = this.playerScores.length - 1;
  if(index >= 0){
    return this.playerScores[index];
  } else {
    return 0;
  }
};

Scorecard.prototype.addScore = function(number){
  this.playerScores.push(number);
  this.runningTotal = this.calculateTotal();
  this.currentBowl -= 1;
};

Scorecard.prototype.calculateTotal = function(){
  var scores = this.playerScores;
  var sum = scores.reduce(function(a, b) { return a + b; }, 0);
  return sum;
};
