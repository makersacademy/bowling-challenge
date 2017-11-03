
function Game() {
  this._frames = [];
  this._frameCounter = 0;
  this._scores = [];
}

Game.prototype.frames = function() {
  return this._frames;
};

Game.prototype.frameCounter = function() {
  return this._frameCounter;
};

Game.prototype.scores = function() {
  return this._scores;
};

Game.prototype.newframe = function(roll1, roll2) {
this._frameCounter += 1;
this._frames.push([roll1,roll2]);
};

Game.prototype.frameTotal = function(FrameNumber) {
  var frame = this._frames[FrameNumber - 1];
  var total = frame[0] + frame[1];
  return total;
};

Game.prototype.addToScores = function(FrameNumber) {
  var total = this.frameTotal(FrameNumber);
  console.log(total);
  this._scores.push(total);
  console.log(this._scores);
};
