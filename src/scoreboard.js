function Scoreboard() {
  this.scores = [];
  this.frames = [];
};

Scoreboard.prototype.firstRoll = function(number) {
  if (number <= 10) {
    this.scores[0] = number;
    return console.log(this.scores);
  } else {
    throw "You can't knock down more than 10 pins!";
  }
};

Scoreboard.prototype.secondRoll = function(number) {
  if (this.scores[0] <= 5 && number <= (10-this.scores[0])) {
     this.scores[1] = number;
     return console.log(this.scores);
  }
  else if (this.scores[0] > 5 && number <= (10-this.scores[0])) {
    this.scores[1] = number;
    return console.log(this.scores);
  }
  else {
    throw "You can't knock down more than 10 pins!";
  }
};

Scoreboard.prototype.rollScore = function() {
  if (this.scores.length == 2) {
    return this.scores.reduce((a,b) => a + b);
  }
};

Scoreboard.prototype.emptyScores = function() {
  this.scores = [];
  return console.log(this.scores);
};

Scoreboard.prototype.newFrame = function() {
  var frame = this.rollScore();
  this.frames.push(frame);
  return console.log(this.frames);
};
