function Bowling(){
  this.score = 0;
  this.allScores = [];
  this.strikesSpares = [];
  this.allFrames = [];
}

Bowling.prototype.currentScore = function(){
  return this.score;
};

Bowling.prototype.rollGutterBall = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(0);
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll1 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(1);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll2 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(2);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll3 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(3);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll4 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(4);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll5 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(5);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll6 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(6);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll7 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(7);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll8 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(8);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.roll9 = function() {
  if(this.allScores.length < 20) {
    this.allScores.push(9);
    this.checkSpare();
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.rollStrike = function() {
  if(this.allScores.length < 19) {
    this.allScores.push(10,0);
    this.strikesSpares.push('strike')
    this.updateScore();
  } else {
  throw 'Game is over - Cannot roll again';
  }
};

Bowling.prototype.updateScore = function() {
  // checks first to see if frames are empty, if even number of balls have been rolled, and that the last frame was not spare/strike
  var ball1 = this.allScores.slice(-2)[0];
  var ball2 = this.allScores.slice(-1)[0];
  var frameScore = (ball1 + ball2);
  var lastResult = this.strikesSpares.slice(-1)[0];
  var previousResult = this.strikesSpares.slice(-2)[0];

if (this.allScores.length % 2 === 0) {
    if ((lastResult !== 'strike') && (lastResult !== 'spare') && (frameScore !== 10)) {
      this.score += ball1;
      this.score += ball2;
      this.strikesSpares.push('neither');
    // then checks if this frame results in a spare
    } else if ((lastResult === 'strike') && (frameScore !== 10)) {
      this.score += ball1;
      this.score += ball2;
      this.score += ball1;
      this.score += ball2;
      this.score += 10;
      this.allFrames.push([ball1,ball2]);
      this.strikesSpares.push('neither');
  // then check if the last two frames have been strikes
    } else if ((lastResult === 'spare') && (frameScore !== 10)) {
      this.score += 10;
      this.score += ball1;
      this.score += ball1;
      this.score += ball2;
      this.strikesSpares.push('neither');
    }
  }
}

Bowling.prototype.checkSpare = function() {
  var ball1 = this.allScores.slice(-2)[0];
  var ball2 = this.allScores.slice(-1)[0];
  if (this.allScores.length % 2 === 0 && (ball1 + ball2 === 10)){
    this.strikesSpares.push('spare');
  }
}







// Bowling.prototype.calculator = function() {
//   this.score =
// };
