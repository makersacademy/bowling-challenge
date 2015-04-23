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
  if(this.bowlingFrame > 1) {
    this.bonus(1);
  };
  if(this.nextFrame()) {
    this.bowlingFrame += 1;
  };
};

// I am now using two scoring systems, move to all using the finalScore one.
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
  // if (typeof minus === 'undefined') { minus = 1; }
  var lastFrame = this.bowlingFrame - minus;
  // if (this.frames[lastFrame - 1] === undefined) {
  // } else { 
  //   // if (this.frames[lastFrame - 1].score === 'strike') {
  //   //   this.bonus(minus + 1);
  //   // };
  // };
  if(this.frames[lastFrame].score === 'spare') {
    bonus = this.frames[this.bowlingFrame].score;
    this.frames[lastFrame].score = 10 + bonus;
  };
  if(this.frames[lastFrame].score === 'strike' && this.frames[this.bowlingFrame].frameTally === 2) {
    // the '10strike' error must be here, the second strike is adding on it's
    // score (which is strike at that moment in time) and not recursing far enough (?).
    // MORE RECURSION.
    if(this.frames[this.bowlingFrame].score === 'strike') {
      bonus = 10;
      this.frames[lastFrame].score = 10 + bonus;
    } else {
      bonus = this.frames[this.bowlingFrame].score;
      this.frames[lastFrame].score = 10 + bonus;
    };
  };
};

// Attempt at recursion, where you don't recurse if lastFrame is the beginning
// of the game
// Bowling.prototype.bonus = function(minus) {
//   // if (typeof minus === 'undefined') { minus = 1; }
//   var lastFrame = this.bowlingFrame - minus;
//   if (this.frames[lastFrame - 1] === undefined) {
//   } else { 
//       if(this.frames[lastFrame - 1].score === 'strike') {
//         bonus(minus + 1);
//       } else {
//         if(this.frames[lastFrame].score === 'spare') {
//           bonus = this.frames[this.bowlingFrame].score;
//           this.frames[lastFrame].score = 10 + bonus;
//         };
//         if(this.frames[lastFrame].score === 'strike' && this.frames[this.bowlingFrame].frameTally === 2) {
//           // the '10strike' error must be here, the second strike is adding on it's
//           // score (which is strike at that moment in time) and not recursing far enough (?).
//           // MORE RECURSION.
//           bonus = this.frames[this.bowlingFrame].score;
//           this.frames[lastFrame].score = 10 + bonus;
//         };
//     };
//   };
// };











