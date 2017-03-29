'use strict';

function Game() {
  this.frames = [];
  this._createFrame();
  this.complete = false;
};

Game.prototype.bowl = function(score) {
  this._checkFinished();
  this._checkFrame();
  if(this.complete === true){
    throw "You cannot bowl again! The game is finished.";
  }
  this._getCurrentFrame().addBall(score);
};

Game.prototype.getScore = function () {
  var total = 0, ballArray = this._getAllBalls(), ballCount = 0;
  this.frames.forEach(function(frame){
    ballCount += frame.balls.length;
    var ballOne = ballArray[ballCount], ballTwo = ballArray[ballCount + 1];
    total += Number(frame.getFrameScore(ballOne,ballTwo));
  });
  return total;
};

Game.prototype.gameComplete = function () {
  return this.complete;
};

Game.prototype.wasGutterGame = function (score) {
  return score === 0 ? true : false;
};

Game.prototype.wasPerfect = function (score) {
  return score === 300 ? true : false;
};

Game.prototype._getAllBalls = function () {
  var balls = [];
  this.frames.forEach(function(frame){
    frame.balls.forEach(function(ball){
      balls.push(ball);
    });
  });
  return balls;
};

Game.prototype._getFrameBalls = function () {
  var frameBalls = [];
  this.frames.forEach(function(frame){
    frameBalls.push(frame.balls);
  });
  return frameBalls;
};

Game.prototype._getCurrentFrame = function () {
  return this.frames[this.frames.length -1];
};

Game.prototype._checkFrame = function(){
  if(this._getCurrentFrame().isComplete() && !this.gameComplete()){
    this._createFrame();
  };
};

Game.prototype._checkFinished = function(){
  if(this.frames.length === 10 && this.frames[this.frames.length -1].isComplete()){
    return this.complete = true;
  }
}

Game.prototype._pushFrame = function (frame) {
  this.frames.push(frame);
};

Game.prototype._createFrame = function () {
  this._pushFrame(new Frame(this.frames.length + 1));
};
