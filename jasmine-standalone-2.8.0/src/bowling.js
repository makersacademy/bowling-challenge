function Bowling(){
  this.DEFAULT_SCORE = 0;
  this.score = this.DEFAULT_SCORE;
  this.allScores = [];
}

Bowling.prototype.currentScore = function(){
  return this.allScores.reduce(function (a, b) {return a + b}, 0);
};

Bowling.prototype.roll1 = function() {
  if(this.allScores.length < 21) {
    this.allScores.push(1);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll2 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(2);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll3 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(3);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll4 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(4);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll5 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(5);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll6 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(6);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll7 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(7);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll8 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(8);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll9 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(9);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.rollStrike = function() {
  if(this.allScores.length < 19) {
    this.allScores.push(10, null);
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.allRolls = function() {
  return this.allScores;
};

Bowling.prototype.frameStore = function() {
  if (this.allScores.count === 2){
  }
}
