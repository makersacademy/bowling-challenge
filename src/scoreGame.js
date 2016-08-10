function ScoreGame() {
  this.scoreCard = [];
  this.frame =[];
  this.totalScore = 0;
  this.chance = 2;
}

ScoreGame.prototype.getScore = function() {
  var score = Math.floor(Math.random()*10)+1;
  console.log('score', score);
  this.frame.push(score);
  return score;
}

ScoreGame.prototype.calcBonus = function(score) {
  return score+10;
}

ScoreGame.prototype.total = function(score, bonus) {
  this.totalScore += score + bonus;
  this.frame.push(this.totalScore);
  return this.totalScore;
}
