'use strict';

function Bowling(){
  this.START_SCORE = 0;
  this._currentScore = this.START_SCORE;
  this._currentFrame = 0; //index
  this._currentRoll = 0;  //index
  this.scoreSheet = [['a','b'],['c','d'],['e','f'],['g','h'],['i','j'],['k','l'],['m','n'],['o','p'],['q','r'],
  ['s','t','u']]
  this.frameScore = [0,0,0,0,0,0,0,0,0,0]
};

Bowling.prototype.getScore = function(){
  return this._currentScore;
};

Bowling.prototype.getFrame = function(){
  return this._currentFrame;
};

Bowling.prototype.getRoll = function(){
  return this._currentRoll;
};


Bowling.prototype.roll = function(knockedDown){
  this.addToRollScore(knockedDown)
  this.addToFrameScore(knockedDown)
  if (this.getRoll() == 0) {
    if (knockedDown == 10) {
    this.getFrame++;
    } else {
    this._currentRoll++ }
  } else if (this.getRoll() == 1) {
    if (this.getFrame() == 9) {
      this._currentRoll++;
    } else {
      this._currentRoll--;
    };
    if (this.getFrame() !== 9) {
      this._currentFrame++;
    };
  } else if (this.getRoll() == 2) {
      this.results();
  };
};

Bowling.prototype.addToRollScore = function(newScore){
  if (newScore < 10) {
    this.scoreSheet[this.getFrame()][this.getRoll()] = newScore
  } else if (newScore == 10){
    this.scoreSheet[this.getFrame()][this.getRoll()] = newScore
    if (this.getRoll() == 0){
      this._currentRoll++;
    };
  };
};

Bowling.prototype.addToFrameScore = function(newScore){
  if (newScore == 10) {
    this.frameScore[this.getFrame()] = 10
  } else {
    this.frameScore[this.getFrame()] = (this.frameScore[this.getFrame()] += newScore)
  };
};

Bowling.prototype.results = function(){
  console.log("FINISHED. HERE IS YOUR SCORESHEET:");
  console.log(this.scoreSheet);
  console.log(this.frameScore);
  console.log("AND YOUR TOTAL:")
  function add(a, b) {
    return a + b;
  };
  console.log(this.frameScore.reduce(add, 0));
};
