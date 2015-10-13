function BowlingScore() {
  this.rawScores = [];
};

BowlingScore.prototype.addRoundToRawScores = function(score) {
  this.rawScores.push(score);
};

BowlingScore.prototype.createFrameScores = function() {
  this.frameScores = [];
  if (this.frameScores.length === 0) {this.frameScores.push([this.rawScores[0]])};
  for(i = 1; i < this.rawScores.length; i+=1) {
    if ((this.frameScores[this.frameScores.length - 1]).length === 1 && this.frameScores[this.frameScores.length - 1][0] !== 10) {
      (this.frameScores[this.frameScores.length - 1]).push(this.rawScores[i]);
    } else {
      this.frameScores.push([this.rawScores[i]]);
    };
  };
};

BowlingScore.prototype.createFrameBonus = function() {
  this.frameBonus = [];
  for(i = 0; i < this.frameScores.length; i+=1) {
    if (this.frameScores[i+1] === undefined) {
      var bonus_pool = [0,0];
    } else if (this.frameScores[i+2] === undefined) {
      var bonus_pool = [this.frameScores[i+1],0];
      bonus_pool = [].concat.apply([], bonus_pool);
    } else {
      var bonus_pool = [].concat.apply([],[this.frameScores[i+1],this.frameScores[i+2]]);
    };
    if (this.frameScores[i][0] === 10) {
      this.frameBonus.push(bonus_pool[0] + bonus_pool[1]);
    } else if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {
      this.frameBonus.push(bonus_pool[0]);
    } else {
      this.frameBonus.push(0);
    };
  };
};

BowlingScore.prototype.createFrameTotals = function() {
  this.frameTotals = [];
  for(i = 0; i < this.frameScores.length; i+=1) {
    var total = [].concat.apply([], [this.frameScores[i],this.frameBonus[i]]);
    this.frameTotals.push(total.reduce(function(a, b) {return a + b;}));
  };
};

BowlingScore.prototype.createGameTotal = function() {
  this.gameTotal = 0;
  if (this.frameTotals.length < 10) {var limit = this.frameTotals.length} else {var limit = 10};
  for(i = 0; i < limit; i+=1) {
    this.gameTotal += this.frameTotals[i];
  };
};

BowlingScore.prototype.newRound = function(score) {
  this.addRoundToRawScores(score);
  this.createFrameScores();
  this.createFrameBonus();
  this.createFrameTotals();
  this.createGameTotal();
};

//
// [2,4,2,3,6,2]
//
// {f1:[2,4],f2:[2,3]}
//
// [[2,4],[2,3],[10]]
