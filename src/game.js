function Game() {
  this.rolls = [];
  this.score = 0;
  this.frame = 1;
}
var secondRoll = false;

Game.prototype.roll = function(roll) {
  if (roll === 10){
    this.rolls.push("X");
    this.frame++;
  } else if ((roll + this.rolls[this.rolls.length -1] === 10) && (secondRoll == true)) {
    this.rolls.push("/");
    this.frame++;
    secondRoll = false;
  } else {
    this.rolls.push(roll);
    secondRoll = false ? secondRoll = true :this.frame++;
  }
  this.calculateScore();
};

Game.prototype.calculateScore = function() {
  var score = 0;
  for (index = 0; index < this.rolls.length; index++) {
    if (this.rolls[index] === "X") {
      score = 10 + this.rolls[index + 1] + this.rolls[index + 2];
    } else if (this.rolls[index] === "/") {
      score = 10 + this.rolls[index + 1];
    } else {
      score += this.rolls[index];
    }
  };
  this.score = score;
};
