function Score() {
  this.total = 0;
  this.frame = new Frame();
  this.card = [];
};

Score.prototype.bowl = function(n) {
  this.frame.add(n);
  this._frameCheck();
  return n;
};

// Private

Score.prototype._frameCheck = function() {
  if (this.frame._isEnded()) {
    this.card.push(this.frame.current);
    this.total += this.frame.total();
    this.frame = new Frame();
  };
};
