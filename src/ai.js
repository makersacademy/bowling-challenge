"use strict";

// The Ai is responsible for socially interacting with the player

function Ai() {
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

Ai.prototype.gameOver = function() {
  var message =  sassyGameOverMessages.sample();
  return message;
}
