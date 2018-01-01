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
    this.resetThrows();
    this.resetPins();
  }
};

Game.prototype.bowl = function(pins) {
  if (pins > this.remainingPins) {
    throw new Error("You can't bowl higher than the remaining pins");
  }
  this.multiplierCalc();
  this.calculateRemainingBonus();
  if (this.roundNumber === 10) {
    this.tenthRound(pins);
  } else {
    this.firstNineRounds(pins);
  }
};

Game.prototype.strikeBonus = function() {
  this.bonusCalc(2);
};

Game.prototype.spareBonus = function() {
  this.bonusCalc(1);
};

Game.prototype.bonusCalc = function(bonus) {
  if (this.bonus[0] <= 0) {
    this.bonus[0] = bonus;
  } else {
    this.bonus[1] = bonus;
  }
};

Game.prototype.multiplierCalc = function() {
  this.multiplier = 1;
  for(var i = 0; i < 2; i++) {
    if(this.bonus[i] > 0) {
      this.multiplier ++;
    }
  };
};

Game.prototype.tenthRound = function(pins) {
  if (this.throwNumber >= 4) {
    throw new Error("Game is over");
  }
  if (this.throwNumber >= 3 && this.bonusThrows === 0 ){
    throw new Error("Game is over");
  }
  if (this.bonusThrows > 0) {
    this.bonusThrows -- ;
  } else if (pins === 10) {
    this.setBonusThrows(2);
  } else if (pins === this.remainingPins) {
    this.setBonusThrows(1);
    this.resetPins();
  } else {
    this.knockPinsOver(pins);
  }
  this.incrementThrows();
  this.addToScore(pins);
};

Game.prototype.firstNineRounds = function(pins) {
  if (pins === 10) {
    this.nextRound();
    this.strikeBonus();
  } else if (pins === this.remainingPins) {
    this.nextRound();
    this.spareBonus();
  } else {
    this.knockPinsOver(pins);
    this.incrementThrows();
    if (this.throwNumber >= 3) {
      this.nextRound();
    }
  }
  this.addToScore(pins);
};

Game.prototype.calculateRemainingBonus = function() {
  for(var i = 0; i < 2; i++) {
    if (this.bonus[i] > 0) {
      this.bonus[i] -- ;
    } else {
      this.bonus[i] = 0;
    }
  };
};

Game.prototype.resetPins = function() {
  this.remainingPins = 10;
};

Game.prototype.resetThrows = function() {
  this.throwNumber = 1;
};

Game.prototype.knockPinsOver = function(pins) {
  this.remainingPins = 10 - pins;
};

Game.prototype.incrementThrows = function() {
  this.throwNumber ++ ;
};

Game.prototype.setBonusThrows = function(throws) {
  this.bonusThrows = throws;
};

Game.prototype.addToScore = function(pins) {
  this.score += (pins*this.multiplier);
};
