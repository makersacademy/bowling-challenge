'use strict';

function BowlingGame() {
  this.allFrames = {1: [], 2: [], 3: [], 4: [], 5: [],
    6: [], 7: [], 8: [], 9: [], 10:[]
    }
  this.currentFrame = 1;
  this.previousFrame = 0;
  this.bonusRoll = 0;
  this.strikeBonus = [];
};

BowlingGame.prototype.bowl = function(number) {
  this.frameNumber();
  this.allFrames[this.currentFrame].push(number)
  this.addBonus();
  this.spare();
  this.strike();
};

BowlingGame.prototype.frameNumber = function() {
  if(this.allFrames[this.currentFrame].length == 2 || this.allFrames[this.currentFrame].includes(10)) {
    this.currentFrame += 1
    this.previousFrame += 1
  };
};

BowlingGame.prototype.spare = function() {
  var sum = 0;
  for(var i = 0; i < this.allFrames[this.currentFrame].length; i++) {
    sum += this.allFrames[this.currentFrame][i];
    if(sum == 10 && this.allFrames[this.currentFrame].length == 2) {
      this.bonusRoll += 1;
    };
  };
};

BowlingGame.prototype.strike = function() {
  if(this.allFrames[this.currentFrame][0] == 10) {
    this.bonusRoll += 2;
  }
};

BowlingGame.prototype.addBonus = function() {
  if(this.bonusRoll == 1) {
    this.allFrames[this.previousFrame].push(this.allFrames[this.currentFrame][0]);
    this.bonusRoll -= 1;
  }
  if(this.bonusRoll > 1 && this.allFrames[this.currentFrame].length == 2) {
    this.allFrames[this.previousFrame].push(this.allFrames[this.currentFrame][0]);
    this.allFrames[this.previousFrame].push(this.allFrames[this.currentFrame][1]);
    this.bonusRoll -= 2;
  }
};
