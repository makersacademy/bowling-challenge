Game = function() {
  this._currentScore = 0
  this._frame = 1
  this._frameBowlCount = 0
}

Game.prototype.inputScore = function(number) {
  if (number === "strike") {
    this._currentScore += 10;
  } else {
  this._currentScore += number;
  this._frameBowlCount += 1 };
  if (this._frameBowlCount === 2) {
    this.nextFrame()
  };
};

Game.prototype.nextFrame = function () {
  this._frame += 1;
  this._frameBowlCount = 0;
};
