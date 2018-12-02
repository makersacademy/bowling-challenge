function Game() {
  this._frames = [];
  this._score = 0;
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.roll = function(pins) {
  this._frames.push(pins);
};

Game.prototype.score = function() {
  this._calculateScore();
  return this._score;
};

Game.prototype._calculateScore = function() {
  this._score = this._frames.reduce( function(frame, score){
    return frame + score
  });
}
