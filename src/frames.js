function Frame(){
  this.turns = [];
  this.score = 0;
}

Frame.prototype.turns = function() {
  return this.turns;
};

Frame.prototype.firstTurn = function() {
  return this.turns[0];
};

Frame.prototype.addScore = function(score) {
  this.turns.push(score);
  this.calculateScore();
};

Frame.prototype.calculateScore = function() {
  if(this.firstTurn() === 10) {
    this.score = 10;
  } else {
    this.score = (this.turns[0] + this.turns[1]);
  }
};

Frame.prototype.isStrike = function() {
  if(this.turns[0] === 10) {
    return true;
  } else {
    return false;
  }
};

Frame.prototype.isSpare = function() {
  if(this.isStrike() === false) {
    if(this.score === 10) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
};
