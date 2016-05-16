/* globals Frame */
function Game(frame) {
  'use strict';
  this._frames = [];
  this.firstFrameRoll = 0;
  this.currentRollIndex = 0;
  this.finalBonusSpare = 0;
  this.bonusComplete = false;
}

Game.prototype.getFrame = function(i) {
  return this._frames[i];
}

Game.prototype.totalScore = function(){
  var total=0, length;
  length = Math.min(this._frames.length, 10);
  for (var index=0;index < length; index++) {
    total += this._frames[index].getScore();
    console.log("cumul total",total);
}
 console.log(this._frames);
 console.log("finalBonus:",this.finalBonusSpare);
 // console.log("total",total,"length",length);
  return total + this.finalBonusSpare;
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
    this.checkFinalSpare(pins);
  } else {
    this.checkExceptions(this.firstFrameRoll, pins);
    var frame = new Frame(this.firstFrameRoll, pins);
    this.addFrame(frame);
    this.calculateBonusSpare();
    this.calculateBonusStrike();
    this.calculateBonusDoubleStrike();
  }
};


Game.prototype.checkStrike = function(pins) {
  if (pins === 10) {
    var frame = new Frame(pins);
    this.addFrame(frame);
    this.calculateBonusSpare();
    this.calculateBonusStrike();
    this.calculateBonusDoubleStrike();
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
    var prevScore = this._frames[length-3].getScore();
    var firstFrameRoll = this._frames[length-1].getRoll("first");
    var bonus = 10 + firstFrameRoll;
    this._frames[length-3].setScore(prevScore + bonus);
  }

}


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

Game.prototype.checkFinalSpare = function(pins) {
  if (this.currentRollIndex === 21 && this._frames[9].getType()==='SPARE' ) {
    this.finalBonusSpare = pins;
    this.bonusComplete = true;
  }
}

Game.prototype.isRegularEnd = function() {
  var condition1, condition2, condition3;
  var length = this._frames.length;
  condition1 = length === 10;
  condition2 = this._frames[length-1].getType() === "regular";
  condition3 = this._frames[length-1].getRoll("second") !== undefined;
  return condition1 && condition2 && condition3;
}

Game.prototype.isSpareEnd = function() {
  var condition1, condition2, condition3;
  var length = this._frames.length;
  condition1 = length === 10;
  condition2 = this._frames[length-1].getType() === "SPARE";
  condition3 = this.bonusComplete;
  // console.log("spareend!")
  // console.log(this._frames);
  // console.log("cond1",condition1);
  return condition1 && condition2 && condition3;
}

Game.prototype.isStrikeEnd = function() {
  var condition1, condition2, condition3;
  var length = this._frames.length;
  condition1 = (length === 11);
  condition2 = this._frames[length-2].getType() === "STRIKE";
  condition3 = this._frames[length-1].getRoll("first") !== undefined;
  return condition1 && condition2 && condition3;
}

Game.prototype.isDblStrikeEnd = function() {
  var condition1, condition2, condition3;
  var length = this._frames.length;
  condition1 = (length === 12);
  condition2 = this._frames[length-3].getType() === "STRIKE";
  condition3 = this._frames[length-1].getRoll("first") !== undefined;
  return condition1 && condition2 && condition3;
}

Game.prototype.over = function() {
  var cond1 = this.isRegularEnd() || this.isSpareEnd();
  var cond2 = this.isStrikeEnd() || this.isDblStrikeEnd();
  return cond1 || cond2;
}