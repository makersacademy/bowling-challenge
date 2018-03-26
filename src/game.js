function Game() {
  this.currentFrame = 1;
  this.currentBowl = 1;
  this.framePins = 10;
  this.frameScore = [];
  this.totalScore = 0;
  this.strikeBonus = [];
  this.spareBonus = [];
  this.gameScore = [];
  this.exrtaFrame = [];
};

Game.prototype.bowl = function(pins) {
  if (this.currentFrame == 12) {
    this.gameScore.push([pins, 0]);
    this._calcFinalScore();
    alert(`NICE ONE! \n YOUR Final Score is ${this.totalScore}`);
  };
  if (this.currentBowl == 1 && pins == 10 && this.currentFrame != 10) {
    this.currentBowl = 2;
    this.frameScore[0] = 10;
    this.frameScore[1] = 0;
    this.strikeBonus.push(this.currentFrame + 1);
  } else if (this.currentBowl == 1) {
    this.frameScore[0] = pins;
  } else if (this.currentBowl == 2) {
    this.frameScore[1] = pins;
  };
  this._calcFrame();
  // if (this.frameScore.length == 2 && (this.frameScore[0] + this.frameScore[1]) == 10 && this.currentFrame == 11) {
  //   this.currentFrame = "final";
  //   return this.gameScore.push(this.frameScore);
  // } else
  if (this.frameScore.length == 2 && this.currentFrame < 11) {
    this._calcBowlScore(this.frameScore);
    this.frameScore = [];
  };
  this.framePins -= pins;
  this.currentBowl ++;
  if (this.currentBowl == 3) {
    this.currentBowl = 1;
    this.framePins = 10;
  };
};

Game.prototype._calcFrame = function () {
  if (this.currentBowl == 2) {
    this.currentFrame ++;
  };
  if (this.currentFrame >= 11 && this.frameScore[0] == 10) {
    this.currentFrame = 12;
    return this.gameScore.push(this.frameScore);
  } else if (this.currentFrame >= 11 && (this.frameScore[0] + this.frameScore[1]) != 10) {
    this.gameScore.push(this.frameScore);
    this._calcFinalScore();
    alert(`NICE ONE! \n YOUR Final Score is ${this.totalScore}`);
  };
};

Game.prototype._calcBowlScore = function (framescore) {
  if (framescore[0] + framescore[1] == 10 && framescore[0] != 10) {
    this.spareBonus.push(this.currentFrame);
  };
  this.gameScore.push(framescore);
};


Game.prototype._calcFinalScore = function () {
  var self = this;
  // calculate scores from all pins score in game
  this.gameScore.forEach(function(frame) {
    self.totalScore += (frame[0] + frame[1]);
  });
  console.log(this.totalScore);
  // calculate bonus scores from all spares in game
  this.spareBonus.forEach(function(frame) {
    var spares = self.gameScore[frame];
    var nextSpares = self.gameScore[frame+1]
    if ((spares[0] + spares[1]) == 10 && spares[0] != 10) {
      self.totalScore += nextSpares[0];
    };
    self.totalScore += spares[0];
  });
  // calculate bonus scores from all strikes in game
  this.strikeBonus.forEach(function(frame) {
    var strikes = self.gameScore[frame-1];
    var nextStrikes = self.gameScore[frame]
    if (strikes[0] == 10) {
      self.totalScore += nextStrikes[0];
    };
    self.totalScore += (strikes[0] + strikes[1]);
  });
};
