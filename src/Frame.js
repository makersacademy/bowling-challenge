function Frame() {
  this.current = [];
};

Frame.prototype.add = function(n) {
  this.current.push(n);
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
