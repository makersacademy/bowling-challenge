function Game() {
  this.scores = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
  this.scoresRaw = [];
  this.rollBreakdown = ["-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-", "-"];
  this.rollBreakdownRaw = [];
  this.bonus = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.totals = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  this.pins = [];
}

Game.prototype.scoresRaw = function() {
  return scoresRaw;
}

Game.prototype.frameSet = function() {
  if (this.scoresRaw().length == 10) {
    console.log('Finished!')
  } else if (this.scoresRaw.length == 9) {
    this.tripleTurn();
    if (this.rollBreakdownRaw.length == 21) {
      this.scoresRaw.push(this.rollBreakdownRaw[20] + this.rollBreakdownRaw[19] + this.rollBreakdownRaw[18]);
    } else {
      this.scoresRaw.push(this.rollBreakdownRaw[18] + this.rollBreakdownRaw[19]);
    }
  } else {
    this.doubleTurn();
    var i = this.rollBreakdownRaw.length - 1;
    this.scoresRaw.push(this.rollBreakdownRaw[i] + this.rollBreakdownRaw[i-1]);
  }
}

Game.prototype.rollBUpdate = function() {
  if (this.rollBreakdownRaw.length == 21) {
    for (var c = 0; c < 3; c++)
    this.rollBreakdown[c+18] = this.rollBreakdownRaw[c+18];
  } else {
    a = this.rollBreakdownRaw.length -1;
    this.rollBreakdown[a] = this.rollBreakdownRaw[a]
    this.rollBreakdown[a-1] = this.rollBreakdownRaw[a-1]
  }
}

Game.prototype.scoreUpdate = function() {
  b = this.scoresRaw.length -1;
  this.scores[b] = this.scoresRaw[b]
}

Game.prototype.turn = function(b) {
  b.throw();
  b.domino();
  score = b.score();
  return score;
}

Game.prototype.doubleTurn = function() {
  var bowl = new Bowl;
  score1 = this.turn(bowl);
  this.rollBreakdownRaw.push(score1);
  if (score1 == 10) {
    this.rollBreakdownRaw.push(0);
    alert("Strike!!");
    this.pins = bowl.pins;
    return score1;
  }
  score2 = this.turn(bowl);
  if (score2 == 10) alert("Spare!");
  this.rollBreakdownRaw.push(score2 - score1);
  this.pins = bowl.pins;
}

Game.prototype.tripleTurn = function() {
  var bowl = new Bowl;
  score1 = this.turn(bowl);
  this.rollBreakdownRaw.push(score1);
  if (score1 == 10) {
    alert("Strike!!");
    bowl = new Bowl;
    score2 = this.turn(bowl);
    this.rollBreakdownRaw.push(score2);
    if (score2 == 10) {
      alert("Strike!!");
      bowl = new Bowl;
      score3 = this.turn(bowl);
      this.rollBreakdownRaw.push(score3);
      this.bonus[9] = score2 + score3;
      this.pins = bowl.pins;
      return score3;
    }
    score3 = this.turn(bowl);
    this.rollBreakdownRaw.push(score3 - score2);
    this.bonus[9] = score3;
    this.pins = bowl.pins;
    return score3;
  }
  score2 = this.turn(bowl);
  this.rollBreakdownRaw.push(score2 - score1);
  if (score2 == 10) {
    alert("Spare!");
    bowl = new Bowl;
    score3 = this.turn(bowl);
    this.rollBreakdownRaw.push(score3);
    this.bonus[9] = score3;
    this.pins = bowl.pins;
    return score3
  }
  this.pins = bowl.pins;
  return score2
}

Game.prototype.strikeLogic = function() {
  var d = this.rollBreakdownRaw.length;
  if (d > 2 && d < 20) {
    if (this.rollBreakdownRaw[d-4] == 10) {
      this.bonus[(d/2)-2] = (this.rollBreakdownRaw[d-1] + this.rollBreakdownRaw[d-2]);
    } else if (this.rollBreakdownRaw[d-4] + this.rollBreakdownRaw[d-3] == 10) {
      this.bonus[(d/2)-2] = this.rollBreakdownRaw[d-2];
    }
  } else if (d > 19) {
    if (this.rollBreakdownRaw[16] == 10) {
      this.bonus[8] = (this.rollBreakdownRaw[18] + this.rollBreakdownRaw[19]);
    } else if (this.rollBreakdownRaw[17] + this.rollBreakdownRaw[16] == 10) {
      this.bonus[8] = this.rollBreakdownRaw[18];
    }
  }

  Game.prototype.total = function() {
    var e = this.scoresRaw.length;
    if (e == 2) {
      this.totals[0] = this.scores[0] + this.bonus[0];
    } else if (e > 2 && e <= 9) {
      this.totals[e-2] = this.scores[e-2] + this.bonus[e-2] + this.totals[e-3];
    } else if (e == 10) {
      this.totals[8] = (this.totals[7] + this.scores[8] + this.bonus[8])
      this.totals[9] = (this.totals[8] + this.scores[9]);
    }
  }

}
