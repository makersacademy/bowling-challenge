var Game = function() {
  this._frames = [];
};

Game.prototype.roll = function(rolls) {
  frame = new Frame(rolls);
  this._frames.push(frame);
};

Game.prototype.score = function() {
  return this._frames.reduce(function(score, frame, index, frames){
    return score + frame.total(frames[index + 1], frames[index + 2]);
  }, 0);
};