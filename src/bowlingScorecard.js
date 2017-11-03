
function Game() {
  this._frames = [];
  this._frameCounter = 0;
  this._scores = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: []
  };
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

Game.prototype.isStrike = function(FrameNumber) {
  var frame = this._frames[FrameNumber - 1];
   if (frame[0] == 10);
   return true;
};

Game.prototype.isSpare = function(FrameNumber) {
  if (FrameNumber == 0) {
    return false;
  } else {
  var frame = this._frames[FrameNumber - 1];
  if (frame[0] + frame[1] == 10)
  return true;
}
};

Game.prototype.newframe = function(roll1, roll2) {
this._frameCounter += 1;
this._frames.push([roll1, roll2]);
};

Game.prototype.frameTotal = function(FrameNumber) {
  var frame = this._frames[FrameNumber - 1];
  var total = frame[0] + frame[1];
  return total;
};

Game.prototype.addToScores = function(FrameNumber) {
    if (this.isSpare(FrameNumber - 1)) {
    this._scores[FrameNumber - 1] = this.addSpareTotal(FrameNumber);
      if (this.isSpare(FrameNumber)){
      return;}
      else {var total = this.frameTotal(FrameNumber);
      this._scores[FrameNumber] = total;
      }
    }
  else {
    var total = this.frameTotal(FrameNumber);
    this._scores[FrameNumber] = total;
}
};

Game.prototype.addSpareTotal = function(FrameNumber) {
  var bonusRoll = this._frames[FrameNumber - 1][0];
  return bonusRoll + 10;
};
