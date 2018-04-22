'use strict';
function Bowling() {
  this.totalScore = 0;
  this.currentFrameScore = 0;
  this.frameCount = 1;
  this.frameRoll = 1;
};

Bowling.prototype.validScore = (function(score) {
  if((score > 0) && (score < 10)) {
    this.currentFrameScore += score;
    this.frameRoll += 1;
    this.totalScore += this.currentFrameScore;

  } else if (score == 10){

    this.displayNote('strike');
    this.applyBonus('strike');

    

  } else if (score == 0) {
    this.displayNote('gutter');
  } else {
    throw new Error ('Wrong score number')
  };
  
});

Bowling.prototype.validScoreSecondMove = (function (score) {
  var limit = 10 - (this.currentScore);
  if((score < limit) || (score > limit)) {
    this.currentFrameScore += score;
    this.totalScore += this.currentFrameScore;
    this.currentFrameScore = 0;
    this.frameRoll -= 1;
  } else if(score == limit) { displayNote('spare');
    this.currentBonus += 1;
    this.frameRoll -= 1;
  } else if (score == 0) {
    displayNote('gutter');
    this.frameRoll -= 1;
  } else {
    throw new Error('Wrong score number')

  }

});

Bowling.prototype.countScore = (function(score) {
  if (this.frameRoll == 1) {
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
  } else {
    return 'Bad luck you rolled a gutter ball';
  }
});

Bowling.prototype.applyBonus = (function (event) {
  if (event == 'strike'){
    this.frameRoll = 1;
    countScore(score);
  }
});
