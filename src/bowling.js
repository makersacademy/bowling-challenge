'use strict';
var Game = function(){
  this.roundNumber = 1;
  this.score = 0;
  this.throwNumber = 1;
  this.remainingPins = 10;
  this.bonus = [0,0];
  this.multiplier = 1;
  this.bonusThrows = 0;
};

Game.prototype.nextRound = function() {
  if (this.roundNumber >= 10) {
    throw new Error("A game is only 10 rounds long");
  } else {
    this.roundNumber ++ ;
    this.throwNumber = 1;
    this.remainingPins = 10;
  }
};

Game.prototype.bowl = function(pins) {
  if (pins > this.remainingPins) {
    throw new Error("You can't bowl higher than the remaining pins");
  }
  this.bonusCalc();
  for(var i = 0; i < 2; i++) {
    if (this.bonus[i] > 0) {
      this.bonus[i] -- ;
    } else {
      this.bonus[i] = 0;
    }
  };
  if (this.roundNumber === 10) {
    if (this.throwNumber >= 4) {
      throw new Error("Game is over");
    }
    if (this.throwNumber >= 3 && this.bonusThrows === 0 ){
      throw new Error("Game is over");
    }
    if (this.bonusThrows > 0) {
      this.bonusThrows -- ;
    } else if (pins === 10) {
      this.bonusThrows = 2;
    } else if (pins === this.remainingPins) {
      this.bonusThrows = 1;
      this.remainingPins = 10;
    } else {
      this.remainingPins = 10 - pins;
    }
    this.throwNumber ++ ;
    this.score += (pins*this.multiplier);
  } else {

    if (pins === 10) {
      this.nextRound();
      this.strikeBonus();
    } else if (pins === this.remainingPins) {
      this.nextRound();
      this.spareBonus();
    } else {
      this.remainingPins = 10 - pins;
      this.throwNumber ++ ;
      if (this.throwNumber >= 3) {
        this.nextRound();
      }
    }
    this.score += (pins*this.multiplier);
  }
};

Game.prototype.strikeBonus = function() {
  if (this.bonus[0] <= 0) {
    this.bonus[0] = 2;
  } else {
    this.bonus[1] = 2;
  }
};

Game.prototype.spareBonus = function() {
  if (this.bonus[0] <= 0) {
    this.bonus[0] = 1;
  } else {
    this.bonus[1] = 1;
  }
};

Game.prototype.bonusCalc = function() {
  this.multiplier = 1;
  for(var i = 0; i < 2; i++) {
    if(this.bonus[i] > 0) {
      this.multiplier ++;
    }
  };
};
