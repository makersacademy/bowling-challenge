"use strict";

// The Game is responsible for handling scores

function Game() {
  this.scoreCard = [[0,0], // 1st frame
                    [0,0], // 2nd frame
                    [0,0], // 3rd frame
                    [0,0], // 4th frame
                    [0,0], // 5th frame
                    [0,0], // 6th frame
                    [0,0], // 7th frame
                    [0,0], // 8th frame
                    [0,0], // 9th frame
                    [0,0], // 10th frame
                    [0]]    // Extra ball
  this.frame = 0
  // this.score = 0
}

Game.prototype.incrementFrame = function(){
  if (this.frame < 10) {
    this.frame += 1;
  } else {
    return 'Game Over'
  }
}

Game.prototype.addFrameScore = function(pins){
  this.scoreCard[this.frame] = pins;
}

Game.prototype.sumScores = function() {
  var scoreCard = this.scoreCard;
  var score = 0
  for (var i = 0; i < scoreCard.length-1; i++ ) {
    score += scoreCard[i][0] + scoreCard[i][1];
  }
  return score + scoreCard[10][0];
}
