'use strict';

var Frame = require('../src/frame');

var Game = function(){
  this._frames = [];
  this._score = 0;
};

Game.prototype.addFrame = function (index, frame = new Frame()) {
  if(index !== 0 && this._frames[index-1].isStrike()){
    this._frames.push(frame);
    this._frames[index].addBonus(2);
  }else if(index !== 0 && this._frames[index-1].isSpare()){
    this._frames.push(frame);
    this._frames[index].addBonus(1);
  }else{
    this._frames.push(frame);
  }
};

Game.prototype.addScore = function(index){
  var score = this._frames[index].finalScore();
  this._score += score;
};

Game.prototype.finalScore = function(){
  return this._score;
};

Game.prototype.frame = function(index){
  return this._frames[index];
};
