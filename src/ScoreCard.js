
function Score() {
  this.currentScore = 0
}

Score.prototype.total = function(){ return this.currentScore; };

Score.prototype.add = function(number) {
  this.currentScore += number;
};
