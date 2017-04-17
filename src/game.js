function Game() {
  this.totalScores = [];
  this.scores = [];
  this.rollBreakdown = [];
  this.results = [];
  this.bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
}

Game.prototype.turn = function(bowl) {
  bowl.throw();
  bowl.domino();
  return bowl.score();
}

Game.prototype.frameSet = function() {
  bowl = new Bowl();
  var score1 = this.turn(bowl)
  if (score1 == 10) {
    this.rollBreakdown.push([score1, 0])
    return 'Strike!';
  }
  var score2 = (this.turn(bowl) - score1)
  this.rollBreakdown.push([score1, score2])
  if ((score2 + score1) == 10) return 'Spare!';
  if (score2 < 10) return 'Standard';
}

Game.prototype.lastFrame = function() {
  bowl = new Bowl();
  var score1 = this.turn(bowl)
  if (score1 == 10) {
    var newBowl = new Bowl;
    score2 = this.turn(newBowl);
    if (score2 == 10) {
      score3 = this.turn(new Bowl);
      this.rollBreakdown.push([score1, score2, score3])
      this.bonus[9] = (score2 + score3);
      return 'Strike!'
    } else {
      score3 = (this.turn(newBowl) - score2)
      this.rollBreakdown.push([score1, score2, score3])
      this.bonus[9] = (score2 + score3);
      return 'Strike!'
    }
  } else {
    var score2 = (this.turn(bowl) - score1)
    if (score2 + score1 == 10) {
      score3 = this.turn(new Bowl);
      this.rollBreakdown.push([score1, score2, score3])
      this.bonus[9] = (score2 + score3);
      return 'Spare!'
    } else {
      this.rollBreakdown.push([score1, score2])
      return 'Standard'
    }
  }
  var score3 = this.turn(bowl)
  this.rollBreakdown.push([score1, score2, score3])
}

Game.prototype.play = function() {
  for (y = 0; y < 9; y++) {
    this.results.push(this.frameSet());
    if (y > 0) {
      if (this.results[y-1] === 'Strike!') {
        this.bonus[y-1] = (this.rollBreakdown[y][0]+this.rollBreakdown[y][1]);
      } else if (this.results[y-1] === 'Spare!') {
        this.bonus[y-1] = (this.rollBreakdown[y][0]);
      } else {
        this.bonus[y-1] = 0;
      }
      this.scores.push(this.bonus[y-1] + this.rollBreakdown[y-1][0] + this.rollBreakdown[y-1][1]);
    }
  }
  this.results.push(this.lastFrame());
  if (this.results[8] == 'Strike!') {
    this.bonus[8] = (this.rollBreakdown[9][0] + this.rollBreakdown[9][1]);
  } else if (this.results[8] == 'Spare!') {
    this.bonus[8] = this.rollBreakdown[9][0];
  }
  this.scores.push(this.bonus[8] + this.rollBreakdown[8][0] + this.rollBreakdown[8][1]);
  if (this.bonus[9] == 0) {
    this.scores.push(this.rollBreakdown[9][0] + this.rollBreakdown[9][1]);
  } else {
    this.scores.push(this.rollBreakdown[9][0] + this.rollBreakdown[9][1] + this.rollBreakdown[9][2]);
  }
}

Game.prototype.totalScore = function() {
  this.totalScores.push(this.scores[0]);
  for (j = 1; j < 10; j++) {
    this.totalScores.push(this.totalScores[j-1]+this.scores[j]);
  }
  return this.totalScores;
}
