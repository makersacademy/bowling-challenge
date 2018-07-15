'use strict';

function ScoreCard (){
  this.currenFrame = 1;
  this.frame = [];
  this.total = 0;
  this.board = [];
};


  ScoreCard.prototype.roll_1 = function(value) {
    this.frame.push(value);
    this.checkForStrike();

  };

  ScoreCard.prototype.checkForStrike = function(){
    if(this.frame[0] === 10) {
        return "strike";
  };
};


ScoreCard.prototype.getCurrentFrame = function() {
  return this.currenFrame
};


ScoreCard.prototype.getNextFrame = function() {
  return this.currenFrame += 1
};

ScoreCard.prototype.getScoreBoard = function() {
    return this.board
};


ScoreCard.prototype.addToFrame = function() {
    this.board.push(this.frame);
};

ScoreCard.prototype.getBoard = function() {
    return this.board;
};


  ScoreCard.prototype.getRoll_1 = function() {
    return this.frame[0];
  };

  ScoreCard.prototype.roll_2 = function(value) {
    this.frame.push(value);
  };

  ScoreCard.prototype.getRoll_2 = function() {
    return this.frame[1];
  };



  ScoreCard.prototype.checkForSpare = function(){
    if((this.frame[0] + this.frame[1]) === 10) {
        return "spare";
  };
};

ScoreCard.prototype.getTotalFrame = function(){
  return this.total += this.frame[0] + this.frame[1]

};
