'use strict';

function Scorecard() {
  this.currentScore = 0;
  this.currentFrame = [];
  this.currentGame = [];
  this.frame = 1;
  this.rollNumber = 0;
  this.spare = false;
  this.strike = 0;
  this.bonusRoll = false;
  this.gameOver = false;
}

Scorecard.prototype.start = function () {
  this.gameOver = false;
}

Scorecard.prototype.addRoll = function (number) {

  if (!this.gameOver) {

    if (this.strike > 0) {
      this.currentScore += number;
      this.strike--;
      this.rollNumber++;
    }

    this.checkForIllegalInputs(number);

    if (this.frame === 10) {
      this.theTenthFrame(number);
      this.rollNumber++;
    } else if (number < 10) {
      this.currentFrame.push(number);
      this.rollNumber++;
      if (this.currentFrame.length === 2) {
        this.endTheFrame();
      }
    } else if (number === 10) {
      this.currentFrame.push(number);
      this.setStrikeStatus();
      this.endTheFrame();
      this.rollNumber++;
    }
  }
}

Scorecard.prototype.endTheFrame = function () {
  this.checkForSpare();
  if (this.currentFrameSum() === 10 && this.currentFrame[0] != 10) {
    this.setSpareStatus();
  }
  this.pushFrameToGame();
  this.calcCurrentScore();
  this.currentFrame = [];
  this.frame++
}

Scorecard.prototype.checkForSpare = function () {
  if (this.wasLastFrameSpare()) {
    this.currentScore += this.currentFrame[0]
    this.spare = false;
  }
}

Scorecard.prototype.checkForStrike = function () {
  if (this.strike > 0) {
    this.currentScore += this.currentFrame[0];
    this.strike--;
    if (this.currentFrame[0] != 10) {
      this.currentScore += this.currentFrame[1];
      this.strike--;
    }
  }
}

Scorecard.prototype.setStrikeStatus = function () {
  this.strike += 2;
}

Scorecard.prototype.setSpareStatus = function () {
  this.spare = true;
}

Scorecard.prototype.pushFrameToGame = function () {
  if (this.currentFrame[0] === 10) {
    this.currentGame.push(this.currentFrame[0]);
  } else {
    this.currentGame.push(new Array(this.currentFrame[0], this.currentFrame[1]));
  }
}

Scorecard.prototype.calcCurrentScore = function () {
  var frameSum = 0;

  this.currentFrame.map(function (i) {
    frameSum += i;
  });

  this.currentScore += frameSum;
}

Scorecard.prototype.pushTenthFrameToGame = function () {
  this.currentGame.push(new Array(this.currentFrame[0], this.currentFrame[1], this.currentFrame[2]));
}

Scorecard.prototype.wasLastFrameSpare = function () {
  return this.spare;
}

Scorecard.prototype.wasLastFrameStrike = function () {
  return this.strike;
}

Scorecard.prototype.currentFrameSum = function () {
  return this.currentFrame[0] + this.currentFrame[1]
}

Scorecard.prototype.theTenthFrame = function (number) {

  if (this.bonusRoll && this.currentFrame.length <= 3) {
    this.pushToFrame(number);
  } else if (number === 10 && this.currentFrame.length < 3) {
    this.pushToFrame(number);
    this.bonusRoll = true;
  } else if (this.currentFrame[0] + number === 10) {
    this.pushToFrame(number);
    this.bonusRoll = true;
  } else if (this.currentFrame.length < 2) {
    this.pushToFrame(number);
  } else {
    this.endGame();
  }

}

Scorecard.prototype.endGame = function () {
  this.checkForSpare();
  this.calcCurrentScore();
  if (this.bonusRoll) this.pushTenthFrameToGame();
  if (!this.bonusRoll) this.pushFrameToGame();
  this.setSpareStatus();
  this.currentFrame = [];
  this.bonusRoll = false;
  this.gameOver = true;
}

Scorecard.prototype.pushToFrame = function (number) {
  this.currentFrame.push(number);
  this.currentScore += number;
}

Scorecard.prototype.rollTooHighError = function (number) {
  throw new Error(`This is 10-pin bowling, not ${number}-pin bowling!`)
}

Scorecard.prototype.frameTooHighError = function () {
  throw new Error("Stop cheating...there aren't even that many pins!");
}

Scorecard.prototype.checkForIllegalInputs = function (number) {
  if (number > 10) this.rollTooHighError(number);
    if (this.currentFrame.length > 0 && this.frame != 10) {
      if (number + this.currentFrame[0] > 10) this.frameTooHighError();
    }
}