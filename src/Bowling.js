'use strict';

function Bowling() {
  this.frame = 1;
  this.roll = 1;
  this.frameScore = 0;
  this.total = 0;

  this.isFrameComplete = false;
};

// ==== Readers ====

Bowling.prototype.getFrame = function () {
  return this.frame;
};

Bowling.prototype.getRoll = function () {
  return this.roll;
};

Bowling.prototype.getFrameScore = function () {
  return this.frameScore;
};

Bowling.prototype.getTotal = function () {
  return this.total;
};

// ==== ==== ==== ====


Bowling.prototype.bowl = function (pins) {
  this.isValidBowl(pins);
  this.isFrameComplete = false;
  this.updateRoll();
  this.updateFrameScore(pins);
  this.resetPinsIfAppropriate();
};

// ==== Functions inside bowl function ====

Bowling.prototype.isValidBowl = function(pins) {
  if (pins > 10 || pins < 0) throw new TypeError("Nope, try again");
  if ( (pins + this.frameScore) > 10 ) throw new TypeError("Impossible! There were only 10 pins to knock down");
  if ( this.frame === 10 && this.frameScore === 10 ) { return true; }
  if ( this.frame > 10 ) throw new TypeError("Game over! Start a fresh game.")
};

Bowling.prototype.updateRoll = function () {
  this.roll += 1;
};

Bowling.prototype.updateFrameScore = function (pins) {
  this.frameScore += pins;
};

Bowling.prototype.resetPinsIfAppropriate = function(){
  // if () {
  //
  // }

  if (this.roll > 2) {
    this.roll = 1;
    this.isFrameComplete = true;
    this.total += this.frameScore;
    this.frameScore = 0;
    this.frame += 1;
  }
};

// ==== ==== ==== ==== ==== ==== ==== ====
