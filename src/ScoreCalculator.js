function ScoreCalculator () {
  this._currentScore = 0;
  this._strikes = [];
  this._spare = false;
}

ScoreCalculator.prototype.getCurrentScore = function () {
  return this._currentScore;
};

ScoreCalculator.prototype.registerSpare = function (total) {
  if(total === 10) {
    return this._spare = true;
  }
};

ScoreCalculator.prototype.registerStrike = function (roll1) {
  if (roll1 === 10) {
    this._currentScore += 10;
    this._strikes.push(true);
    return true;
  }
};

ScoreCalculator.prototype.calculateScore = function (roll1, roll2, roll3) {
  this._currentScore += roll1 + roll2 + (roll3 || 0);
  this.calculateStrikeBonus(roll1, roll2);
  this.calculateSpareBonus(roll1);
};

ScoreCalculator.prototype.calculateSpareBonus = function (roll1) {
  if(this._spare) {
    this._currentScore += roll1;
    this._spare = false;
  }
};

ScoreCalculator.prototype.calculateStrikeBonus = function (roll1, roll2) {
  for (var i = this._strikes.length; i > 0; i--){
    this._currentScore += (i-1)*10;
    this._strikes.pop();
    if(i === 1) {
      this.calculateScore(roll1, roll2);
    }
  }
};
