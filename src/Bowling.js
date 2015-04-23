var Bowling = function() {
  this.score = 0;
  this.bowlingFrame = 1
  this.frames = {}
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
  if(this.bowlingFrame > 1) {
    this.bonus();
  };
  if(this.nextFrame()) {
    this.bowlingFrame += 1;
  };
};

Bowling.prototype.nextFrame = function() {
  if(this.frames[this.bowlingFrame].frameTally === 2) {
    this.score += this.frames[this.bowlingFrame].score
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

// this is going to have a lot of trouble once we get into multiple spares
// and multiple strikes etc.
Bowling.prototype.bonus = function() {
  var lastFrame = this.bowlingFrame - 1
  if(this.frames[lastFrame].score === 'spare') {
    bonus = this.frames[this.bowlingFrame].score;
    this.frames[lastFrame].score = 10 + bonus;
  };
  if(this.frames[lastFrame].score === 'strike' && this.frames[this.bowlingFrame].frameTally === 2) {
    bonus = this.frames[this.bowlingFrame].score;
    this.frames[lastFrame].score = 10 + bonus;
  };
};












