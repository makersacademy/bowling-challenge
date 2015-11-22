function Game() {
	this.score = [];
}

Game.prototype.currentScore = function() {
  // return this.score
  var total = 0
	for(var i = 0, len = this.score.length; i < len; i++) {
    total += this.score[i]
  }
  return total;

};
//
Game.prototype.bowl = function(inputScore) {
  this.score.push(inputScore)
};
