function Frame() {
  this.current = [];
  this.position = 1;
};

Frame.prototype.add = function(n) {
  this.current.push(n);
  this.position === 1 ? this.position = 2 : this.position = 1;
};

Frame.prototype.total = function() {
  return this.current[0] + this.current[1];
}

// Private

Frame.prototype._isEnded = function() {
  if (this.current.length === 2) {
    return true;
  } else {
    return false;
  };
};
