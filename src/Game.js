function Game() {
  this.total = 0;
  var array = new Array();
  for (var i=0; i<12; i++) {
    array.push([0, 0]);
  }
  this.frames = array
};

Game.prototype.setScores = function(nth, rolls, fallenPins) {
  return this.frames[nth-1][rolls-1] = fallenPins;
}

Game.prototype.countFrameScores = function(nth) {
  var sum = 0;
  var frameScores = this.frames[nth-1][0] + this.frames[nth-1][1]
  if (this.isStrike(nth)) {
    return sum = frameScores + this.strikeBonusScores(nth);
  } else if (this.isSpare(nth)) {
    return sum = frameScores + this.spareBonusScores(nth);
  } else {
    return sum = frameScores;
  }
}

Game.prototype.isSpare = function(nth) {
  if (this.frames[nth-1] != undefined) {
    return (this.frames[nth-1][0] + this.frames[nth-1][1] === 10)
  }
}

Game.prototype.spareBonusScores = function(nth) {
  return this.frames[nth][0]
}

Game.prototype.isStrike = function(nth) {
  if (this.frames[nth-1] != undefined) {
    return (this.frames[nth-1][0] === 10)
  }  
}

Game.prototype.strikeBonusScores = function(nth) {
  if (this.frames[nth][0] === 10) {
    return this.frames[nth][0] + this.frames[nth+1][0]
  } else {
    return this.frames[nth][0] + this.frames[nth][1]
  }
}

Game.prototype.addScores = function(nth) {
  for (var i=0; i<nth; i++) {
    this.total += this.countFrameScores(i+1);
  }
  return this.total;
}
