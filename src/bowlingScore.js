function BowlingScore() {
  this.rawScores = [];
  this.frameScores = [];
  this.bonusScores = [];
  this.roundScores = [];
  this.gameScore = [];
};

BowlingScore.prototype.addNewRollScore = function(score) {
  score === 10 ? this.rawScores.push(score, null) : this.rawScores.push(score);
};

BowlingScore.prototype.makeFrameScores = function() {
  this.frameScores = [[this.rawScores[0]]];

  for (var i = 1; i < this.rawScores.length; i += 1) {
    if (this.frameScores[this.frameScores.length - 1].length < 2) {
      this.frameScores[this.frameScores.length - 1].push(this.rawScores[i]);
    } else {
      var currentFrame = [];
      currentFrame.push(this.rawScores[i]);
      this.frameScores.push(currentFrame);
    };
  };
};

BowlingScore.prototype.addNewBonusScore = function() {
  for (var i = 0; i < this.rawScores.length; i += 2) {
    if (this.rawScores[i] === 10) {
      // console.log('strike');
      this.bonusScores.push(this.rawScores[i + 2] + (this.rawScores[i + 3]));
    } else if (this.rawScores[i] + this.rawScores[i + 1] === 10) {
      // console.log('spare');
      this.bonusScores.push(this.rawScores[i + 2]);
    } else {
      // console.log('no bonus');
      this.bonusScores.push(0);
    };
  };
};

BowlingScore.prototype.makeRoundScores = function() {
  var roundScores = [];
  for (var i = 0; i < this.frameScores.length; i++) {
    var frameBonus = [];
    frameBonus.push(this.bonusScores[i] + this.frameScores[i][0] + this.frameScores[i][1]);
    this.roundScores.push(frameBonus);
  };
};

BowlingScore.prototype.makeGameScore = function() {
  var score = this.roundScores.reduce(function(a, b) {
    return a.concat(b);
  });

  score = score.reduce(function(a, b) {
    return a + b;
  });

  this.gameScore.push(score);
};
