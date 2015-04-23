var Frame = function() {
  this.score = 0;
  this.pinsLeft = 10;
  this.frameTally = 0;
  this.counter = 0;
};

Frame.prototype.bowl = function(score) {
  this.pinsLeft -= score;
  if(this.pinsLeft === 0 && this.frameTally === 0) {
    this.strike();
  } else if (this.pinsLeft === 0) {
    this.spare();
  } else {
    this.normalScore(score);
  }
};

Frame.prototype.normalScore = function(score) {
  this.score += score;
  this.frameTally++;
};

Frame.prototype.strike = function() {
  this.score = 10;
  this.frameTally = 2;
};

Frame.prototype.spare = function() {
  this.score = 10;
  this.frameTally++;
  this.counter = 1;
};
