'use strict';

function Game(){
  this.MAX_FRAMES = 10;
  this.completion = false;
  this.currentFrame = new Frame();
  this.frames = [];
  this.currentFrameNo = 1;
};

Game.prototype.roll = function(pins) {
  this._giveBonusPointsToEligibleFrames(pins);
  this._rollToCurrentFrame(pins);
  this._finalBonusRollIfRequired(pins);
  this._saveCurrentFrameIfRequired();
  this._startNewFrameIfRequired();
  this._completeTheGameIfRequired();
};

Game.prototype.getScore = function() {
  return this.frames.reduce(this._sumeFrameScores, 0);
};

Game.prototype.isComplete = function() {
  return this.completion;
};

Game.prototype.getFrame = function(n) {
  return this.frames[n-1];
};

// Private implementation

Game.prototype._giveBonusPointsToEligibleFrames = function(pins) {
  if(this.currentFrameNo > 1) {
    if(this.getFrame(this.currentFrameNo - 1).needsBonus()){
      this.getFrame(this.currentFrameNo - 1).addBonus(pins);
    };
    if(this.currentFrameNo > 2) {
      if(this.getFrame(this.currentFrameNo - 2).needsBonus()){
        this.getFrame(this.currentFrameNo - 2).addBonus(pins);
      };
    };
  };
};

Game.prototype._maxFramesAchieved = function() {
  return this.frames.length === this.MAX_FRAMES;
};

Game.prototype._rollToCurrentFrame = function(pins) {
  if(!this.currentFrame.isComplete()) {
    this.currentFrame.roll(pins);
  };
};

Game.prototype._saveCurrentFrameIfRequired = function() {
  if(this.currentFrame.isComplete() && !this._maxFramesAchieved()){
    this._saveFrame(this.currentFrame);
  };
};

Game.prototype._startNewFrameIfRequired = function() {
  if(this.currentFrame.isComplete() && !this._maxFramesAchieved()){
      this.currentFrame = new Frame();
      this._frameCountUp();
  };
};

Game.prototype._completeTheGameIfRequired = function() {
  if(this._maxFramesAchieved()){
    if(!this._bonusRollNeeded()){
      this._setComplete();
    };
  };
};

Game.prototype._finalBonusRollIfRequired = function(pins) {
  if(this._maxFramesAchieved()){
    if(!this.isComplete()){
      if(this.currentFrame.needsBonus()) {
        this.currentFrame.addBonus(pins);
      };
    };
  };
};

Game.prototype._saveFrame = function(frame) {
  this.frames.push(frame);
};

Game.prototype._frameCountUp = function() {
  this.currentFrameNo++;
};

Game.prototype._setComplete = function() {
  this.completion = true;
};

Game.prototype._bonusRollNeeded = function() {
  var toReturn = false;
  this.frames.forEach(function(frame){
    if(frame.needsBonus()) {
      toReturn = true;
    };
  });
  return toReturn;
};

Game.prototype._sumeFrameScores = function(sum, frame) {
    return sum + frame.getScore();
};
