var Frame = function(){
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
