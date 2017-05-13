// var Frame = require('../src/frame')

function Game() {
  this.MAXIMUM_SCORE = 10;
  this.frames = [];
  this.frameNumber = 0;
  this.score = 0;
  var frameCounter = 0;
  var i


  this.newFrame = function() {
    var frame = new Frame();
    this.frames.splice(0,0,frame);
  }
}

Game.prototype.firstBall = function(pins) {
  this.nextRound();
  this.newFrame();
  this._currentFrame().firstRoll(pins);
}

Game.prototype.secondBall = function(pins) {
  this._currentFrame().secondRoll(pins);
}

Game.prototype.nextRound = function() {
  this.frameNumber++;
};

Game.prototype._currentFrame = function() {
  return this.frames[0];
}

Game.prototype._gameLength = function() {
  return this.frames.length - 1;
}

Game.prototype.scorer = function(){
  for(i=0; i <= this._gameLength(); i++){
    this.score += this.frames[i].score(this.frames[i+1],this.frames[i+2]);
  }
}
