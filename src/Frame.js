function Frame() {
  this.first = null;
  this.second = null;
};

Frame.prototype.isStrike = function() {
  return (this.first === 10);
};

Frame.prototype.isSpare = function() {
  return (this.first < 10 && this.first + this.second === 10);
};

Frame.prototype.setShots = function(first, second) {
  this._validateShots(first, second);
  this.first = first;
  this.second = second;
};

Frame.prototype._validateShots = function(first, second) {
  if (!this._isInteger(first))
    { throw new Error('Integer argument required'); };
  if (first < 0 || first > 10)
    { throw new Error('Argument out of range'); };
  if (first < 10 && !this._isInteger(second))
    { throw new Error('Two integer arguments required'); };
  if (first < 10 && (second < 0 || second > (10 - first)))
    { throw new Error('Second argument out of range'); };
};

Frame.prototype._isInteger = function(arg) {
  return (typeof(arg) === 'number' && arg % 1 === 0);
};
