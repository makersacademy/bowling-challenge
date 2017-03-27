'use strict';

function Game(player) {
  this.player = player;
  this.frames = [];
  this.currentFrame = new Frame(1);
  this.complete = false;
};

Game.prototype.bowl = function() {
  this._checkFinished();
  this._checkFrame();

  if(this.complete === true){
    throw "You cannot bowl again! The game is finished.";
  }
  return this.player.throwBall(this._getCurrentFrame());
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
  return this.currentFrame;
};

Game.prototype._checkFrame = function(){
  if(this._getCurrentFrame().isComplete() && !this.complete){
    this._getNewFrame();
  };
};

Game.prototype._checkFinished = function(){
  if(this.frames.length === 10 && this.frames[9].isComplete()){
    this.complete = true;
  }
  return this.complete;
}

Game.prototype._getNewFrame = function () {
  this.frames.push(this._getCurrentFrame());
  this.currentFrame = new Frame(this.frames.length + 1);
};
