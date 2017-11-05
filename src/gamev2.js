function Game() {

  var round = [0, 0, 0]; // [0: first turn score, 1: second turn score, 2: total]
  var scoreSheet = new ScoreSheet();
  var frame = 1;
  var turn = 1;

  adjustForBonuses = function(roll, turn) {
    scoreSheet.adjustForBonuses(roll, turn);
  };

  adjustFrameAndTurn = function(roll) {
    if (roll === 10) {
      frame += 1;
    } else {
      if (turn === 1) {
        turn += 1;
      } else {
        turn -= 1;
        frame += 1;
      }
    }
  };

  addRollToRound = function(roll) {
    round[turn - 1] = roll;
  };

  Game.prototype.roll = function(roll) {
    if (turn === 1) round = [0, 0, 0];
    addRollToRound(roll);
    adjustForBonuses(roll, turn);
    if (scoreSheet.isEndOfGame(round, turn) || ((roll === 10) || (turn === 2))) scoreSheet.addRound(round, turn);
    adjustFrameAndTurn(roll);
  };

  Game.prototype.scoreSheet = function() {
    return scoreSheet;
  };

  Game.prototype.score = function() {
    return scoreSheet.score();
  };
}



function ScoreSheet() {

  var round;
  var rounds = [];
  var endOfGame = false;

  adjustForSpares = function(roll) {
    var len = rounds.length;
    if (len > 0) {
      if (rounds[len - 1][3] === 'spare') {
        rounds[len - 1][2] += roll;
      }
    }
  };

  adjustForStrikes = function(roll, turn) {
    var len = rounds.length;
    if ((len > 0) && (rounds[len - 1][3] === 'strike') && (len < 10)) rounds[len - 1][2] += roll;
    if ((turn === 1) && (len > 1) && (rounds[len - 2][3] === 'strike') && (rounds[len - 1][3] === 'strike')) {
      if (len < 11) rounds[len - 2][2] += roll;
    }
  };

  calculateScore = function() {
    rounds[rounds.length - 1][2] = rounds[rounds.length - 1][0] + rounds[rounds.length - 1][1];
  };

  checkForBonus = function() {
    if (round[0] === 10) {
      round.push('strike');
    } else if ((round[0] + round[1]) === 10) {
      round.push('spare');
    } else {
      round.push(null);
    }
  };

  checkForEnd = function(rnd, turn) {
    var len = rounds.length;
    if (len > 9) {
      if (((turn === 1) && ((rnd[0] + rnd[1]) !== 10)) ||
        ((turn === 2) && (rounds[len - 2][2] !== 10))) {
        endOfGame = true;
      }
    }
  };

  ScoreSheet.prototype.addRound = function(rnd, turn) {
    round = rnd;
    rounds.push(round);
    checkForBonus();
    calculateScore();
    checkForEnd(rnd, turn);
  };

  ScoreSheet.prototype.adjustForBonuses = function(roll, turn) {
    if (turn === 1) adjustForSpares(roll);
    adjustForStrikes(roll, turn);
  };

  ScoreSheet.prototype.isEndOfGame = function(round, turn) {
    checkForEnd(round, turn);
    return endOfGame;
  };

  ScoreSheet.prototype.score = function() {
    var score = 0;
    for (i = 0; i < rounds.length; i++) {
      score += rounds[i][2];
    }
    return score;
  };
}
