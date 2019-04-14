function Bowling(frame = new Frame()) {
  this._currentFrame = frame;
  this._result = 0;
  this._frames = [];
};

Bowling.prototype.roll = function(pins) {
  this._currentFrame.roll(pins);
  if (this._currentFrame.isOver() && this._frames.length < 10){
    this._frames.push(this._currentFrame);
    this._currentFrame = new Frame();
  };
};


Bowling.prototype.result = function() {
  return this._result;
};
