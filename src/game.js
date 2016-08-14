'use strict';
/* globals Frame */

function Game() {
  this.maxFrames = 10;
  this.frames = [];
}

Game.prototype.addFrame = function(frame) {
    this.frames.push(frame);
}

Game.prototype.run = function() {
  if(this.getFrameCount() < 9) {
    var currentframe = new Frame();
    this.addFrame(currentframe);
    currentframe.run();
  }

  if(this.frames.length > 1) {
    this.calculateStrikeBonus(this.frames.length - 1);
    this.calculateSpareBonus(this.frames.length - 1);
  }
}

Game.prototype.frameTotal = function(num) {
  return this.frames[num].calculateScore();
}

Game.prototype.calculateStrikeBonus = function(num) {
  if(this.frames[num].isStrike()) {
    this.frames[num].score[0] += this.frames[num+1].calculateScore();
  }
}

Game.prototype.calculateSpareBonus = function(num) {
  if(this.frames[num].isSpare()){
    // console.log(this.frames[num]);
    // console.log(num);
    // console.log(this.frames);
    this.frames[num].score[0] += this.frames[num+1].getFirstScore();
  }
}

Game.prototype.calculateTotalScore = function() {
  var total = 0;
  for(var i = 0; i < this.frames.length; i++){
    total += this.frames[i].calculateScore();
  }
  return total;
}

Game.prototype.getFrameCount = function() {
  return this.frames.length;
}
