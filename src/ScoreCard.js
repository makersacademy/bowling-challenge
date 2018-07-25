'use strict';

function ScoreCard (){
  this.board = {0:[0, 0, 0]};
  this.frame = [];
  this.total = 0;

  this.frameNumber = 1;
  this.previousFrame = 0;
  this.rollNumber = 1;

};


ScoreCard.prototype.getFrameNumber = function() {
  return this.frameNumber
};


ScoreCard.prototype.nextFrame = function(){
  this.frameNumber += 1;
  this.previousFrame += 1;
};

ScoreCard.prototype.getPreviousFrame = function() {
  return this.previousFrame
};


ScoreCard.prototype.getRollNumber = function(){
  return this.rollNumber;

};


ScoreCard.prototype.changeRollNumber = function(){
  this.rollNumber === 1 ? this.rollNumber = 2 : this.rollNumber = 1;
}


ScoreCard.prototype.getBoard = function(){
  return this.board;
}



ScoreCard.prototype.addRoll = function(roll) {
  var frame = this.getFrameNumber();
  if(this.getRollNumber() === 1) {
    if(this.previousFrameIsSpare()) {
      var previousFrame = this.getPreviousFrame();
      this.board[previousFrame][2] = roll;
    }


    if(roll === 10){
      this.nextFrame();
      this.changeRollNumber();

    }
    this.board[frame] = [roll, 0, 0];
  }




  else {
    this.board[frame][1] = roll;
    this.board[frame][2] = 0;
    if(this.previousFrameIsStrike()) {
      var previousFrame = this.getPreviousFrame();
      var roll1 = this.board[frame][0]
      var roll2 = this.board[frame][1]
      this.board[previousFrame][2] = roll1 + roll2
    }









    this.nextFrame();
  }
  this.changeRollNumber();
};

ScoreCard.prototype.previousFrameIsStrike = function(){
  var previousFrame = this.getPreviousFrame();
  var board = this.getBoard();
  return board[previousFrame][0] === 10;
};








ScoreCard.prototype.previousFrameIsSpare = function(){
  var previousFrame = this.getPreviousFrame();
  return this.frameScore(previousFrame) === 10;

};

ScoreCard.prototype.frameScore = function(frame){
  return this.board[frame].reduce(function(sum, num){ return sum + num; })

};





ScoreCard.prototype.roll_1 = function(value) {
  this.frame[0] = value;
};

ScoreCard.prototype.getRoll_1 = function() {
  return this.frame[0];
};

ScoreCard.prototype.checkForStrike = function(){
  if(this.frame[0] === 10) {
    return "strike";
  };
};

// --------

ScoreCard.prototype.getNextFrame = function() {
  if(this.frame[0] == 10 || this.frame[1] != undefined ) {
      return this.frameNumber += 1

  }

};


// --------



ScoreCard.prototype.roll_2 = function(value) {
  this.frame[1] = value;
};

ScoreCard.prototype.getRoll_2 = function() {
  return this.frame[1];
};


ScoreCard.prototype.checkForSpare = function(){
  if((this.frame[0] + this.frame[1]) === 10) {
    return "spare";
  };
};



ScoreCard.prototype.getBoard = function() {
    return this.board;
};


ScoreCard.prototype.getTotalFrame = function(){
  return this.total += this.frame[0] + this.frame[1]
};
