'use strict';

function Game() {
  this._rollsThisFrame = []
  this._scoreThisFrame = 0
  this._allFrames = []
  this._currentFrame = 1
  this._totalScore = 0
  this._allRolls = []
}

Game.prototype.recordRoll = function(numberOfPins) {
  if (this._allFrames.length === 10) {
    throw "Game finished";
  } else if (this._currentFrame === 10) {
    this.lastFrame(numberOfPins);
  } else {
    this.validateRoll(numberOfPins);
    this._allRolls.push(numberOfPins);
    this._rollsThisFrame.push(numberOfPins);
    this._scoreThisFrame += numberOfPins;
    this._totalScore += numberOfPins;
    this.checkFrame();
    return numberOfPins;
  };
};

Game.prototype.validateRoll = function(numberOfPins) {
  if (numberOfPins > 10) {
    throw "Maximum of 10 pins per roll";
  } else if (this._rollsThisFrame[0] + numberOfPins > 10) {
    throw "Maximum of 10 pins per frame";
  } else { return };
};

Game.prototype.checkFrame = function() {
  if (this._rollsThisFrame.length === 2 && this._scoreThisFrame < 10) {
    this.checkSpares()
    this.checkStrikes()
    this.incrementFrame()
  } else if (this._rollsThisFrame.length === 2 && this._scoreThisFrame === 10) {
    this.checkSpares()
    this.checkStrikes()
    this._rollsThisFrame[1] = '/';
    this.incrementFrame()
  } else if (this._rollsThisFrame[0] === 10) {
    this.checkSpares()
    this.checkStrikes()
    this._rollsThisFrame[0] = 'X';
    this.incrementFrame()
  } else {
    return;
  };
};

Game.prototype.incrementFrame = function() {
  this._allFrames.push({ rolls: this._rollsThisFrame,
    score: this._scoreThisFrame });
  this._currentFrame++;
  this._rollsThisFrame = [];
  this._scoreThisFrame = 0;
};

Game.prototype.checkSpares = function() {
  if (this._currentFrame > 1) {
    if (this.allFrames()[this._currentFrame - 2]["rolls"][1] === "/") {
      this.allFrames()[this._currentFrame - 2]["score"] += this._rollsThisFrame[0];
      this._totalScore += this._rollsThisFrame[0];
    };
  };
};

Game.prototype.checkStrikes = function() {
  if (this._currentFrame > 1) {
    if (this.allFrames()[this._currentFrame - 2]["rolls"][0] === "X") {
      this.allFrames()[this._currentFrame - 2]["score"] += this._scoreThisFrame;
      this._totalScore += this._scoreThisFrame;
      this.checkPreviousStrikes()
    };
  };
};

Game.prototype.checkPreviousStrikes = function() {
  if (this._currentFrame > 2) {
    if (this.allFrames()[this._currentFrame - 3]["rolls"][0] === "X") {
      this.allFrames()[this._currentFrame - 3]["score"] += this._rollsThisFrame[0];
      this._totalScore += this._rollsThisFrame[0];
    };
  };
};

Game.prototype.lastFrame = function(numberOfPins) {
  switch (this._rollsThisFrame.length) {
    case 0:
      this._allRolls.push(numberOfPins);
      this._rollsThisFrame.push(numberOfPins);
      this._scoreThisFrame += numberOfPins;
      this._totalScore += numberOfPins;
      if (this._rollsThisFrame[0] === 10) {
        this.checkSpares();
        this.checkStrikes();
        this._rollsThisFrame[0] = "X"
      };
      break;
    case 1:
      this._allRolls.push(numberOfPins);
      this._rollsThisFrame.push(numberOfPins);
      this._scoreThisFrame += numberOfPins;
      this._totalScore += numberOfPins;
      if (this._rollsThisFrame[0] === "X" && this._rollsThisFrame[1] === 10) {
        if (this.allFrames()[8]["rolls"][0] === "X") {
          this.allFrames()[8]["score"] += 10;
          this._totalScore += 10;
          this._rollsThisFrame[1] = "X";
        } else if (this._rollsThisFrame[0] === "X" && this._rollsThisFrame[1] < 10) {
          this.allFrames()[8]["score"] += this._rollsThisFrame[1];
          this._totalScore += this._rollsThisFrame[1];
        };
      };
      break;
    case 2:
      if (this._rollsThisFrame[0] + this._rollsThisFrame[1] < 10) {
        throw "Game finished";
      };
      this._allRolls.push(numberOfPins);
      this._rollsThisFrame.push(numberOfPins);
      this._scoreThisFrame += numberOfPins;
      this._totalScore += numberOfPins;
      this._allFrames.push({ rolls: this._rollsThisFrame,
        score: this._scoreThisFrame });
      break;
  };
};

Game.prototype.score = function() {
  return this._totalScore;
};

Game.prototype.whichFrame = function() {
  return this._currentFrame;
};

Game.prototype.allFrames = function() {
  return this._allFrames;
};

Game.prototype.thisFrame = function() {
  return this._rollsThisFrame;
};
