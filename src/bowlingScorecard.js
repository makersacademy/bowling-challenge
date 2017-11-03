
function Game() {
  this._frames = [];
  this._frameCounter = 0;
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.frameCounter = function() {
  return this._frameCounter;
};

Game.prototype.newframe = function(roll1, roll2) {
this._frameCounter += 1;
this._frames.push([roll1,roll2]);
};

Game.prototype.frameTotal = function() {
  var frame = this._frames[0];
  var total = frame[0] + frame[1];
  return total;
};
