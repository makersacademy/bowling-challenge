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
  } else {
    this.scorecard[this.frame].push(pinsDown)
  }
  return result;
};

Game.prototype.nextRoll = function() {
  if (this.frame === 10 && this.scorecard[10].length > 0){
    if ( (this.scorecard[10][0] + this.scorecard[10][1]) >= 10) {
      return this.rollTurn = 3
    }
  } else {
  if (this.rollTurn === 1) {
    return this.rollTurn = 2
  } else {
    return this.rollTurn = 1
    }
  }
};

Game.prototype.nextFrame = function() {
  return this.frame += 1
};

Game.prototype._strike = function() {
  this.scorecard[this.frame].push(10)
  return 'X'
};


// Strike bonus recording
Game.prototype.isPreviousStrike = function() {
  return this.scorecard[this.frame - 1][0] === 10
};

Game.prototype.strikeBonus = function() {
  if (this.isPreviousStrike()){
    this.scorecard[this.frame - 1].push(this.frameScore(this.frame))
  }
};

// Spare bonus recording

Game.prototype.isPreviousSpare = function() {
  return this.scorecard[this.frame - 1][0] + this.scorecard[this.frame - 1][0] === 10
};

Game.prototype.spareBonus = function() {
  if (this.isPreviousSpare()) {
    this.scorecard[this.frame - 1].push(this.scorecard[this.frame][0])
  }
};

// Calcs
Game.prototype.frameScore = function(frame) {
  return this.scorecard[frame].reduce(function(sum, element) {
    return sum += element });
};

Game.prototype.totalScore = function() {
  var totalScore = 0;
  for (i = 1; i <= this.frame; i++ ) {
    totalScore += this.frameScore(i);
  }
  return totalScore;
};
