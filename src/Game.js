/*jshint esversion: 6 */

function Game(){
  this.frames = []
}

Game.prototype.totalScore = function(){
  return this.frames.reduce(function(total,currentFrame,currentIndex,allFrames){
    var remainingFrames = allFrames.slice(currentIndex);
    return total + this._evaluateFrame(currentFrame,remainingFrames);
  }.bind(this),0);
};

Game.prototype.play = function (frame) {
  this.frames.push(frame);
};

Game.prototype._evaluateFrame = function (frame,remainingFrames) {
  if(frame.isStrike()){
    return this._getStrikeScore(remainingFrames);
  }else if(frame.isSpare()){
    return this._getSpareScore(remainingFrames);
  }else{
    return this._getScore(frame);
  }
};

Game.prototype._getSpareScore = function (remainingFrames) {
  if(remainingFrames.length === 1){return 0}
  return 10 + remainingFrames[1].getRolls()[0];
};

Game.prototype._getStrikeScore = function (remainingFrames) {
  if(this._rollsToBeScored(remainingFrames)<3){return 0}
  var nextFrame = remainingFrames[1]
  var frameAfterNext = remainingFrames[2]
  return nextFrame.isStrike() ?
  20 + frameAfterNext.getRolls()[0] :
  10 + nextFrame.getRolls()[0] + nextFrame.getRolls()[1]
};

Game.prototype._getScore = function (frame) {
  return frame.getRolls().reduce((pv,cv) => pv + cv);
};

Game.prototype._rollsToBeScored = function (remainingFrames) {
  return remainingFrames.reduce((total,frame) => total +
  frame.getRolls().length,0);
};
