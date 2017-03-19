'use strict';

function Game(player) {
  this.player = player;
  this.frameCount = 0;
  this.frames = [];
  this.newFrame();
  this.scoreCard = new ScoreCard();
};

Game.prototype.getCurrentFrame = function () {
  return this.currentFrame;
};

Game.prototype.newFrame = function () {
  if(typeof this.getCurrentFrame() !== 'undefined'){
    this.frames.push(this.getCurrentFrame());
  }
  return this.currentFrame = new Frame();
};

Game.prototype.bowl = function() {
  this._checkFrame();
  var score = this.player.throwBall();
  this.getCurrentFrame().addBall(score);
};


Game.prototype.getScore = function () {
  return this.scoreCard.getTotalScore(this.frames);
};

Game.prototype.getAllBalls = function () {
  var ballArray = [];
  this.frames.forEach(function(element,index,array){
    element.balls.forEach(function(){
      ballArray.push(element);
    });
  });
  return ballArray;
};

Game.prototype._checkFrame = function(){
  if(this.getCurrentFrame().isComplete){
    this.newFrame();
  };


}
