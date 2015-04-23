var Bowling = function() {
  this.bowlingFrame = 1;
  this.frames = {};
  for (i = 1; i <= 10; i++) {
    this.frames[i] = new Frame();
  };
};

Bowling.prototype.bowl = function(score) {
  if(this.bowlingFrame > 10) {
    throw new Error('it is the end of the game');
  };
  if(this.bowlingFrame <= 10) {
    this.frames[this.bowlingFrame].bowl(score);
  };
  if(this.nextFrame()) {
    this.bowlingFrame += 1;
  };
};

Bowling.prototype.nextFrame = function() {
  if(this.frames[this.bowlingFrame].frameTally === 2) {
    return true;
  };
};

Bowling.prototype.allFramesScore = function() {
  var allScore = []
  for (i = 1; i<= 10; i++) {
    allScore.push(this.frames[i].score);
  };
  return allScore;
};

Bowling.prototype.finalScore = function() {
  var newArray = this.allFramesScore().reduce(function(a, b) {
    return a + b;
  });
  return newArray;
};
