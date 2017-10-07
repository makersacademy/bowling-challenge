function Bowling(){
  this.score = 0;
  this.allScores = [];
  this.allFrames = {};
}

// Bowling.prototype.currentScore = function(){
//   this.score = this.allScores.reduce(function (a, b) {return a + b}, 0);
//   return this.score;
// };

Bowling.prototype.roll1 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(1);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.updateScore = function() {
  if((this.allScores.length % 2 === 0) && ((this.allScores.slice(-2)[0] + this.allScores.slice(-1)[0]) !== 10)) {
    this.score += this.allScores.slice(-1)[0];
    this.score += this.allScores.slice(-2)[0];
  }
}

Bowling.prototype.roll2 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(2);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll3 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(3);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll4 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(4);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll5 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(5);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll6 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(6);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll7 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(7);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll8 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(8);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll9 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(9);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.rollStrike = function() {
  if(this.allScores.length < 19) {
    this.allScores.push(10, null);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.allRolls = function() {
  return this.allScores;
};







// Bowling.prototype.calculator = function() {
//   this.score =
// };
