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

Game.prototype._playNewFrame = function(){
  newFrame.playFrame();
  this._frameResults.push(newFrame._results)
};

Game.prototype._getNewFrameRegularResult = function(newFrame){
  this._frameScore.push(newFrame.getRegularScore());
};

Game.prototype._getNewFrameBonusResult = function(newFrame){
  var bonusScore;
  if (this._frameScore.length > 1 && this._lastStrikeValue === "yes"){
    bonusScore = newFrame.getStrikeBonusScore();
    this._frameScore[this._frameScore.length-2] += bonusScore;
  } else if (this._frameScore.length > 1 && this._lastSpareValue === "yes"){
    bonusScore = newFrame.getSpareBonusScore();
    this._frameScore[this._frameScore.length-2] += bonusScore;
  } else {
    bonusScore = 0
  }
  return bonusScore;
};

Game.prototype._updateLastGameResults = function (newFrame){
  this._frameScore[this._frameScore.length-1] += newFrame._results[newFrame._results.length-1]
}

Game.prototype._getStrikeAndSpareStatus = function (newFrame) {
  this._lastStrikeValue = newFrame._strike;
  this._lastSpareValue = newFrame._spare;
};

Game.prototype._finalScore = function(frameResults){
  var sum = 0;
  frameResults.forEach(function(score){
    sum += score;
  });
  return sum;
};

Game.prototype.playEntireGame = function () {
  for(var i=1;i<=10;i++){
    var newFrame = this.createNewFrame();
    this._playNewFrame(newFrame);
    if (i===newFrame.INITIALNUMBERPINS && newFrame.getStrikeStatus()==="yes"){
      var additionaFrame = this.createNewFrame();
      additionaFrame.lastGameAdditionalsWhenStrike();
      newFrame._results = newFrame._results.concat(additionaFrame._results);
    }
    if (i===newFrame.INITIALNUMBERPINS && newFrame.getSpareStatus()==="yes"){
      var additionaFrame = this.createNewFrame();
      additionaFrame.lastGameAdditionalsWhenSpare();
      newFrame._results = newFrame._results.concat(additionaFrame._results);
    }
    this._getNewFrameRegularResult(newFrame);
    this._getNewFrameBonusResult(newFrame);
    this._getStrikeAndSpareStatus(newFrame);
  }
};
