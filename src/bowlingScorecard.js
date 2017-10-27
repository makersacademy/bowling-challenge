
function Game() {
  this._frames = [];
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.newframe = function(roll1, roll2) {
this._frames.push([roll1,roll2]);
};
