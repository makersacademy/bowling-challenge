'use strict';
function Bowling() {
  this.totalScore = 0;
  this.currentFrameScore = 0;
  this.currentBonus = 0;
  this.moveCount = 1;
  this.frameRoll = 1;
};

Bowling.prototype.validScore = (function(score) {
  if((score > 0) && (score < 10)) {
    this.currentFrameScore += score;
    this.totalScore += this.currentFrameScore

  } else if (score == 10){

    displayNote('strike');

    

  } else if (score == 0) {
    displayNote('gutter');
  } else {
    throw new Error ('Wrong score number')
  };
  
});

Bowling.prototype.validScoreSecondMove = (function (score) {
  var limit = 10 - (this.currentScore);
  if((score < limit) || (score > limit)) {
    this.currentFrameScore += score;
    this.totalScore += this.currentFrameScore
    this.currentFrameScore = 0;
  } else if(score == limit) { displayNote('spare');
    this.currentBonus += 1;
  } else if (score == 0) {
    displayNote('gutter');
  } else {
    throw new Error('Wrong score number')

  }

});

Bowling.prototype.countScore = (function(score) {
  if (this.currentFrameScore == 0) {
    this.validScore(score);
  } else {
    this.validScoreSecondMove(score);
  };
  return this.currentScore
});

Bowling.prototype.countTotal = (function(score) {
  //   this.totalScore += this.currentScore;
    this.totalScore += this.currentScore
  

});

Bowling.prototype.currentRoll = (function () {
  if (this.currentScore == 0) {
    return this.frameRoll;
  } else if (this.currentScore <= 10) {
    this.frameRoll = 2;
    return this.frameRoll;
  } else {
  };
});

Bowling.prototype.displayNote = (function(string) {
  if (string == 'spare') {
    return 'Congratulations you scored a spare';
  }
  else if (string == 'strike') {
    return 'Congratulations you scored a strike';
  } 
});

Bowling.prototype.Move = (function (score) {
  return this.moveCount;
});
