var Game = function() {
  this.rolls = [];
  this.currentRoll = 0;
  this.lastHits = [];
  this.sum = 0;
};

Game.prototype.roll = function(hits) {
  this.rolls[this.currentRoll++] = hits;
  this._totalGameScore();
  if (this.currentRoll === 20) {
    this._endGame();
  }
};

Game.prototype._totalGameScore = function() {
  return this._findSpares() + this._findStrikes() + this._findTwoStrikes() + this._totalScores();
};

Game.prototype._totalScores = function() {
  var totalScore = 0;
  this.rolls.map(function(item) {
    totalScore += item;
  });

  return totalScore;
};
Game.prototype.currentGameRoll = function() {
  var roll = (this.currentRoll);
  return roll;
};
Game.prototype.currentGameFrame = function() {
  var frame = (Math.round(this.currentRoll / 2));
  return frame;
};
Game.prototype._findStrikes = function() {
  var totalStrikeBonus = totalStrikeBonus || 0;
  for (i = 0; i < this.rolls.length; i++) {
    if (i % 2 == 0) {
      if (this.rolls[i] === 10) {
        totalStrikeBonus = totalStrikeBonus + ((this.rolls[i + 2] || 0) + (this.rolls[i + 3] || 0));
      }
    }
  }
  return totalStrikeBonus;
};
Game.prototype._findTwoStrikes = function() {
  var totalStrikeBonus = totalStrikeBonus || 0;
  for (i = 0; i < this.rolls.length; i++) {
    if (i % 2 == 0) {
      if ((this.rolls[i] === 10) && (this.rolls[i + 2] === 10)) {
        this.rolls[i] = 30;
        totalStrikeBonus = totalStrikeBonus - 10;
      }
    }
  }
  return totalStrikeBonus;
};
Game.prototype._findSpares = function() {
  var totalSpareBonus = totalSpareBonus || 0;
  for (i = 0; i < this.rolls.length; i++) {
    if ((i % 2 != 0)) {
      if ((this.rolls[i] + this.rolls[i - 1] === 10) && (this.rolls[i - 1] !== 10)) {
        totalSpareBonus = totalSpareBonus + (this.rolls[i + 1] || 0);
      }
    }
  }
  return totalSpareBonus;
};

Game.prototype._endGame = function() {
  if (this.roll[19] === 10) {
    console.log('Congratulations - you scored a Strike in the last Frame - you get two extra rolls');
  } else if ((this.rolls[20] + this.rolls[19] === 10) && (this.rolls[19] !== 10)) {
    console.log('Congratulations - you scored a Spare in the last Frame - you get an extra roll');
  } else {
    console.log('Game Over');
  }
};

Game.prototype._lastRoll = function(num) {
  this.lastHits.push(num);
  lastHitsFloat = 0;
  sum = this.lastHits.reduce(function(a, b) {
    return a + b;
  });
};

Game.prototype._grandTotal = function() {
  return sum + this._totalGameScore();
};
