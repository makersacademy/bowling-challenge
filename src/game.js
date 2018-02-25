'use strict';

function Game() {
  this.test = "test";
  this.frameList = [];
  this.totalScore = 0;
};

Game.prototype.calculateScore = function() {
  this.frameList.forEach(function (frame){
    this.totalScore += frame.frameScore;
  });
};