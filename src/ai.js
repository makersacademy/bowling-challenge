"use strict";

// The Ai is responsible for socially interacting with the player

function Ai() {
  this.sassyMessages = [
                        'Frame Over',
                        'You keep your ball polished?!',
                        'King Pin!',
                        'Bowling is right up your alley',
                        'Spare me the details...',
                        'Leave no pin standing!',
                        'Lord of Pinterfell!'
                      ]
}

Array.prototype.sample = function(){
  return this[Math.floor(Math.random()*this.length)];
}

Ai.prototype.sassPlayer = function() {
  var message =  this.sassyMessages.sample();
  return message;
}
