Frame = function() {
  this._roll1 = 0;
  this._roll2 = 0;
  this._score = 0;
  this._bonus = "";
};

Frame.prototype.roll1 = function() {
  var x = [];
  x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this._roll1 = x[Math.floor(Math.random() * x.length)];
  this._score = this._score + this._roll1;
  return this._roll1;
};

Frame.prototype.roll2 = function() {
  var y = [];
  y = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  this._roll2 = y[Math.floor(Math.random() * y.length)];
  this._score = this._score + this._roll2;
  return this._roll2;
};
