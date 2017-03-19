function Game() {
  this.frames = [];
}

Game.prototype.bowl = function (rolls) {
  this.frames.push(new Frame(rolls));
};

Game.prototype.score = function () {
  return this.frames.reduce(function(total, frame, i, frames){
    return total + frame.total(frames[i + 1],frames[i + 2]);
  },0);
};

/////////////////////

function Frame(rolls) {
  this.rolls = rolls;
  this.noOfPins = 10;
}

Frame.prototype.total = function (next_first, next_second) {
  var score = this.rolls.reduce(function(sum,roll){
    return sum + roll;
  },0);

  if (this.isStrike()) {
    if (next_first.isStrike()) {
      var doubleBonus = next_first.rolls[0] + next_second.rolls[0];
      return score + doubleBonus;
    }
    var strikeBonus = next_first.rolls[0] + next_first.rolls[1];
    return score + strikeBonus;
  } else if (this.isSpare()) {
    var spareBonus = next_first.rolls[0];
    return score + spareBonus;
  } else {
    return score;
  }
};

Frame.prototype.isSpare = function() {
  return this.rolls[0] + this.rolls[1] === this.noOfPins
};

Frame.prototype.isStrike = function() {
  return this.rolls[0] === this.noOfPins
};
