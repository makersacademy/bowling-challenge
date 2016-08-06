function BowlingGame() {
  this.totalScore = 0;
  this.allFrameScores = [];
  this.currentFrame = 1;
  this.currentFrameScore = 0;
  this.bonuses = [];
  this.currentBowl = 1;
  this.allBowls = [];
}

BowlingGame.prototype.playerTurn = function(pins) {
  if (this.currentBowl === 1) {
    this.firstBowl(pins);
}
  else if (this.currentBowl === 2) {
    this.secondBowl(pins);
}
this.allBowls.push(pins);
};

BowlingGame.prototype.firstBowl= function(pins) {
  this.currentFrameScore += pins;
  this.spareBonus(pins);
  this.strikeBonus(pins);
  if(this.isStrike(pins)) {
    this.strike();
  } else {
  this.currentBowl = 2;
}
};

BowlingGame.prototype.secondBowl = function(pins) {
  this.currentFrameScore += pins;
  this.strikeBonus(pins);
    if (this.isSpare(this.currentFrameScore)) {
      this.bonuses.push('/');
      } else {
      this.bonuses.push(' ');
    }
    this.nextFrame();
};

BowlingGame.prototype.nextFrame = function() {
    this.allFrameScores.push(this.currentFrameScore);
    this.currentBowl = 1;
    this.currentFrameScore = 0;
    this.currentFrame += 1;
    this.totalScore = this.allFrameScores.reduce(function(a,b) {
      return a + b;
    },0);
  };

BowlingGame.prototype.isStrike = function(num) {
  return num === 10;
};

BowlingGame.prototype.strike = function() {
  this.bonuses.push('X');
  this.nextFrame();
};

BowlingGame.prototype.isSpare = function(num) {
  return num === 10;
};

BowlingGame.prototype.spareBonus = function(pins) {
  if(this.bonuses[this.bonuses.length - 1] === "/") {
    this.allFrameScores[this.allFrameScores.length - 1] += pins;
}
};

BowlingGame.prototype.strikeBonus = function(pins) {
  if(this.bonuses[this.bonuses.length - 1] === "X") {
    this.allFrameScores[this.allFrameScores.length - 1] += pins;
  }
  if(this.bonuses[this.bonuses.length - 1] === "X" && this.bonuses[this.bonuses.length - 2] === "X") {
    this.allFrameScores[this.allFrameScores.length - 1] += pins;
  }
};
