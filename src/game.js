'use strict';

function Game() {
  this.currentFrame = []
  this.allFrames= []
  this.frameByFrameScore = []
  this.frameScore = 0
  this.totalScore = 0
  this.total = 0
  this.bowlCount = 2
  this.frameCount = 0
};

Game.prototype.bowl = function(num){
  this.frameScore += num
  this.currentFrame.push(num)
  this.bowlCount -= 1
  if(this.bowlCount === 0){
    this.endFrame(this.currentFrame);
    this.bowlCount = 2
  }
};

Game.prototype.endFrame = function(frame){
  this.allFrames.push(frame)
  this.frameTotal();
  this.currentFrame = []
  this.frameCount += 1
};

Game.prototype.frameTotal = function(){
  var frameScore = 0
  for (var i = 0; i < this.currentFrame.length; i++) {
    frameScore += this.currentFrame[i]  }
    this.frameByFrameScore.push(frameScore)
};

Game.prototype.calculateScore = function(array){
  this.total = 0
  for ( var i = 0; i < array.length; this.total += array[i++]){
  }
  return this.total
};

Game.prototype.calcScore = function(array){
  this.totalScore = 0
  var arr1 = [].concat.apply([], this.allFrames);
  for ( var i = 0; i < arr1.length; this.totalScore += arr1[i++]){
    }
    return this.totalScore
};
