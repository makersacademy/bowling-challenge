function Game() {
  this.frames = [];
}

Game.prototype.bowl = function (rolls) {
  this.frames.push(new Frame(rolls));
};

Game.prototype.score = function () {
  return this.frames.reduce(function(total, frame, i, frames){
    return total + frame.total(frames[i + 1]);
  },0);
};

/////////////////////

function Frame(rolls) {
  this.rolls = rolls;
}

Frame.prototype.total = function (next) {
  var score = this.rolls.reduce(function(sum,roll){
    return sum + roll;
  },0);

  if (next === undefined || score !== 10) {
      return score;
  } else if (this.rolls[0] === 10) {
    var strikeBonus = next.rolls[0] + next.rolls[1];
    return score + strikeBonus;
  } else {
      var spareBonus = next.rolls[0];
      return score + spareBonus;
  }
};
