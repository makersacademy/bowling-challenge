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
  var index = 0;
  var i;
  for (var i = 0; i < 10; i++) {
    frame = [this._frames[index], this._frames[index+1]]
    nextFrame = [this._frames[index+2], this._frames[index+3]]
    if (this._isASpare(frame)) {
      this._score += (10 + nextFrame[0]);
      index += 2;
    } else if (this._isAStrike(frame)) {
      this._score += (10 + nextFrame.reduce(add, 0));
      index += 2;
    } else {
      this._score += frame.reduce(add, 0);
      index += 2;
    }
  }
  return this._score;
}

Game.prototype._isASpare = function(frame) {
  if (frame[0] + frame[1] === 10) return true;
}

Game.prototype._isAStrike = function(frame) {
  if (frame[0] === 10) return true;
}

// needs to belong to frame once I create that class...
function add(a, b) {
    return a + b;
};
