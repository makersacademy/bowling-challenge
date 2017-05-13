'use strict';

function Frame() {
  this.pinsLeft = 10;
  this.pinsKnocked = 0;
  this.roll1Score = 0;
  this.roll2Score = 0;
  this.rollNum = 1;
};


Frame.prototype.roll  = function () {
  if (this.rollNum === 1) {
    this.firstRoll();
    this.rollNum = 2;
}
  else {
    this.secondRoll();
    this.rollNum = 1;
    }
};
  };

Frame.prototype.firstRoll = function () {
  this.pinsKnocked = Math.round(Math.random() * (this.pinsLeft - 0));
  this.pinsLeft = 10 - this.pinsKnocked;
}
};

Frame.prototype.secondRoll = function () {
  { this.pinsKnocked = Math.round(Math.random() * (this.pinsLeft - 0));
  this.pinsLeft = 10 - this.pinsKnocked;
  this.changeFrameNum();
}
};
