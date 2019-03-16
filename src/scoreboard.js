var scoreCard = function () {
  this.score1 = []
  // this.score2 = [[],[],[],[],[],[],[],[],[],[]]
  this.result = 0
  this.turn = 1
};

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


scoreCard.prototype.results = function () {
  var p;
  for (p = 0; p < this.score1.length; p++) {
    if (this.score1[p] == '-') {
      this.result += 0
    }
    else if (this.score1[p] == 'X') {
      this.score1[p] = 10
      this.score1[p] += (this.score1[p+2] + this.score1[p+3]);
      this.result += this.score1[p]
      }
    else if (this.score1[p] == '/') {
        this.score1[p] = (10 - this.score1[p-1]);
        this.score1[p] += this.score1[p+1];
        this.result += this.score1[p]
      }
    else {
      this.result += this.score1[p];
    };
  };
};
