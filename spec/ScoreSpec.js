function Score () {
  this.presentScore = 0
}

Score.prototype.total = function(){ return this.presentScore; };

Score.prototype.add = function(number) {
  this.presentScore += number;
};
