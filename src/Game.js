function Game() {
  this.total = 0;
  var array = new Array();
  for (var i=0; i<10; i++) {
    array.push(new Array(2));
  }
  this.frames = array
};

Game.prototype.countFallenPins = function(pins) {
  this.total += pins
};

Game.prototype.countFrameScores = function(nth) {
  var sum, spareBonus, strikeBonus;
  spareBonus = this.frames[nth][0];
  strikeBonus = spareBonus + this.frames[nth][1];
  sum = this.frames[nth-1][0] + this.frames[nth-1][1];
  if (this.frames[nth-1][0] === 10) {
    sum += strikeBonus;
  } else if (sum === 10) {
    sum += spareBonus;
  }
  return sum;
}
