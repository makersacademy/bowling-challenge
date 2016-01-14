function Game(){
  this.scores = []
  this.currentScore = []
  this.totalScore = 0
}

Game.prototype.bowl = function (number) {
  this.currentScore.push(number)
  if (this.scores.length > 0 && this.scores.slice(-1)[0][0] === 10) {
    this.scores.slice(-1)[0].push(number)}
  if (this.scores.length >= 2) {
  if (this.scores.slice(-2)[0][0] === 10)
    {this.scores.slice(-2)[0].push(number)}
  }
  this.scores.push(this.currentScore)
  this.currentScore = []
};

Game.prototype._countScore = function() {
    var total = [].concat.apply([], this.scores)
    this.totalScore += total.reduceRight(function(a,b){return a+b;})
 };
