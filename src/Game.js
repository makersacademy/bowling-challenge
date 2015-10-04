function Game() {
  this.total = 0;
  var array = new Array();
  for (var i=0; i<11; i++) {
    array.push(new Array(2));
  }
  this.frames = array
};

// Game.prototype.countFallenPins = function(pins) {
//   this.total += pins
// };

Game.prototype.countFrameScores = function(nth) {
  var sum;
  sum = this.frames[nth-1][0] + this.frames[nth-1][1];
  if (this.bonusScores(nth) === undefined) {
    return sum;
  } else {
    return sum + this.bonusScores(nth);
  }
}

Game.prototype.bonusScores = function(nth) {
  var currentScores, spareBonus, strikeBonus;
  currentScores = this.frames[nth-1][0] + this.frames[nth-1][1]
  if (this.frames[nth-1][0] === 10) {
    if (this.frames[nth][0] === 10) {
      return strikeBonus = this.frames[nth][0] + this.frames[nth+1][0];
    } else {
      return strikeBonus = this.frames[nth][0] + this.frames[nth][1];
    }
  } else if ( currentScores === 10) {
    return spareBonus = this.frames[nth][0];
  }
}

Game.prototype.addScores = function(nth) {
  for (var i=0; i<nth; i++) {
    this.total += this.countFrameScores(i+1);
  }
  return this.total;
}
