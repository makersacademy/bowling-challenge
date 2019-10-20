'use strict';

function BowlingGame() {
  this.score = 0;
  this.frame = 1;
  this.bonusRoll = 0;

  this.frameRoll = [];
  this.allRolls = [];
};

BowlingGame.prototype.inputRoll = function(number) {
  this.frameRoll.push(number);

  if(number == 10) {
    this.allRolls.push(this.frameRoll);
    this.frameRoll = [];
    this.frame =+ 1;
    this.bonusRoll += 2;
  };

  if(this.frameRoll.length == 2) {
    this.allRolls.push(this.frameRoll);

    var sum = 0;
    for(var i = 0; i < this.frameRoll.length; i++) {
      sum += this.frameRoll[i];
      if(sum == 10) {
        this.bonusRoll += 1;
      };
    };

    this.frameRoll = [];
    this.frame =+ 1;
  };

};
