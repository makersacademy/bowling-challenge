"use strict";

function Bowling() {
  this.game = [];
}

Bowling.prototype.play = function(pins) {
  this.game.push(pins)
}

Bowling.prototype.score = function() {
  var roundScore = 0;
  var rolls = 0;

  for (var frames = 0; frames < 10; frames++) {

    if (this.game[rolls] === 10) {
      roundScore += this.game[rolls] + this.game[rolls + 1] + this.game[rolls + 2];
      rolls ++;

    } else if (this.game[rolls] + this.game[rolls + 1] === 10) {
      roundScore += this.game[rolls] + this.game[rolls + 1] + this.game[rolls + 2];
      rolls += 2;
    
    } else {
      roundScore += this.game[rolls] + this.game[rolls + 1]; 
      rolls += 2;
      }
  }
  return roundScore;
}

Bowling.prototype.currentScore = function() {
  var currentScore = 0;
  for (var i = 0; i < this.game.length; i++) {
    currentScore += this.game[i];
  }
  return currentScore;
}


Bowling.prototype.isStrike = function() {
  (this.game[rolls] === 10)
}

Bowling.prototype.isSpare = function() {
  (this.game[rolls] + this.game[rolls + 1] === 10)
}

Bowling.prototype.strikeSpareScore = function() {
  (roundScore += this.game[rolls] + this.game[rolls + 1] + this.game[rolls + 2])
}

Bowling.prototype.normalScore = function() {
  (roundScore += this.game[rolls] + this.game[rolls + 1])
}