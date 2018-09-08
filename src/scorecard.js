function Scorecard() {
  this.currentScore = 0;
  this.currentFrame = [];
  this.currentGame = [];
  this.frame = 1;
  this.spare = false;
  this.strike = false;
  this.bonusRoll = false;
}

Scorecard.prototype.addRoll = function (number) {

  if (number > 10) throw new Error(`This is 10-pin bowling, not ${number}-pin bowling!`)

  if (this.frame === 9) {
    this.theTenthFrame(number);
  } else if (number < 10) {
    this.currentFrame.push(number);
    if (this.currentFrame.length === 2) {
      this.endTheFrame();
    }
  } else if (number === 10) {
    this.currentFrame.push(number);
    this.endTheFrame();
  }
}

Scorecard.prototype.calcCurrentScore = function () {
  var frameSum = 0;

  this.currentFrame.map(function (i) {
    frameSum += i;
  });

  this.currentScore += frameSum;
}

Scorecard.prototype.pushFrameToGame = function () {
  this.currentGame.push(new Array(this.currentFrame[0], this.currentFrame[1]));
}

Scorecard.prototype.wasLastFrameSpare = function () {
  return this.spare;
}

Scorecard.prototype.wasLastFrameStrike = function () {
  return this.strike;
}

Scorecard.prototype.endTheFrame = function () {

  this.checkForSpare();
  this.checkForStrike();
  this.calcCurrentScore();
  this.pushFrameToGame();
  this.setStrikeStatus();
  this.setSpareStatus();
  this.currentFrame = [];
  this.frame++
}

Scorecard.prototype.currentFrameSum = function () {
  return this.currentFrame[0] + this.currentFrame[1]
}

Scorecard.prototype.checkForSpare = function () {
  if (this.wasLastFrameSpare()) {
    this.currentScore += this.currentFrame[0]
    this.spare = false;
  }
}

Scorecard.prototype.setSpareStatus = function () {
  if (this.currentFrameSum() === 10) {
    this.spare = true;
  }
}

Scorecard.prototype.checkForStrike = function () {
  if (this.wasLastFrameStrike()) {
    this.currentScore += this.currentFrame[0];
    this.currentScore += this.currentFrame[1];
    this.strike = false;
  }
}

Scorecard.prototype.setStrikeStatus = function () {
  if (this.currentFrame[0] === 10) {
    this.strike = true;
  }
}

Scorecard.prototype.theTenthFrame = function (number) {

  // if bonusRoll equals true
  if (this.bonusRoll) {
    // push number to frame
    this.currentFrame.push(number);
    // calculate score
    this.currentGame.push(new Array(this.currentFrame[0], this.currentFrame[1], this.currentFrame[2]));
    this.calcCurrentScore();
    // set bonusRoll to false
    this.bonusRoll = false;
  } else if (number === 10) {
    // set Strike status to true
    this.Strike = true;
    // set bonusRoll to true
    this.bonusRoll = true;
    // push number to frame
    this.currentFrame.push(number);
  } else {
    // push number to frame
    this.currentFrame.push(number)
    // if currentFrame equals 10
    if (this.currentFrame.length === 2 && this.currentFrameSum() === 10) {
      // set Spare status to true
      this.spare = true;
      // set bonusRoll to true
      this.bonusRoll = true;
    } else {
      this.endTheFrame();
    }
  }








  // if (number < 10) {
  //   this.currentFrame.push(number);
  //   if (this.currentFrame.length === 2) {
  //     this.endTheFrame();
  //   }
  // } else if (number === 10) {
  //   this.currentFrame.push(number);
  //   this.endTheFrame();
  // }
}