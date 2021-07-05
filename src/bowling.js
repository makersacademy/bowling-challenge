
BowlingCard = function () {
  this.score = 0;
  this.currentFrame = 1;
  // this.currentFrameScore = [[],[]];
  this.totalFrameScore = new Array(10).fill(null);
  this.gameFrame;
};

BowlingCard.prototype.updateScore = function (score) {
  this.score += score;

  return this.score;
};

BowlingCard.prototype.score = function () {

  return this.score;
};

BowlingCard.prototype.firstBowl = function (score) {

  this.gameFrame = new Frame();

  if (this.totalFrameScore[this.currentFrame - 1] == null)
    {
      this.gameFrame.updateFrameScoreOne(score);
    }

  else
    {
      if (this.totalFrameScore[this.currentFrame - 1].strikeOrSpare == ("Strike!" || "Spare!"))
        {
          this.totalFrameScore[this.currentFrame - 1].framescoreTotal += score;

          this.gameFrame.updateFrameScoreOne(score);
        }

      else
      {
        this.gameFrame.updateFrameScoreOne(score);
      }
  }
  if (score == 10)
  {
    this.gameFrame.updateFrameScoreTwo(0);

    this.totalFrameScore[this.currentFrame - 1] = this.gameFrame

    this.currentFrame++;
  };
};


BowlingCard.prototype.secondBowl = function (score) {

  if (this.totalFrameScore[this.currentFrame - 1] == null)
  {
    this.gameFrame.updateFrameScoreTwo(score);
  }

  else {
    if (this.totalFrameScore[this.currentFrame - 1].strikeOrSpare == ("Strike!"))
    {
      this.totalFrameScore[this.currentFrame - 1].framescoreTotal += score;

      this.gameFrame.updateFrameScoreTwo(score);
    }

    else
    {
      this.gameFrame.updateFrameScoreTwo(score);
    };
  };

  this.totalFrameScore[this.currentFrame - 1] = this.gameFrame

if (this.currentFrame < 10)
  {
    this.currentFrame++;
  };
};

BowlingCard.prototype.bonusBowl = function (score) {

  if (this.currentFrame == (10) && this.totalFrameScore[this.currentFrame - 1].strikeOrSpare == ("Strike!" || "Spare!"))
  {
    this.totalFrameScore[this.currentFrame - 1].bonusFrameScore(score);
  }

  else
  {
    this.totalFrameScore[this.currentFrame - 1].bonusFrameScore(0);
  }
};
