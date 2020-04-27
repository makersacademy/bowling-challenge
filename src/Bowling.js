
"use strict";

const ALL_PINS = 10;

function Bowling() {
  this.score = 0;
  this.frameKey;
  this.frameScore;
  this.spare = false;
  this.strike = false;
  this.input 
  //this.rollCount = 1   maybe this should be instead of passing rollCount;
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Bowling.prototype.runCardMaking = function () {
  var rollCount;
  var frameCount;
  var pins;
  var score;
  this.makeCardTemplate();
  for (frameCount = 1; frameCount < 11; frameCount++) {
    this.frameKey = frameCount;
    for (rollCount = 1; rollCount < 3; rollCount++) {
      if (this.isSkipped(rollCount)) {
        pins = "x";
        score = this.calculateScore(0);
      } else {
       // this.getInput()
        pins = this.input;

        this.switchStrike(rollCount, pins)
         
        this.scoreStrike(rollCount, pins);
        score = this.calculateScore(pins);
      }
      this.fillCard(pins, score, rollCount);

      if (this.strike === false && this.spare === true) {
        this.scoreSpares(rollCount, pins);
      }
      this.switchSpare();
    }
  }
  // end of loop big loop
  console.log(this.card)
  return this.card;
};

Bowling.prototype.isSkipped = function (rollCount) {
  if (rollCount === 2 && this.strike === true) {
    return true;
  }
};

Bowling.prototype.makeCardTemplate = function () {
  /// changed obj but perhaps was better before as means I have to make conditions for runCardmaking
  var frameCount,
    key,
    obj = {};
  for (frameCount = 1; frameCount < 11; frameCount++) {
    obj[frameCount] = {};
    // obj[key] = { r1PinsDown: 0, r1Score: 0, r2PinsDown: 0, r2Score: 0 };
    this.card = obj;
  }
  return this.card;
};

Bowling.prototype.getInput = function (input) {
  input = parseInt(input,10)
  this.input = input
  console.log(this.input)
  return input
};

Bowling.prototype.calculateScore = function (numPinsDown) {
  this.score = numPinsDown + this.score;
  return this.score;
};

Bowling.prototype.scoreStrike = function (rollCount, r1PinsDown) {
  if (this.strike === true && rollCount === 2) {
    var previousFrameKey = this.frameKey - 1;
    var r2PinsDown = this.card[this.frameKey]["r1PinsDown"];
    this.card[previousFrameKey]["r2Score"] =
      this.card[previousFrameKey]["r2Score"] + r1PinsDown + r2PinsDown;
    this.score = this.score + r1PinsDown + r2PinsDown;
    // if  previous frame [r2 pinsDown] == x then add 10
  }
};

//var previousFrameKey = this.frameKey - 1; is in scoreStrike and ScoreSpares -  beforeEach perhaps can declare these functions

Bowling.prototype.scoreSpares = function (rollCount, r1PinsDown) {
  var previousFrameKey = this.frameKey - 1;
  this.card[previousFrameKey]["r2Score"] =
    this.card[previousFrameKey]["r2Score"] + r1PinsDown;
  this.score = this.score + r1PinsDown;
};

Bowling.prototype.fillCard = function (pins, score, rollCount) {
  if (rollCount === 1) {
    this.card[this.frameKey]["r1PinsDown"] = pins;
    this.card[this.frameKey]["r1Score"] = score;
  }
  if (rollCount === 2) {
    this.card[this.frameKey]["r2PinsDown"] = pins;
    this.card[this.frameKey]["r2Score"] = score;
  }

  return this.card;
};

Bowling.prototype.switchSpare = function (rollCount) {
  if (
    this.card[this.frameKey]["r1PinsDown"] +
      this.card[this.frameKey]["r2PinsDown"] ===
    ALL_PINS
  ) {
    return (this.spare = true);
  } else {
    return (this.spare = false);
  }
};

 Bowling.prototype.switchStrike = function (rollCount, pins) {
  if (
    (rollCount === 1 && pins === ALL_PINS) ||
    (this.frameKey > 1 &&
      rollCount === 2 &&
      this.card[this.frameKey - 1]["r2PinsDown"] === "x") //too much functionality in one method?
  ) {
    return this.strike = true;
  } else {
   return this.strike = false;
  }
 };

