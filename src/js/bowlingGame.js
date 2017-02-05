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

Game.prototype._playNewFrame = function(newFrame){
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
    // console.log("previous", this._frameScore[this._frameScore.length-2])
    // console.log("bonus", bonusScore)
    this._frameScore[this._frameScore.length-2] += bonusScore;
    // console.log(this._frameScore)
  } else {
    bonusScore = 0
  }
  // console.log("here",this._frameScore.length-2)
  return bonusScore;
};

Game.prototype._getStrikeAndSpareStatus = function () {
  this._lastStrikeValue = newFrame._strike;
  this._lastSpareValue = newFrame._spare;
};

Game.prototype.playEntireGame = function () {
  for(var i=1;i<=10;i++){
    var newFrame = this.createNewFrame();
    this._playNewFrame(newFrame);
    // console.log(newFrame._results)
    this._getNewFrameRegularResult(newFrame);
    this._getNewFrameBonusResult(newFrame);
    // this._getStrikeAndSpareStatus();
    // if (i=10 && newFrame.getStrikeStatus===true){
    //   this.lastGame(newFrame);
    // // }
  }
  console.log(this._frameScore)
};

Game.prototype.lastGame = function (lastFrame) {
  if (lastFrame.getStrikeStatus === true){
    var aditionalFrames = createNewFrame();
    aditionalFrames.lastGameAdditionalsWhenStrike(aditionalFrames);
    // console.log(aditionalFrames._results);
  }
};
