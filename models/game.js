'use strict';

function Game(player) {
  this.player = player;
  this.frameCount = 0;
  this.frames = [];
  this.newFrame();
};

Game.prototype.newFrame = function () {
  if(typeof this._getCurrentFrame() !== 'undefined'){
    this.frames.push(this._getCurrentFrame());
  }
  this.currentFrame = new Frame();
};

Game.prototype.bowl = function() {
  this._checkFrame();
  return this.player.throwBall(this._getCurrentFrame());
};

Game.prototype.wasGutterGame = function (score) {
  return score === 0 ? true : false;
};

Game.prototype.wasPerfect = function (score) {
  return score === 300 ? true : false;
};

Game.prototype.getScore = function () {
  var total = 0, ballCurrent = 1;
  var ballArray = this._getAllBalls();
  this.frames.forEach(function(element,index,array){
    total += Number(element.getFrameScore(ballArray[ballCurrent + 1],ballArray[ballCurrent + 2]));
    ballCurrent++;
  });
  return total;
};

Game.prototype._getAllBalls = function () {
  var balls = [];
  this.frames.forEach(function(element, index,array){
    element.balls.forEach(function(ball, index, array){
      balls.push(ball);
    });
  });
  return balls;
};

Game.prototype._getCurrentFrame = function () {
  return this.currentFrame;
};

Game.prototype._checkFrame = function(){
  if(this._getCurrentFrame().isComplete){
    this.newFrame();
  };
};
