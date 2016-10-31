function strict(){
  'use strict';
}

function Scorecard(){
  this.total = 0
  this.frameTotal = 0
  this.frame = 1
  this.roll  = 1
  this.MAX_FRAME_TOTAL = 10
}

Scorecard.prototype.getCurrentScore = function () {
  return this.total;
}

Scorecard.prototype.getFrameScore = function () {
  return this.frameTotal;
}

Scorecard.prototype.getCurrentFrame = function () {
  return this.frame;
}

Scorecard.prototype.getCurrentRoll = function () {
  return this.roll;
}

Scorecard.prototype.updateScore = function (number) {
  if(this.roll === 1){
    this.endTurnIfStrike(number);
  } else if(this.roll === 2){
    this.updateAllTotalsAndFrame(number);
  }
};

Scorecard.prototype.endTurnIfStrike = function (number) {
  if(number === 10){
    this.updateAllTotalsAndFrame(number);
  } else {
    this.updateAllTotalsAndRoll(number);
  }
};

Scorecard.prototype.updateAllTotals = function (number) {
  this.total += number;
  this.frameTotal += number;
};

Scorecard.prototype.updateAllTotalsAndRoll = function (number) {
  this.updateAllTotals(number);
  this.updateRoll();
};

Scorecard.prototype.updateAllTotalsAndFrame = function (number) {
  this.updateAllTotalsAndRoll(number);
  this.updateFrame();
};

Scorecard.prototype.updateRoll = function () {
  if(this.roll === 1){
    this.roll += 1;
  } else if(this.roll === 2 && this.frame <= 9){
    this.roll = 1;
  } else if(this.roll === 2 && this.frame === 10){
    this.roll += 1;
  }
}


Scorecard.prototype.updateFrame = function () {
  if(this.frame ===  this.MAX_FRAME_TOTAL){
    console.log("Game Completed")
  } else {
     this.frame += 1;
     this.frameTotal = 0;
  }
};
