'use strict';

function BowlingScore() {
  this.score = 0;
  this.scoreArray = [];
  this.frame1 = new Frame(1);
  this.frame1Score = this.frame1.getFrameScore();
  this.updateScoreArray(this.frame1Score);
  this.updateGameScore(this.scoreArray)
  };

  BowlingScore.prototype.getCurrentScore = function() {
    return this.score;
  };

  BowlingScore.prototype.getFrame = function() {
    return this.frame;
  };

  BowlingScore.prototype.updateScoreArray = function(frameScore) {
    for (var i = 0; i < frameScore.length; i++) {
      if(frameScore[i] === 'X' || frameScore[i] === '/' || Number.isInteger(frameScore[i])) {
        this.scoreArray.push(frameScore[i]);
      };
    };
  };

  BowlingScore.prototype.updateGameScore = function(scoreArray) {
    for (var i = 0; i < scoreArray.length; i++) {
      if(scoreArray[i] === 'X') {
        this.score += 10;
        this.score += scoreArray[i+1];
        this.score += scoreArray[i+2];
      };
      if(scoreArray[i] === '/') {
        this.score += 10;
        this.score -= scoreArray[i-1];
        this.score += scoreArray[i+1];
      };
      if(Number.isInteger(scoreArray[i])) {
        this.score += scoreArray[i];
      };
    };
  };



function Frame(num) {
  this.frameNum = num;
  this.createRoll1();
  this.createRoll2(); 
  this.createRoll3();
};

  Frame.prototype.createRoll1 = function() {
    this.roll1 = new Roll;
  };

  Frame.prototype.createRoll2 = function() {
    if (this.roll1.getRollScore() < 10) {
      this.roll2 = new Roll;
    };
  };

  Frame.prototype.createRoll3 = function() {
    if (this.frameNum === 10 && this.roll1.getRollScore() + this.roll2.getRollScore() > 9) {
      this.roll3 = new Roll;
    };
  };

  Frame.prototype.getFrameNum = function() {
    return this.frameNum;
  };

  Frame.prototype.getFrameScore = function () {
    this.SetFrameVariables();
    this.getScoreFrame10();
    this.getScoreStrike();
    this.getScoreSpare();
    this.getScoreBasic();
    this.pushScoreToFrame();
    return this.frameScore;
  };

  Frame.prototype.SetFrameVariables = function() {
    this.frameScore = [];
    this.frameScoreA;
    this.frameScoreB;
    this.frameScoreC;
  };

  Frame.prototype.getScoreFrame10 = function() {
    if (this.getFrameNum() === 10 && this.roll1.getRollScore() + this.roll2.getRollScore() > 9) {
      this.frameScoreA = this.roll1.getRollScore();
      this.frameScoreB = this.roll2.getRollScore();
      this.frameScoreC = this.roll3.getRollScore();
    };
  };

  Frame.prototype.getScoreStrike = function() {
    if (this.roll1.getRollScore() === 10) {
      this.frameScoreA = '';
      this.frameScoreB = 'X';
      this.frameScoreC = '';
    };
  };

  Frame.prototype.getScoreSpare = function() {
    if (this.roll1.getRollScore() + this.roll2.getRollScore() === 10) {
      this.frameScoreA = this.roll1.getRollScore;
      this.frameScoreB = '/';
      this.frameScoreC = '';
    };
  };
  
  Frame.prototype.getScoreBasic = function() {
    if (this.roll1.getRollScore() + this.roll2.getRollScore() < 10) {
      this.frameScoreA = this.roll1.getRollScore();
      this.frameScoreB = this.roll2.getRollScore();
      this.frameScoreC = '';
    };
  };

  Frame.prototype.pushScoreToFrame = function() {
    this.frameScore.push(this.frameScoreA);
    this.frameScore.push(this.frameScoreB);
    this.frameScore.push(this.frameScoreC);
  };



function Roll(user_input = 0) {
  this.rollScore = user_input;
};

  Roll.prototype.getRollScore = function() {
      return this.rollScore;
  };