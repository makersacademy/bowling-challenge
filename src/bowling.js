function Bowling () {
  this.currentPins = 10;
  this.score = 0;
  this.allFrames = {1: [], 2: [],
                    3: [], 4: [],
                    5: [], 6: [],
                    7: [], 8: [],
                    9: [], 10:[]};
  this.currentFrame = 1;
  this.round = 0;
}

Bowling.prototype.bowl = function () {
  this.setRound();
  this.dropPins();
};

Bowling.prototype.dropPins = function () {
  var hitPins = this.randomHit();
  this.currentPins -= hitPins;
  this.setScore(hitPins);
};

Bowling.prototype.setScore = function (hitPins) {
  this.score = hitPins;
  this.addScoreToFrame(hitPins);
};

Bowling.prototype.setRound = function () {
  if (this.currentFrame === 10){
    this.lastRound();
  } else {
    if (this.round >= 2) {
      this.currentFrame += 1;
      this.reset();
    } else {
      this.round += 1;
    }
  }
};

Bowling.prototype.lastRound = function () {
  if (this.round >= 3) {
    console.log("finito");
  } else {
    this.round += 1;
    if (this.score === 10) {this.reset();}
  }
};

Bowling.prototype.addScoreToFrame = function (score) {
  //TO DO: if the current Frame is 10 and 3 rounds don't add anymore
  this.allFrames[this.currentFrame].push(score);
};

Bowling.prototype.reset = function () {
  this.round = 1;
  this.currentPins = 10;
};

Bowling.prototype.randomHit = function () {
  var value = this.currentPins + 1
  return Math.floor((Math.random() * value) + 0 );
};

// Bowling.prototype.calculateTotalScore = function () {
//   var totalScore = 0;
//   var allFramesLength = Object.keys(this.allFrames).length;
//   for (var i = 0; i < allFramesLength; i++) {
//     totalScore += this.allFrames[i];
//   }
// };

// TO BE DELETED, testing locally.
// var bowling = new Bowling ();
//
//
// for (var i = 1; i < 11; i++){
//   bowling.bowl();
//   bowling.bowl();
//   console.log(bowling.currentFrame);
//   console.log(bowling.allFrames[i]);
// }
// bowling.bowl();
// console.log(bowling.currentFrame);
// console.log(bowling.round);
// console.log(bowling.allFrames[10]);
