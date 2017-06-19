'use strict';
var Frame = require('./frame');

function Game() {
  this.MAXFRAMES = 10;
  this.score = 0;
  this.frames = [];
}

Game.prototype.roll = function(bowl) {
  if (this.frames.length < 1) {
    this.newFrame();
  }
  var currentFrame = this.getCurrentFrame();
  currentFrame.addRoll(bowl);
};

Game.prototype.newFrame = function() {
  if (this.frames.length >= this.MAXFRAMES) throw new Error('No new rolls allowed');
  this.frames.push(new Frame());
};

Game.prototype.getCurrentFrame = function(){
  if (this.frames[this.frames.length-1].isComplete()){
    this.newFrame();
  }
  return this.frames[this.frames.length-1];
};

Game.prototype.totalScore = function(){
  var score = 0;
  for(var i = 0; i < this.frames.length; i++){
    score += this.frames[i].score();
  }
  return score;
};

module.exports = Game;
