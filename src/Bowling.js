"use strict";


function Bowling() {
  this.score = 0;
  this.frameKey;
  this.frameScore
  this.spare = false
  //this.rollCount = 1;
  
}

Bowling.prototype.calculateScore = function (numPinsDown) {
  this.score = numPinsDown + this.score;
  return this.score;
};

Bowling.prototype.makeCardTemplate = function () {
  var frameCount;
  var counter2;
  var obj = {};
  for (frameCount = 1; frameCount < 11; frameCount++) {
    var key = frameCount;
    obj[key] = { r1PinsDown: 0, r1Score: 0, r2PinsDown: 0, r2Score: 0 };
    this.card = obj;
  }
  return this.card;
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

Bowling.prototype.runCardMaking = function () {
  this.makeCardTemplate();
  var rollCount;
  var frameCount;
  for (frameCount = 1; frameCount < 11; frameCount++) {
    this.frameKey = frameCount
    for (rollCount = 1; rollCount < 3; rollCount++) {
      var pins = this.getInput();

      var score = this.calculateScore(pins);
      this.fillCard(pins, score, frameCount,rollCount);
    }
  }
  return this.card;
};




Bowling.prototype.getInput = function () {
  return getRndInteger(3, 11);
};

Bowling.prototype.fillCard = function (pins, score, numFrame, rollCount) {
  // needs to be moved into a different method - maybe a make name method, also might be hard to access hash so might need  to  change to a number
  //this.frameKey = numFrame
  if (rollCount === 1) {
    this.card[this.frameKey]["r1PinsDown"] = pins;
    this.card[this.frameKey]["r1Score"] = score;
  }
  if (rollCount === 2) {
    this.card[this.frameKey]["r2PinsDown"] = pins;
    this.card[this.frameKey]["r2Score"] = score;
  }
  console.log("frame score")
  console.log(this.card[this.frameKey]["r1PinsDown"] + this.card[this.frameKey]["r2PinsDown"])
  
  // change state to spare - needs to move to a  different method 
  if (rollCount === 2 & this.card[this.frameKey]["r1PinsDown"] + this.card[this.frameKey]["r2PinsDown"] === 10) {
    this.spare = true
    } else if  (rollCount === 2) {
      this.spare = false
    }

    
  console.log(this.frameKey )
  console.log(`roll ${rollCount}`);
  console.log(`pins ${pins}`)
  console.log(score )
  console.dir(this.card);
  console.log(" ");
  return this.card;
};


