var scoreCard = function () {
  this.score1 = [[],[],[],[],[],[],[],[],[],[]]
  this.score2 = [[],[],[],[],[],[],[],[],[],[]]
  this.result = 0
  this.turn = 0
};

scoreCard.prototype.bowl1 = function (scoreone) {
  this.scoreone = scoreone
  if (scoreone <10)
  {this.score1[this.turn].push(scoreone)}
  else if (scoreone == "strike")
  {this.score1[this.turn].push('X');
  this.score2[this.turn].push('-')}
  else
  {return "give strike or score?"};
};

scoreCard.prototype.bowl2 = function (scoretwo) {
  this.scoretwo = scoretwo
  if (this.score1[this.turn] == 'X')
  {'Strike first bowl!'}
  else if (this.scoreone + this.scoretwo == 10)
  {this.score2[this.turn].push('/')}
  else if (scoretwo < 10)
  {this.score2[this.turn].push(scoretwo)}
  else
  {return "give strike or score?"};

  this.turn ++
};

scoreCard.prototype.results = function () {
  this.result = this.score1.reduce(function(a, b) { return a + b});
};
