function BowlingGame() {
  this.currentFrameScore = 0;
  this.totalScore = 0;
  this.allFrameScores = [];
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.allBowls = [];
  this.bonuses = [];
  this.skipBonus = false;
}

BowlingGame.prototype.playerTurn = function(pins) {
  if (this.currentFrame < 11) {
  if (this.currentBowl === 1) {
    this.firstBowl(pins);
  }
  else if (this.currentBowl === 2)
    {if (this.currentFrame === 10) {
      this.skipBonus = true;
      }
    this.secondBowl(pins);
    }
  else if (this.currentBowl === 3) {
    this.currentFrameScore += pins;
    this.nextFrame();
  }
}
};

BowlingGame.prototype.firstBowl= function(pins) {
  this.currentFrameScore += pins;
  this.addBonuses(pins);
  this.isStrike(pins);
  this.allBowls.push(pins);
};

BowlingGame.prototype.secondBowl = function(pins) {
  this.currentFrameScore += pins;
  this.addStrikeBonus(pins);
  this.isSpare(this.currentFrameScore);
  this.allBowls.push(pins);
  if (this.currentFrame < 10) {
    this.nextFrame();
  } else {
    this.currentBowl = 3;
  }
};

BowlingGame.prototype.nextFrame = function() {
    this.calculateScores();
    this.currentBowl = 1;
    this.currentFrame += 1;
  };

BowlingGame.prototype.calculateScores = function() {
  this.allFrameScores.push(this.currentFrameScore);
  this.totalScore = this.allFrameScores.reduce(function(a,b) {
  return a + b;
},0);
  this.currentFrameScore = 0;
};

BowlingGame.prototype.isStrike = function(num) {
  if (num === 10) {
    this.bonuses.push('X');
    this.nextFrame();
  } else {
    this.currentBowl = 2;
  }
};

BowlingGame.prototype.isSpare = function(num) {
  if (num === 10) {
    this.bonuses.push('/');
  } else {
    this.bonuses.push(' ');
  }
};

BowlingGame.prototype.addBonuses = function(pins) {
  this.addSpareBonus(pins);
  this.addStrikeBonus(pins);
};

BowlingGame.prototype.addSpareBonus = function(pins) {
  if(this.bonuses[this.bonuses.length - 1] === "/") {
    this.allFrameScores[this.allFrameScores.length - 1] += pins;
  }
};

BowlingGame.prototype.addStrikeBonus = function(pins) {
  if (this.skipBonus === false) {
    if(this.bonuses[this.bonuses.length - 1] === "X") {
      this.allFrameScores[this.allFrameScores.length - 1] += pins;
    }
  }
  if(this.allBowls[this.allBowls.length - 2] === 10)
    this.allFrameScores[this.allFrameScores.length - 2] += pins;
};
