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
  if(this.bowlingFrame > 1){
    this.bonus();
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

Bowling.prototype.bonus = function() {
  var lastFrame = this.bowlingFrame - 1;
  if(this.frames[lastFrame].counter >= 1) {
    bonus = this.frames[this.bowlingFrame].score;
    this.frames[lastFrame].score += bonus;
    this.frames[lastFrame].counter += 1;
  };
};

// The last thing was a strike. So this method will be called.
// Works for everything where it wasn't a strike called next.
// Bowling.prototype.strike = function() {
//   var lastFrame = this.bowlingFrame - 1;
//   if(this.frames[this.bowlingFrame].frameTally === 2 && this.frames[lastFrame].score !== 'strike') {
//     bonus = this.frames[this.bowlingFrame].score;
//     this.frames[lastFrame].score = 10 + bonus;
//   };
// };



