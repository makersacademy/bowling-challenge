function Game() {
  this.rolls = [];
  this.score = 0;
  this.frame = 1;
  this.frameRollCount = 1;
}

Game.prototype.roll = function(roll) {
  if (this.frame >= 10) {
    this.finalFrame(roll);
    } else {
    if (roll === 10){
      this.rolls.push("X");
      this.frame++;
    } else if ((roll + this.rolls[this.rolls.length -1] === 10) && (this.frameRollCount == 2)) {
      this.rolls.push("/");
      this.frame++;
      this.frameRollCount = 1;
    } else {
      this.rolls.push(roll);
      this.frameRollCount === 1 ? this.frameRollCount = 2 : (this.frame++, this.frameRollCount = 1);
    };
    this.calculateScore();
  };
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

Game.prototype.finalFrame = function(roll) {
  if (this.frameRollCount === 4) {
    this.endGame();
  }
  if (roll === 10){
    this.rolls.push("X");
    this.frameRollCount++;
  } else if ((roll + this.rolls[this.rolls.length -1] === 10) && (this.frameRollCount == 2)) {
    this.rolls.push("/");
    this.frameRollCount++;
  } else {
    this.rolls.push(roll);
    this.frameRollCount === 1 ? this.frameRollCount++ : this.endGame();
  };
  this.calculateScore();
};

Game.prototype.endGame = function() {
  throw new Error("The game has ended");
};
