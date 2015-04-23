var Bowling = function() {
  this.bowlingFrame = 1;
  this.frames = {};
  for (i = 1; i <= 9; i++) {
    this.frames[i] = new Frame(0);
  };
  this.frames[10] = new Frame(2)
  this.bowls = 0;
};

Bowling.prototype.bowl = function(score) {
  if(this.bowlingFrame > 10) {
    throw new Error('it is the end of the game');
  };
  if(this.bowlingFrame <= 10) {
    this.frames[this.bowlingFrame].bowl(score);
    this.bowls = score;
  };
  if(this.bowlingFrame > 1){
    this.bonus(1);
    this.bonus(2);
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

Bowling.prototype.bonus = function(minus) {
  var lastFrame = this.frames[this.bowlingFrame - minus]
  if(lastFrame === undefined) {
  } else { if(lastFrame.counter < 2) {
      lastFrame.score += this.bowls;
      lastFrame.counter += 1;
    };
  };
};
