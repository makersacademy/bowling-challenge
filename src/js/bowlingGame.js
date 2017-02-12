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

Game.prototype.getFrameRegularResult = function(frame){
  this._frameScore.push(frame._getRegularScore());
};

Game.prototype.getFrameBonusResult = function(frame){
  var bonusScore = 0
  if (this._frameScore.length > 1 && this._lastStrikeValue === "yes"){
    bonusScore = frame._getStrikeBonusScore();
    this._frameScore[this._frameScore.length-2] += bonusScore;
  } else if (this._frameScore.length > 1 && this._lastSpareValue === "yes"){
    bonusScore = frame._getSpareBonusScore();
    this._frameScore[this._frameScore.length-2] += bonusScore;
  }
};

Game.prototype.updateLastGameResults = function (frame){
  this._frameScore[this._frameScore.length-1] += frame._results[frame._results.length-1]
}

Game.prototype.saveLastGameStrikeSpareStatus = function (frame) {
  this._lastStrikeValue = frame.getStrikeStatus();
  this._lastSpareValue = frame.getSpareStatus();
};

Game.prototype._finalScore = function(frameResults){
  var sum = 0;
  frameResults.forEach(function(result){
    sum += result;
  });
  return sum;
};
