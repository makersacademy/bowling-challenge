'use strict';

function Game(player) {
  this.player = player;
  this.frameCount = 0;
  this.frames = [];
  this._newFrame();
};

Game.prototype.bowl = function(score) {
  this._checkFrame();
  return this.player.throwBall(this._getCurrentFrame());
};

Game.prototype.getScore = function () {
  var total = 0, ballArray = this._getAllBalls();
  this.frames.forEach(function(element, index, array){
    total += Number(element.getFrameScore(ballArray[index + 1],ballArray[index + 2]));
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
  this.frames.forEach(function(element, index, array){
    element.balls.forEach(function(ball, index, array){
      balls.push(ball);
    });
  });
  return balls;
};

Game.prototype._getFrameBalls = function () {
  var frameBalls = [];
  this.frames.forEach(function(element, index, array){
    frameBalls.push(element.balls);
  });
  return frameBalls;
};

Game.prototype._getCurrentFrame = function () {
  return this.currentFrame;
};

Game.prototype._checkFrame = function(){
  if(this._getCurrentFrame().isComplete()){
    this._newFrame();
  };
};

Game.prototype._newFrame = function () {
  if(typeof this._getCurrentFrame() !== 'undefined'){
    this.frames.push(this._getCurrentFrame());
  }
  this.currentFrame = new Frame(this.frames.length + 1);
};
