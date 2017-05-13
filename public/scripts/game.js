function Game() {
  this.TOTAL_FRAMES = 10
  this.MAX_FRAME_SCORE = 10
  this.frameScores = []
  this.tenthFrameScores = []
  this.framesPlayed = 0
}

Game.prototype.newTurn = function(pinsOne,pinsTwo,pinsThree=0) {
  if (this.framesPlayed >= this.TOTAL_FRAMES) throw "Game over!";
    if (this.framesPlayed === 9) {
      this.tenthFrameScores.push(pinsOne,pinsTwo,pinsThree);
    } else {
      this.frameScores.push([pinsOne,pinsTwo]);
    }
    this.framesPlayed ++;
};

Game.prototype.isStrike = function(n) {
  return this.frameRollOne(n) === this.maxFrameScore();
};

Game.prototype.maxFrameScore = function() {
  return this.MAX_FRAME_SCORE;
}

Game.prototype.isSpare = function(n) {
  var rollOne = this.frameRollOne(n);
  var rollTwo = this.frameRollTwo(n);
  return (rollOne + rollTwo) === this.maxFrameScore();
};

Game.prototype.strikeScore = function(n) {
  if (this.nextFrameRollOne(n) + this.nextFrameRollTwo(n) === this.maxFrameScore()) {
    return 20 + this.thirdFrameRollOne(n);
  } else {
    return 10 + (this.nextFrameRollOne(n) + this.nextFrameRollTwo(n));
  };
};

Game.prototype.spareScore = function(n) {
  return 10 + this.nextFrameRollOne(n);
};

Game.prototype.frameTotal = function(n) {
  return this.frameRollOne(n) + this.frameRollTwo(n);
};

Game.prototype.frameRollOne = function(n) {
  var frame = this.frameScores[n];
  return frame[0];
};

Game.prototype.frameRollTwo = function(n) {
  var frame = this.frameScores[n];
  return frame[1];
};

Game.prototype.nextFrameRollOne = function(n) {
  var nextFrame = this.frameScores[n+1];
  return nextFrame[0];
};

Game.prototype.nextFrameRollTwo = function(n) {
  var nextFrame = this.frameScores[n+1];
  return nextFrame[1];
};

Game.prototype.thirdFrameRollOne = function(n) {
  var frameThree = this.frameScores[n+2];
  return frameThree[0];
};

Game.prototype.finalFrameScore = function () {
  var lastFrameScore = this.tenthFrameScores.reduce(function(sum, score) {
    return sum + score;
  }, 0);
  return lastFrameScore
};

Game.prototype.mostRecentFrameScore = function () {
  var lastFrameScore = this.frameScores[this.framesPlayed-1].reduce(function(sum, score) {
    return sum + score;
  }, 0);
  return lastFrameScore
};

Game.prototype.score = function(n) {
  var score = 0
  for (n = 0; n < this.framesPlayed-1; n++) {
    if (this.isStrike(n)) {
      score += this.strikeScore(n);
    } else if (this.isSpare(n)) {
      score += this.spareScore(n);
    } else {
      score += this.frameTotal(n);
    };
  };
  if (this.tenthFrameScores === []) return score + this.finalFrameScore();
  if (this.tenthFrameScores != []) return score + this.mostRecentFrameScore();
};
