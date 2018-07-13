var Scorecard = function(){
  this._score = 0;
  this._pinsDown = 0;
  this._frameNumber = 1;
  this._currentFrame = this.generateFrame();
  this._rollNumber = 1;
  this._incompleteFrames = [];
  this._completeFrames = [];

  this._incompleteFrames.push(this._currentFrame);
};

Scorecard.prototype.generateFrame = function(){
  return new Frame();
};

Scorecard.prototype.displayScore = function(){
  return this._score;
};

Scorecard.prototype.roll = function (pins) {
  this._currentFrame.knockedDown(pins);
  if(!this._currentFrame.isActive()){
    this.nextFrame();
    this.updateScore();
  }
  this._rollNumber = this._currentFrame.rollNumber();
};

Scorecard.prototype.updateScore = function(){
  // Iterates through incomplete frames
  // Adds bonuses.
  // Adds score of completed frames to _score
  // Moves completed frames to _completedFrames array
};

Scorecard.prototype.nextFrame = function(){
  // Moves current frame to incomplete frames array.
  // Checks if we are at the end stage of the game.
  // Creates a new frame and sets it as the current frame.
};
