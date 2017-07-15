function Game() {
  this.frames = [];
  this.score = 0;
}

Game.prototype.addFrame = function(frame) {
  if (this.frames.length === 11) {
    throw "Game over!"
  } else if (this.frames.length === 10 && this.frames[9].score < 10) {
    throw "Game over!"
  } else {
    this.frames.push(frame)
  }
}

Game.prototype.totalScore = function() {
  this.frames.forEach(function(frame) {
    this.score += frame.score;
  }.bind(this));
  this._strikeBonus();
  this._spareBonus();
}

Game.prototype._spareBonus = function() {
  spareIndx = this.frames.reduce((a, e, i) => (e.spare === true) ? a.concat(i) : a, [])
  spareIndx.forEach(function(frame) {
    this.score += this.frames[frame + 1].bowls[0];
  }.bind(this));
}

Game.prototype._strikeBonus = function() {
  strikeIndx = this.frames.reduce((a, e, i) => (e.strike === true) ? a.concat(i) : a, [])
  strikeIndx.forEach(function(frame) {
    this.score += this.frames[frame + 1].score;
  }.bind(this));
}
