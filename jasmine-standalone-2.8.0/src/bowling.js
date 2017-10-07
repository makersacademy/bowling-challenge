function Bowling(){
  this.score = 0;
  this.allScores = [];
  this.allFrames = [];
}

Bowling.prototype.currentScore = function(){
  return this.score;
};

Bowling.prototype.roll1 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(1);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.updateScore = function() {
  // checks first to see if frames are empty, if even number of balls have been rolled, and that the last frame was not spare/strike
  if ((this.allScores.length % 2 === 0) && ((this.allScores.slice(-2)[0] + this.allScores.slice(-1)[0]) !== 10) && this.allFrames.length === 0) {
    this.score += this.allScores.slice(-1)[0];
    this.score += this.allScores.slice(-2)[0];
    this.allFrames.push([this.allScores.slice(-2)[0],this.allScores.slice(-1)[0]]);
    // then check if there are an even number of rolls and that the rolls from the previous,or this frame did not add up to 10
  } else if (((this.allScores.length % 2 === 0) && (this.allScores.slice(-4)[0] + this.allScores.slice(-3)[0]) !== 10) && ((this.allScores.slice(-2)[0] + this.allScores.slice(-1)[0]) !== 10)) {
    this.score += this.allScores.slice(-1)[0];
    this.score += this.allScores.slice(-2)[0];
    this.allFrames.push([this.allScores.slice(-2)[0],this.allScores.slice(-1)[0]]);
// then check if the last two frames have been strikes
  } else if (((this.allScores.length % 2 === 0) && (this.allScores.length >= 6) && (this.allScores.slice(-6)[0] === 10) && (this.allScores.slice(-4)[0] === 10) && ((this.allScores.slice(-2)[0] + this.allScores.slice(-1)[0])) !== 10)) {
    this.score += this.allScores.slice(-6).join('+');
    this.score += this.allScores.slice(-4).join('+');
    this.score += this.allScores.slice(-2).join('+');
    this.allFrames.push([this.allScores.slice(-2)[0],this.allScores.slice(-1)[0]])
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
    this.allScores.push(10,0);
    this.allFrames.push([10,0]);
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
