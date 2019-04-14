function Bowling() {
  this._result = 0;
  this._frames = []
};

Bowling.prototype.roll = function(pins) {
 var frame = new Frame();
 frame.roll(pins);
};


Bowling.prototype.result = function() {
  return this._result;
};
