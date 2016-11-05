function Game(){
  // var roll1score;
  // var roll2score;
  this.allFrames = [];
  this.allScores = [];
  this.currentScore = 0
};

Game.prototype.roll1 = function() {
  var roll1score = Math.floor((Math.random() * 11));
  return roll1score;
};

Game.prototype.roll2 = function(roll1score) {
  var roll2score = Math.floor((Math.random() * (11 - roll1score)));
  return roll2score;
};

// Game.prototype.addScores = function() {
//   var roll1add = game.roll1();
//   var roll2add = game.roll2(roll1add);
//   return roll1add + roll2add;
// };

Game.prototype.addFrames = function() {
  for (var i = 0; i < 10; i++) {
    var roll1add = game.roll1();
    var roll2add = game.roll2(roll1add);
    this.allFrames.push([roll1add, roll2add]);
  };
  if (game.isStrike(this.allFrames[9][0],this.allFrames[9][1])) {
    var roll1score = game.roll1();
    if (roll1score === 10) {
      var roll2score = game.roll1();
      this.allFrames.push([roll1score, 0]);
      this.allFrames.push([roll2score, 0]);
    } else {
      var roll2score = game.roll2(roll1score);
      this.allFrames.push([roll1score, roll2score]);
    };
  }
  if (game.isSpare(this.allFrames[9][0],this.allFrames[9][1])) {
    var roll1score = game.roll1();
    this.allFrames.push([roll1score, 0]);
  };
};

  Game.prototype.isStrike = function (roll1score, roll2score) {
    return (roll1score === 10);
  };

  Game.prototype.isSpare = function (roll1score, roll2score) {
    return (roll1score + roll2score === 10 && roll1score !== 10);
  };

  Game.prototype.finalScore = function() {
    for (var i = 0; i < 10; i++) {
      if (game.isStrike(this.allFrames[i][0],this.allFrames[i][1])) {
        if (game.isStrike(this.allFrames[i+1][0],this.allFrames[i+1][1])) {
          var strikeScore = (this.allFrames[i][0] + this.allFrames[i][1]) + this.allFrames[i+1][0] + this.allFrames[i+2][0];
          this.allScores.push(strikeScore);
        }
      else {
      var strikeScore = (this.allFrames[i][0] + this.allFrames[i][1]) + this.allFrames[i+1][0] + this.allFrames[i+1][1];
      this.allScores.push(strikeScore);
      }
      }
      else {
    if (game.isSpare(this.allFrames[i][0],this.allFrames[i][1])) {
      var spareScore = this.allFrames[i][0] + this.allFrames[i][1] + this.allFrames[i+1][0];
      this.allScores.push(spareScore); }
        else { var normScore = this.allFrames[i][0] + this.allFrames[i][1];
          this.allScores.push(normScore);
          }
        }
      }
  };
