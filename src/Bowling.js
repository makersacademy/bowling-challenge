var Bowling = function() {
  this.score = 0;
  this.bowlingFrame = 1
  this.frames = {}
  for (i = 1; i <= 10; i++) {
    this.frames[i] = new Frame();
  };
};

Bowling.prototype.scoreUp = function(score) {
  this.score += score;
};

Bowling.prototype.bowl = function(hit) {
  if(this.bowlingFrame === 10) {
    throw new Error('it is the end of the game');
  };
  if(this.nextFrame()) {
    this.bowlingFrame += 1;
  };
  this.frames[this.bowlingFrame].bowl(hit);
};

Bowling.prototype.nextFrame = function() {
  if(this.frames[this.bowlingFrame].frameTally === 2) {
    return true;
  };
};

Bowling.prototype.allFramesScore = function() {
  var thing = []
  for (i = 1; i<= 10; i++) {
    thing.push(this.frames[i].score);
  };
  return thing;
};