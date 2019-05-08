function Bowling(){
  this._pins =[]
}

Bowling.prototype.score = function() {
  return this._pins[0];
};

Bowling.prototype.pins = function(number) {
  this._pins.push(number);
};
