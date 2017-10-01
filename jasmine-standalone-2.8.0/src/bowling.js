function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.allScores = [];
}

Bowling.prototype.currentScore = function(){
  return this.allScores.reduce(function (a, b) {return a + b}, 0);
};

Bowling.prototype.roll1 = function() {
  this.allScores.push(1);
};

Bowling.prototype.roll2 = function() {
  this.allScores.push(2);
};

Bowling.prototype.roll3 = function() {
  this.allScores.push(3);
};

Bowling.prototype.roll4 = function() {
  this.allScores.push(4);
};

Bowling.prototype.roll5 = function() {
  this.allScores.push(5);
};

Bowling.prototype.roll6 = function() {
  this.allScores.push(6);
};

Bowling.prototype.roll7 = function() {
  this.allScores.push(7);
};

Bowling.prototype.roll8 = function() {
  this.allScores.push(8);
};

Bowling.prototype.roll9 = function() {
  this.allScores.push(9);
};

Bowling.prototype.rollStrike = function() {
    this.allScores.push(10,null);
};



Bowling.prototype.allRolls = function() {
  return this.allScores;
};

Bowling.prototype.frameStore = function() {
  if (this.allScores.count === 2){

  }
}
