'use strict';

function Frame(){
  this.scoreCard = [0, 0]
  this.totalScore = 0
  this.tenpins = 10
};

Frame.prototype.score = function(){
  return this.scoreCard
};

Frame.prototype.firstBowl = function(pins){
  if (pins > 10) {
    throw 'Score exceeded 10'
  }
  this.updatePins(pins)
  this.scoreCard[0] = pins
  this.total()
};

Frame.prototype.secondBowl = function(pins){
  if (pins > 10){
    throw 'Score exceeded 10'
  }
  this.updatePins(pins)
  this.scoreCard[1] = pins
  this.total()
;}

Frame.prototype.updatePins = function(pins){
  if (this.tenpins <= 0) {
    throw "No pins reamining"
  }

  this.tenpins = this.tenpins - pins
};

Frame.prototype.total = function(){
    this.totalScore = this.scoreCard.reduce(function(a, b){
    return a + b;
    }, 0);
};

Frame.prototype.isAStrike = function(pins){
  return this.tenpins === 0
}

Frame.prototype.isASpare = function(pins){
  return this.isAStrike() === false && this.total() === 10
}