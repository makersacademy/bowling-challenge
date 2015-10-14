BowlingScore.prototype._isStrikeOld = function(i) {
  return this.frameScores[i][0] === 10;
};

BowlingScore.prototype._isSpareOld = function(i) {
  return (this._isStrike(i) === false) && (this.frameScores[i][0] + this.frameScores[i][1] === 10);
};

BowlingScore.prototype._addFrameBonus_Old = function(i,bonusPool) {
  if (this._isStrikeOld(i)) {
    this.frameBonus.push(bonusPool[0] + bonusPool[1]);
  } else if (this._isSpareOld(i)) {
    this.frameBonus.push(bonusPool[0]);
  } else {
    this.frameBonus.push(0);
  };
};


///////before replace undefined with bangs

function BowlingScore() {
  this.rawScores = [];
};

BowlingScore.prototype.addRoundToRawScores = function(score) {
  this.rawScores.push(score);
};

BowlingScore.prototype.createFrameScores = function() {
  this.frameScores = [[this.rawScores[0]]];
  for(var i = 1; i < this.rawScores.length; i+=1) {
    if (this._isItOneRoundPlayedAndNotStrike()) {
      (this.frameScores[this.frameScores.length - 1]).push(this.rawScores[i]);
    } else {
      this.frameScores.push([this.rawScores[i]]);
    };
  };
};

BowlingScore.prototype.createFrameBonus = function() {
  this.frameBonus = [];
  for(var i = 0; i < this.frameScores.length; i+=1) {
    var bonusPool = this._frameBonusPool(i);
    this._addFrameBonus(i,bonusPool);
  };
};

BowlingScore.prototype.createFrameTotals = function() {
  this.frameTotals = [];
  for(var i = 0; i < this.frameScores.length; i+=1) {
    var total = _flattenArray([this.frameScores[i],this.frameBonus[i]]);
    this.frameTotals.push(_sumArray(total));
  };
};

BowlingScore.prototype.createGameTotal = function() {
  this.gameTotal = 0;
  var limit = this.frameTotals.length < 10 ? this.frameTotals.length : 10;
  for(var i = 0; i < limit; i+=1) {
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

BowlingScore.prototype._isItOneRoundPlayedAndNotStrike = function() {
  return (this.frameScores[this.frameScores.length - 1]).length === 1 &&
          this.frameScores[this.frameScores.length - 1][0] !== 10
};

BowlingScore.prototype._frameBonusPool = function(i) {
  if (this.frameScores[i+1] === undefined) {
    return [0,0];
  } else if (this.frameScores[i+2] === undefined) {
    return _flattenArray([this.frameScores[i+1],0]);
  } else {
    return _flattenArray([this.frameScores[i+1],this.frameScores[i+2]]);
  };
};

BowlingScore.prototype._addFrameBonus = function(i,bonusPool) {
  if (this._isStrike(i)) {this.frameBonus.push(bonusPool[0] + bonusPool[1]);};
  if (this._isSpare(i)) {this.frameBonus.push(bonusPool[0]);};
  if (this._isNoBonus(i)) {this.frameBonus.push(0);};
};

BowlingScore.prototype._isStrike = function(i) {
  return this.frameScores[i][0] === 10;
};

BowlingScore.prototype._isSpare = function(i) {
  if (this._isStrike(i) || this.frameScores[i].length === 1) {return false;};
  if (this.frameScores[i][0] + this.frameScores[i][1] === 10) {return true;};
  return false;
};

BowlingScore.prototype._isNoBonus = function(i) {
  if (this._isStrike(i) || this._isSpare(i)) {return false;};
  return true;
};

var _flattenArray = function(array) {
  return [].concat.apply([], array);
};

var _sumArray = function(array) {
    return array.reduce(function(a, b) {return a + b;})
};
