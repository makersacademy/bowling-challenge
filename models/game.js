'use strict';

function Game(player) {
  this.player = player;
  this.frameCount = 0;
  this.frames = [];
  this.newFrame();
};

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame;
};

Game.prototype.newFrame = function () {
  if(typeof this.getCurrentFrame() !== 'undefined'){
    this.frames.push(this.getCurrentFrame());
  }
  this.currentFrame = new Frame();
};

Game.prototype.bowl = function() {
  this._checkFrame();
  var score = this.player.throwBall();
  this.getCurrentFrame().addBall(score);
};

Game.prototype.wasGutterGame = function (score) {
  return score === 0 ? true : false;
};

Game.prototype.wasPerfect = function (score) {
  return score === 300 ? true : false;
};

Game.prototype.getScore = function () {
  var total, bonus = 0;
  var bonusOne = 0;
  var bonusTwo = 0;
  this.frames.forEach(function(element,index,array){
    total += Number(element.getFrameScore());
  });
  return total;
};

Game.prototype._checkFrame = function(){
  if(this.getCurrentFrame().isComplete){
    this.newFrame();
  };
};
