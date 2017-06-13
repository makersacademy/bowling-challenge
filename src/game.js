"use strict";

// The Game is responsible for handling scores

function Game() {
  this.scoreCard = [[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0, 0],[0]]
  this.turn = 0
}

var sassyGameOverMessages = ['Frame Over',
                            'Your ball needs a polish',
                            'King Pin!',
                            'Bowling is right up your alley',
                            'Spare me',
                            'Leave no pin standing',
                            'Lord of Pinterfell!']

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

Game.prototype.bowl = function(){
  var frame = new Frame();
  if (this.turn < 10) {
    frame.bowl();
    frame.bowl();
    this.scoreCard[this.turn] = frame.score;
    this.turn += 1;
  } else {
    this.turn = 'Game Over - ' + sassyGameOverMessages.sample();
  }
}
