var Game = function(){
  this.frame = 1;
  this.scoreTable = [];
};

Game.prototype.addFrame = function (frame) {
  this.scoreTable.push(frame)
  this.frame ++
};


var Frame = function(frame){
  this.frame = frame
  this.firstTurn = 0;
  this.secondTurn = 0;
  this.total = 0;
};

Frame.prototype.addFirstScore = function (num) {
  this.firstTurn = num;
};

Frame.prototype.addSecondScore = function (num) {
  this.secondTurn = num;
};

Frame.prototype.addTotal = function () {
  this.total = (this.firstTurn + this.secondTurn);
};

is_strike = function (firstTurn) {
  if (firstTurn === "x") {
    return true;
  } else {
    return false;
  }
};

is_spare = function (secondTurn) {
  if (secondTurn === "/") {
    return true;
  } else {
    return false;
  }
};
