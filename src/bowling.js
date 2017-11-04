'use strict';

/// create framers from game class
/// create a frame class to store frame calss stuff as  data in frame(rolls, strike/spare)



function Game() {
  this._player = 'Ollie'
  this._scoreSheet = [];
  this._totalScore = 0; // consider calaculating score from summing score and bonus array
  this._frameAndRoll = [1, 1];
  this._wasStrike = false;
  this._wasSpare = false;
  // use objects to represent state,
};

Game.prototype.getTotalScore = function() {
  return this._totalScore;
};

Game.prototype.getScoreSheet = function() {
  return this._scoreSheet;
};

Game.prototype.roll = function(roll) {

  this._frameAndRoll[1] === 1 ? this.firstRoll(roll) : this.secondRoll(roll);
  this.rollType(roll);
  this.updateFrameAndRoll(roll);
};

Game.prototype.firstRoll = function(roll) {
  this._totalScore += roll;
  this._scoreSheet.push(roll);
};

Game.prototype.secondRoll = function(roll) {
  this._totalScore += roll;
  this._scoreSheet.push(roll);
};
  // DRY UP ^^^

Game.prototype.updateFrameAndRoll = function(roll) {
  if (this._frameAndRoll[1] === 2 || roll === 10) {
    this._frameAndRoll[0] += 1;
  } else {
    this._frameAndRoll[1] += 1;
  }
};
// try to create new data not update/overwrite existing data;
  // Mutations should be seperate into seperate functions

Game.prototype.rollType = function(roll) {
  // console.log(this._scoreSheet)
  if (roll === 10) {
      console.log('TEST')
    this._wasStrike = true;
  }

        console.log(this._scoreSheet)
        console.log(this._scoreSheet.length-2)
        console.log(this._scoreSheet[this._scoreSheet.length-2] + roll)
      if ((this._frameAndRoll[1] === 2) && (this._scoreSheet[this._scoreSheet.length-2] + roll === 10)) {
          console.log(this._wasSpare)
    this._wasSpare = true;
  }

};
