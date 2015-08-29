Bowling = function() {
  this.scorecard = []
  this.previousFrame = []
  this.currentFrame = []
  this.frame = 1
  this.pinCount = 10
  this.score = 0
  this.holdingScore = 0
  this.frameRoll = 1
  this.gameInPlay = true
  this.bonusRounds = 0
  this.bonusScore = 0
};

Bowling.prototype.roll = function(num) {
  this.currentFrame.push(num)
  if(num === 10 && this.frameRoll === 1) {
    // this.currentFrame.push(0);
  }
  if (this.currentFrame.length === 2 || this.currentFrame[0] === 10) {
    this.reset();
  } else {
    this.frameRoll++
  };
  this.isGameInPlay();
}

Bowling.prototype.reset = function() {
  this.bonusCalc();
  this.bonusSetter();
  this.scorecard.push(this.previousFrame);
  this.previousFrame = this.currentFrame;
  this.currentFrame = [];
  this.frameRoll = 1;
  this.frame++
  var scoreArray = []
  scoreArray = scoreArray.concat.apply(scoreArray, this.scorecard);
  if(scoreArray.length > 0) {
    this.score = (scoreArray.reduce(function(a,b) {
        return a + b;
      })) + this.bonusScore;
  }
};

Bowling.prototype.isGameInPlay = function() {
  if(this.scorecard.length === 10 && (this.scorecard[9][0] + this.scorecard[9][1] !== 10)) {
    return false;
  } else {
    return true;
  };
};

Bowling.prototype.bonusCalc = function() {
  var framesForBonus = this.previousFrame.concat(this.currentFrame);

  for( var i = 0; i < this.bonus; i++ ) {
    this.bonusScore += framesForBonus[i]
  }
};

Bowling.prototype.bonusSetter = function() {
  if(this.previousFrame[0] === 10) {
    this.bonus = 2;
  } else if(this.previousFrame[0] + this.previousFrame[1] === 10) {
    this.bonus = 1;
  } else {
    this.bonus = 0;
  };
  if(this.scorecard.length > 9) {
    this.bonus = 0
  }
};


// Bowling = function() {
//   this.scorecard = []
//   this.currentFrame = []
//   this.frame = 1
//   this.pinCount = 10
//   this.score = 0
//   this.holdingScore = 0
//   this.frameRoll = 1
//   this.gameInPlay = true
//   this.bonusRounds = 0
//   this.bonusScore = 0
// };

// Bowling.prototype.roll = function(num) {
//   this.currentFrame.push(num)
//   if(num === 10 && this.frameRoll === 1) {
//     this.currentFrame.push(0);
//   }
//   if (this.currentFrame.length === 2) {
//     this.reset();
//   } else {
//     this.frameRoll++
//   };
//   this.isGameInPlay();
// }

// Bowling.prototype.reset = function() {
//   this.bonusCalc();
//   this.bonusSetter();
//   this.scorecard.push(this.currentFrame);
//   this.currentFrame = [];
//   this.frameRoll = 1;
//   this.frame++
//   var scoreArray = []
//   scoreArray = scoreArray.concat.apply(scoreArray, this.scorecard);
//   this.score = (scoreArray.reduce(function(a,b) {
//       return a + b;
//     })) + this.bonusScore
// };

// Bowling.prototype.isGameInPlay = function() {
//   if(this.scorecard.length === 10 && (this.scorecard[9][0] + this.scorecard[9][1] !== 10)) {
//     return false;
//   } else {
//     return true;
//   };
// };

// Bowling.prototype.bonusCalc = function() {
//   for( var i = 0; i < this.bonus; i++ ) {
//     this.bonusScore += this.currentFrame[i]
//   }
// };

// Bowling.prototype.bonusSetter = function() {
//   if(this.currentFrame[0] === 10) {
//     this.bonus = 2
//   } else if(this.currentFrame[0] + this.currentFrame[1] === 10) {
//     this.bonus = 1
//   } else {
//     this.bonus = 0
//   };
// };