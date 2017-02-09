function Game(){
  'use strict';
  this._lastStrikeValue="no"
  this._lastSpareValue="no"
  this._frameNumber=0
  this._frameResults=[]
  this._frameScore=[]
}

Game.prototype.createNewFrame = function () {
  var frame = new Frame();
  this._frameNumber += 1
  return frame;
};

Game.prototype._getFrameRegularResult = function(frame){
  this._frameScore.push(frame.getRegularScore());
};

Game.prototype._getFrameBonusResult = function(frame){
  var bonusScore = 0
  if (this._frameScore.length > 1 && this._lastStrikeValue === "yes"){
    bonusScore = frame.getStrikeBonusScore();
    this._frameScore[this._frameScore.length-2] += bonusScore;
  } else if (this._frameScore.length > 1 && this._lastSpareValue === "yes"){
    bonusScore = frame.getSpareBonusScore();
    this._frameScore[this._frameScore.length-2] += bonusScore;
  }
};

Game.prototype._updateLastGameResults = function (frame){

  this._frameScore[this._frameScore.length-1] += frame._results[frame._results.length-1]
}

Game.prototype._getStrikeAndSpareStatus = function (frame) {
  this._lastStrikeValue = frame._strike;
  this._lastSpareValue = frame._spare;
};

Game.prototype._finalScore = function(frameResults){
  var sum = 0;
  frameResults.forEach(function(score){
    sum += score;
  });
  return sum;
};
