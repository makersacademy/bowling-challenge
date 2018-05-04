'use strict';
function Bowling() {
  this.totalScore = 0;
  this.currentFrameScore = 0;
  this.frameCount = 1;
  this.frameRoll = 1;
  this.bonusRoll = 0;
  this.scoreLimit = 0;
  this.frameLimit = 10;
  this.note = "";
};

Bowling.prototype.validScore = (function(score) {
  if (this.frameRoll == 2) {
    this.validScoreSecondMove(score);
  } else if((score > 0) && (score < 10) && (this.frameRoll == "Bonus roll 1")) {
    this.currentFrameScore += score;
    this.scoreLimit = 10 - score;
    this.frameRoll = "Bonus roll 2";
    this.bonusRoll = 2;
    this.note = this.displayNote('');


  } else if((score > 0) && (score < 10)) {
    this.currentFrameScore += score;
    this.scoreLimit = 10 - score;
    this.frameRoll += 1;
    this.note = this.displayNote('');



  } else if ((score == 10) && (this.bonusRoll == 1)) {

    this.note = this.displayNote('strike');
    this.currentFrameScore += score;
    this.bonusRoll = 2;




  } else if (score == 10) {

    this.note = this.displayNote('strike');
    this.currentFrameScore += score;
    this.applyBonus('strike');






  } else if (score == 0) {
    this.note = this.displayNote('gutter');
  } else {
    throw new Error ('Wrong score number')
  };

});

Bowling.prototype.validScoreSecondMove = (function (score) {

  if((score <= this.scoreLimit) && (score > 0)) {
    this.currentFrameScore += score;
    this.totalScore += this.currentFrameScore;
    this.currentFrameScore = 0;
    this.bonusRoll = 0;
    this.frameCount += 1;
    this.frameRoll = 1;
  } else if(score == this.scoreLimit) { this.note = displayNote('spare');
    this.currentBonus += 1;
    this.frameRoll -= 1;
  } else if (score == 0) {
    this.note = displayNote('gutter');
    this.frameRoll -= 1;
  } else {
    throw new Error('Wrong score number')
    this.note = displayNote('that is not a valid score');

  }

});

Bowling.prototype.countScore = (function(score) {
  if (this.frameRoll == "Bonus roll 1") {
     this.validScore(score);

  } else if (this.bonusRoll == 2) {
    this.currentFrameScore += score;
    this.bonusRoll = 0;
    this.frameCount += 1;
    this.frameRoll = 1;
    this.countTotal(this.currentFrameScore);
  } else if (this.frameRoll == 1) {
    this.validScore(score);
  } else {
    this.validScoreSecondMove(score);
  };
  return this.currentFrameScore;
});

Bowling.prototype.countTotal = (function(score) {

    this.totalScore += this.currentFrameScore;


});



Bowling.prototype.displayNote = (function(string) {
  if (string == 'spare') {
    return 'Congratulations you scored a spare';
  }
  else if (string == 'strike') {
    return 'Congratulations you scored a strike!';
  } else if (string == 'gutter') {
    return 'Bad luck you rolled a gutter ball!';
  } else {
    return "";
  }
});

Bowling.prototype.applyBonus = (function (string) {
   if (string == 'strike') {
     this.frameRoll = "Bonus roll 1";
     this.bonusRoll = 1;





   }
});
