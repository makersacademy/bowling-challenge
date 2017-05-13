function Frame() {
  this.current = [];
};

Frame.prototype.add = function(n) {
  this.current.push(n);
};
