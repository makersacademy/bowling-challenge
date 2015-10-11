var Game = function() {
  this.frame = 1
  this.rollTurn = 1
  this.scorecard = {1: [], 2: [], 3: [], 4: [], 5: [],
                    6: [], 7: [], 8: [], 9: [], 10: []}
};

Game.prototype.throwBall = function(pinsDown) {
  var result = pinsDown;
  if (pinsDown === 10 && this.rollTurn === 1) {
    result = this._strike();
  // ths.rollTurn check made twice, merge with ^
  } else if (this.rollTurn === 1) {
    this.scorecard[this.frame].push(pinsDown)
    this._nextRoll();
  } else {
    this.scorecard[this.frame].push(pinsDown)
    this._nextRoll();
    this._nextFrame();
  }
  return result;
};

Game.prototype._nextRoll = function() {
  if (this.rollTurn === 1) {
    this.rollTurn = 2
  } else {
    this.rollTurn = 1
  }
};

Game.prototype._nextFrame = function() {
  this.frame += 1
};

Game.prototype._strike = function() {
  this.scorecard[this.frame].push(10)
  this._nextFrame();
  return 'X'
};

Game.prototype._isPreviousStrike = function() {
  return this.scorecard[this.frame - 1][0] === 10
};

Game.prototype._strikeBonus = function() {
  if (this._isPreviousStrike) {
    this.scorecard[this.frame - 1].push(this._frameScore[this.frame])
  }
};

Game.prototype._frameScore = function(frame) {
  return this.scorecard[frame].reduce(function(sum, element) {
    return sum += element });
};

//Calcs probalem <=, cannot see score half way through the roll.
Game.prototype.totalScore = function() {
  var totalScore = 0;
  for (i = 1; i < this.frame; i++ ) {
    totalScore += this._frameScore(i);
  }
  return totalScore;
};
