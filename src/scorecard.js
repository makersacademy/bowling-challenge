/*jshint esversion: 6 */
var Scorecard = function(){
  this._score = 0;
  this._pinsDown = 0;
  this._frameNumber = 1;
  this._currentFrame = this.generateFrame();
  this._rollNumber = 1;
  this._incompleteFrames = [];
  this._completedFrames = [];
};

Scorecard.prototype.generateFrame = function(){
  return new Frame();
};

Scorecard.prototype.displayScore = function(){
  return this._score;
};

Scorecard.prototype.frameNumber = function(){
  return this._frameNumber;
};

Scorecard.prototype.rollNumber = function(){
  return this._rollNumber;
};

Scorecard.prototype.roll = function (pins) {
  this._currentFrame.knockDown(pins);
  this.updateScore(pins);

  if(!this._currentFrame.isActive()){
    this.nextFrame();
  }
  this._rollNumber = this._currentFrame.rollNumber();
  return this.printScores();
};

Scorecard.prototype.updateScore = function(pins){
  //'use strict';
  this._incompleteFrames.forEach((frame) => {
    frame.manageBonus(pins);
    if(frame.isComplete()) {
      this.manageComplete(frame);
    }
  });
  this._incompleteFrames = this._incompleteFrames.filter(frame => !frame.isComplete());
};

Scorecard.prototype.manageComplete = function(frame){
  if(this._completedFrames.length < 10){
    this._score += frame.Score();
    this._completedFrames.push(frame);
  }
};

Scorecard.prototype.nextFrame = function(){
  if(this._currentFrame.isComplete()){
    this.manageComplete(this._currentFrame);
  } else {
    this._incompleteFrames.push(this._currentFrame);
  }
  // Checks if we are at the end stage of the game.
  this._currentFrame = this.generateFrame();
  this._frameNumber++;
};

Scorecard.prototype.score = function() {
  return this._score;
};

Scorecard.prototype.printScores = function(){
  var score = 0;
  var scores = [];
  for(var i = 0; i < this._completedFrames.length; i++){
    score += this._completedFrames[i].Score();
    scores.push(score);
  }
  return scores;
};
