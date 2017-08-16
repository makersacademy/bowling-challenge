'use strict';

function Game(){
  this.MAX_FRAMES = 10;
  this.completion = false;
  this.currentFrame = new Frame();
  this.frames = [];
  this.currentFrameNo = 1;
  this.score = 0;
};

Game.prototype.roll = function(pins) {

  // Give bonus points to the eligible frames
  this._giveBonusPointsToEligibleFrames(pins);

  // Roll to the current frame if it's not yet complete
  if(!this.currentFrame.isComplete()) {
    this.currentFrame.roll(pins);
  };

  // Make final bonus rolls if needed
  if(!this.isComplete()){
    if(this.frames.length === this.MAX_FRAMES){
      if(this.currentFrame.needsBonus()) {
        this.currentFrame.addBonus(pins);
      };
    };
  };

  // Update frames if required
  if(this.currentFrame.isComplete()){
    if(this.frames.length < this.MAX_FRAMES){
      this._saveFrame(this.currentFrame);
      if(this.frames.length < this.MAX_FRAMES) {
        this.currentFrame = new Frame();
        this._frameCountUp();
      };
    };
  };

  // Complete the game if required
  if(this.frames.length === this.MAX_FRAMES){
    if(!this._bonusRollNeeded()){
      this._setComplete();
    };
  };
};

Game.prototype.getScore = function() {
  this.score = 0;
  this.frame_no = 1
  this.frames.forEach(function(frame) {
    this.score += frame.getScore();
    this.frame_no++;
  }, this);
  return this.score;
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
