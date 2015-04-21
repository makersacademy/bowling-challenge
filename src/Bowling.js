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
  if(this.nextFrame()) {
    this.bowlingFrame += 1;
  };
  if(this.bowlingFrame <= 10) {
    this.frames[this.bowlingFrame].bowl(score);
  };
};

// this needs to be called in a different way, not just be tied to
// bowling as it doesn't do the final score properly otherwise.
// (Though with spares etc, this might be different.)
Bowling.prototype.nextFrame = function() {
  if(this.frames[this.bowlingFrame].frameTally === 2) {
    this.score += this.frames[this.bowlingFrame].score
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