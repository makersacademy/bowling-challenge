function Frame(isTenth, wasSpare, wasStrike) {
  this.isTenth = isTenth;
  this.MAXSCORE = 10; // Excluding Bonus points
  this.bowled = 0;
  this.score = [];
  this.remainingPins = this.MAXSCORE;
}

Frame.prototype.run = function() {
  while(!this.isComplete()){
    this.score.push(this.roll());
  }
}

Frame.prototype.roll = function() {
  this.bowled += 1;
  var pinsDown = Math.floor(Math.random() * this.remainingPins) + 0;
  this.remainingPins -= pinsDown;
  return pinsDown;
}

Frame.prototype.calculateScore = function() {
  return this.score.reduce(add, 0);
}

Frame.prototype.getScores = function() {
  return this.score;
}

Frame.prototype.getFirstScore = function() {
  return this.score[0];
}

Frame.prototype.isComplete = function() {
  if(this.bowled === 2 || this.isStrike() || this.calculateScore() === 10) {
    return true;
  }
}

Frame.prototype.isStrike = function() {
  if(this.bowled === 1 && this.score[0] === this.MAXSCORE) {
    return true;
  } else if(this.isTenth && this.score === this.MAXSCORE) {
    return true;
  } else {
    return false;
  }
}

Frame.prototype.isSpare = function() {
  if(this.bowled === 2) {
    return this.score[0] + this.score[1] === this.MAXSCORE;
  } else {
    return false;
  }
}

function add(a, b) {
  return a + b;
}
