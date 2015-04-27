var Frame = function(last) {
  this.score = 0;
  this.pinsLeft = 10;
  this.frameTally = 0;
  this.counter = 3;
  this.last = last;
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
  this.counter = 0;
  if(this.last > 0) {
    this.frameTally = 0;
    this.last--;
  }
};

Frame.prototype.spare = function() {
  this.score = 10;
  this.frameTally++;
  this.counter = 1;
  if(this.last === 2) {
    this.frameTally--;
    this.last = 0;
  }
};
