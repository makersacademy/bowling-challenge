var Scorecard = function() {
  this.frame = 1;
  this.score = [];
  this.frameScore = [];
  this.bonusPoints = 0;
  this.totalScore = 0;
}

Scorecard.prototype.name = function (name) {
  this.name = name;
};

Scorecard.prototype.addScore = function (score1, score2) {
  if (this.frame === 11) { throw 'Game ended.' }
  this.addFrame(score1, score2);
  if (this.frame > 1) {this.strikeOrSpare(score1, score2)}
  this.frame += 1;
  this.lastFrame = ([score1, score2]);
};

Scorecard.prototype.strikeOrSpare = function (score1, score2) {
  if (this.lastFrame[0] === 10) { this.addStrike(score1, score2)}
  if ((this.lastFrame[0] + this.lastFrame[1]) === 10) { this.addSpare(score1)}
};

Scorecard.prototype.addStrike = function(score1, score2) {
  this.bonusPoints += (score1 + score2);
}

Scorecard.prototype.addSpare = function(score1) {
  this.bonusPoints += (score1)};

  Scorecard.prototype.addFrame = function (score1, score2) {
    if ((score1 + score2) > 10) { throw 'Cannot exceed 10.'}
    else {  this.totalScore += (score1 + score2)}
    this.score.push([score1, score2]);
    this.frameScore.push(score1 + score2);
  };

  Scorecard.prototype.total = function () {
    return this.totalScore;
  };

  Scorecard.prototype.result = function () {
    if (this.frame === 11) {
      if (this.totalScore === 0 ) {
        this.result = "Gutter game!";
      } else if ( this.totalScore === 300 ) {
        this.result = "Perfect game!";
      } else { this.result = "You got " + this.totalScore + " points!"}
    }
  };


var scorecard = new Scorecard();
