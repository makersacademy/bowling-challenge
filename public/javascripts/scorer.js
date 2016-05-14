"use strict";
function Scorer() {
  this.rolls            = [];
  this.frameScores      = [];
  this.totalScore       = 0;
  this.lastBallRolled   = 0;
  this.firstBallInFrame = 0;
  this.lastFrameNumber  = 10;
  this.rollingFrame     = 1;
  this.state            = "BALL_1";
}

Scorer.prototype.roll = function(b) {
  this.rolls.push(b);
  switch(this.state){
    case "BALL_1":
      this.ball_1(b);
      break;
    case "BALL_2":
      this.rollingFrame += 1;
      this.ball_2(b);
      break;
    case "STRIKE_1":
      this.strike_1(b);
      break;
    case "STRIKES_X2":
      this.addScoreInFrame(20 + b);
      this.strike_x2(b);
      break;
    case "STRIKE_2":
      this.addScoreInFrame(this.firstBallInFrame + 10 + b);
      this.rollingFrame += 1;
      this.strike_2(b);
      break;
    case "SPARE_1":
      this.addScoreInFrame(10 + b);
      this.spare_1(b);
      break;
  }
  return this.frameScores;
};

Scorer.prototype.ball_1 = function(b) {
  if (b < 10) {
    this.firstBallInFrame = b;
    this.state = "BALL_2";
  } else {
    this.rollingFrame += 1;
    this.state = "STRIKE_1";
  }
};

Scorer.prototype.ball_2 = function(b) {
  if (this.firstBallInFrame + b == 10) {
    this.state = "SPARE_1";
  } else {
    this.addScoreInFrame(this.firstBallInFrame + b);
    this.state = "BALL_1";
  }
};

Scorer.prototype.strike_1 = function(b) {
  if (b == 10) {
    this.rollingFrame += 1;
    this.state = "STRIKES_X2";
  } else {
    this.firstBallInFrame = b;
    this.state = "STRIKE_2";
  }
};

Scorer.prototype.strike_x2 = function(b) {
  if (b == 10) {
    this.rollingFrame += 1;
  } else {
    this.firstBallInFrame = b;
    this.state = "STRIKE_2";
  }
};

Scorer.prototype.strike_2 = function(b) {
  if (this.firstBallInFrame + b == 10) {
    this.state = "SPARE_1";
  } else {
    this.addScoreInFrame(this.firstBallInFrame + b);
    this.state = "BALL_1";
  }
};

Scorer.prototype.spare_1 = function(b) {
  if (b < 10) {
    this.firstBallInFrame = b;
    this.state = "BALL_2";
  } else {
    this.rollingFrame += 1;
    this.state = "STRIKE_1";
  }
};

Scorer.prototype.addScoreInFrame = function(value) {
  if (this.frameScores.length < this.lastFrameNumber) {
    this.totalScore += value;
    this.frameScores.push(this.totalScore);
  }
};
