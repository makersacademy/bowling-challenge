Frame = function(){
   this._currentScore = 0;

  this._pins = 0;
  this._bowls = ['null', 'null'];
  this._bowlIndex = 0;
  this._nextFrame = null
  MAXIMUM_NUM = 10;

Frame.prototype.isFinal = function() {
  return false;
};

Frame.prototype.getCurrentScore = function(){
  return this._currentScore;
};

Frame.prototype.roll = function(pins) {
  this.rolls.push(pins);
};

Frame.prototype.getFrames = function(){
  this.frames[rollIndex] = roll1;
  this.frames[rollIndex + 1] = roll2;
  return frames;
};

Frame.prototype.getRollScore = function(roll1, roll2){
  this.frames[roll1] = roll1;
  this.frames[roll2] = roll2;
  var runningTotal = 0;
  var rollIndex = 0;
  var game = this;
}

Frame.prototype.firstBowl = function() {
  this._bowls[0] = this._bowlIndex;
  return this._bowls[0];
};
Frame.prototype.secondBowl = function() {
  if(this.isStrike()&& this_nextFrame) {
    return this._nextFrame.firstBowl();
  }
  return this._bowls[1];
};

Frame.prototype.canBowl = function() {
  return (this._bowlIndex < 2) && !this.isStrike;
  //return frames[this._bowls];
};

Frame.prototype.bowl = function() {
  frame = frame.getFrames();
  if(!frame.canBowl()){
    throw 'Frame cannot accept anathor bowl';
  }
  this._testPins(pins);
  if(this._bowlIndex > 0) {this.testFrameScore(pins);}
  this._bowls[this._bowlIndex] = pins;
  this._bowlIndex += 1;
  return this;
};


};
