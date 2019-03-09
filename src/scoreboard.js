var scoreCard = function () {
  this.score1 = []
  this.score2 = [[],[],[],[],[],[],[],[],[],[]]
  this.result = 0
  this.turn = 1
};
do {
scoreCard.prototype.bowl1 = function (scoreone) {
  this.scoreone = scoreone
  if (this.turn % 2 == 0 && (this.score1[this.turn-2] + scoreone) == 10)
  { this.score1.push('/')}
  else if (scoreone <10)
  {this.score1.push(scoreone)}
  else if (scoreone == "strike" || scoreone == 10)
  {this.score1.push('X');
  this.score1.push('-');}
  else
  {return "give strike or score?"};
  this.turn ++
};
//
// scoreCard.prototype.bowl2 = function (scoretwo) {
//   this.scoretwo = scoretwo
//   if (this.scoreone + this.scoretwo == 10)
//   {this.score1.push('/')}
//   else if (scoretwo < 10)
//   {this.score1.push(scoretwo)}
//   else
//   {return "give strike or score?"};
//
//   this.turn ++
// };
} while (this.turn <= 20)

scoreCard.prototype.results = function () {

};
