function Score() {
  this.totalScore = 0;
  this.frame = new Frame();
};

Score.prototype.bowl = function(n) {
  this.frame.add(n);
  this._frameCheck();
}

// Private

Score.prototype._frameCheck = function() {
  
}
