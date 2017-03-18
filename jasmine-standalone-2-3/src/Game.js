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
  var score = this.rolls.reduce(function(a,b){
    return a + b
  },0);
  if (next === undefined || score !== 10) {
      return score;
  } else {
      var bonus = next.rolls[0];
      return score + bonus
  }
};
