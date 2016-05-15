/* globals Frame */
function Game(frame) {
  'use strict';
  this._frames = [];
  this.firstFrameRoll = 0;
  this.currentRollIndex = 0;

}

Game.prototype.getFrame = function(i) {
  return this._frames[i];
}

Game.prototype.totalScore = function(){
 return this._frames.last().getScore();
};

Game.prototype.frameLength = function() {
  return this._frames.length;
};

Game.prototype.roll = function(pins) {
  this.currentRollIndex++;
  var isFirstRoll = this.currentRollIndex %2 !== 0;
  if (isFirstRoll) {
    this.firstFrameRoll = pins;
    this.checkStrike(pins);
  } else {
    this.checkExceptions(this.firstFrameRoll, pins);
    var frame = new Frame(this.firstFrameRoll, pins);
    this.addFrame(frame);
    this.calculateBonusSpare();
    this.calculateBonusStrike();
    this.calculateBonusDoubleStrike();
    // this.cumulateFrameScore();
  }
};

Game.prototype.cumulateFrameScore = function() {
  var length = this._frames.length;
  var prevScore, cumulScore;
  if(length > 1) {
    prevScore = this._frames[length-2].getScore();
    cumulScore = this._frames.last().getScore() + prevScore;
    this._frames.last().setScore(cumulScore);
  }
}

Game.prototype.checkStrike = function(pins) {
  if (pins === 10) {
    var frame = new Frame(pins);
    this.addFrame(frame);
    this.calculateBonusSpare();
    this.calculateBonusStrike();
    this.calculateBonusDoubleStrike();
    // this.cumulateFrameScore();
    this.currentRollIndex++;
  }
}

Game.prototype.calculateBonusSpare = function() {
  var length = this._frames.length;
  if ((length >1) && (this._frames[length-2]._type === 'SPARE')) {
    var prevScore = this._frames[length-2].getScore();
    var bonus = this._frames[length-1].getRoll("first");
    this._frames[length-2].setScore(prevScore + bonus);
  }
}

Game.prototype.calculateBonusStrike = function() {
  var length = this._frames.length;
  if ((length >1) && (this._frames[length-2]._type === 'STRIKE')) {
    var prevScore = this._frames[length-2].getScore();
    var firstFrameRoll = this._frames[length-1].getRoll("first");
    if (this.isStrike(length-1)) {
      console.log("double strike!");
      this._frames[length-1].updateDoubleStrike();
    } else {
      var secondFrameRoll = this._frames[length-1].getRoll("second");
      var bonus = firstFrameRoll + secondFrameRoll;
      this._frames[length-2].setScore(prevScore + bonus);

    }
  }
}

Game.prototype.isStrike = function(index) {
  return this._frames[index].calculateType() === 'STRIKE';
};

Game.prototype.calculateBonusDoubleStrike = function() {
  var length = this._frames.length;
  if ((length >1) && (this._frames[length-2].getDoubleStrike())) {
    console.log("calculating double strike!")
    var prevScore = this._frames[length-3].getScore();
    var firstFrameRoll = this._frames[length-1].getRoll("first");
    var bonus = 10 + firstFrameRoll;
    this._frames[length-3].setScore(prevScore + bonus);
    console.log("frames: ",this._frames);
  }

}

// Game.prototype.checkDoubleStrike = function(length) {
//   if(this._frames[length-1].getRoll("second") === '-') {

//   }
// }

Game.prototype.addFrame = function(frame) {
  this._frames.push(frame);
}


Game.prototype.checkExceptions = function(roll1,roll2) {
  if (isError(roll1) || isError(roll2)) {
    var error = 'rolls are not within range or not numbers';
    throw new Error(error);
  }
  if ((roll1 + roll2) > 10) {
    throw new Error("frame can't exceed 10");
  }

  function isError(number) {
    return (typeof(number) !== "number" || number < 0 || number > 10)
  }
}

if (!Array.prototype.last){
  Array.prototype.last = function(){
    return this[this.length - 1];
  };
}