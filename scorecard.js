class ScoreCard {
  constructor() {}

  formatScoreForDisplay(frame, frameNumber, ball) {
    if (frame.getBallScore(ball) === 10) {
      return "X";
    } else if (
      frameNumber === 10 &&
      ball === 2 &&
      frame.getSpare() &&
      frame.getBallScore(1) + frame.getBallScore(2) === 10
    ) {
      return "/";
    } else if (
      frameNumber === 10 &&
      ball === 3 &&
      frame.getSpare() &&
      frame.getBallScore(2) + frame.getBallScore(3) === 10
    ) {
      return "/";
    } else if (ball === 2 && frame.getSpare()) {
      return "/";
    } else if (frame.getBallScore(ball) === 0 && ball <= frame.lastBallPlayed) {
      return "-";
    } else {
      return frame.getBallScore(ball);
    }
  }

  getGameScores(frames) {
    const scores = {};

    for (let i = 1; i <= 10; i++) {
      scores[i] = {
        ball1: this.formatScoreForDisplay(frames[i], i, 1),
        ball2: this.formatScoreForDisplay(frames[i], i, 2),
        ball3: this.formatScoreForDisplay(frames[i], i, 3),
        total: frames[i].totalFrameScore(),
      };
    }

    return scores;
  }

  updatePendingBonuses(frames, currentFrame) {
    this.updatePendingStrikes(frames, currentFrame);
    this.updatePendingSpares(frames, currentFrame);
  }

  updatePendingStrikes(frames, currentFrame) {
    const previousFrame = currentFrame - 1;
    const frameBeforeLast = currentFrame - 2;

    if (
      currentFrame === 10 &&
      frames[currentFrame].getBallScore(1) === 10 &&
      frames[currentFrame].getBallScore(2) === 10 &&
      frames[previousFrame].getStrike() &&
      frames[previousFrame].bonusScore === 0
    ) {
      frames[previousFrame].setBonusScore(frames[currentFrame].frameScore());
    } else if (
      previousFrame > 0 &&
      frames[currentFrame].checkTwoBallsPlayed() &&
      frames[previousFrame].getStrike() &&
      frames[previousFrame].bonusScore === 0
    ) {
      frames[previousFrame].setBonusScore(frames[currentFrame].frameScore());
    } else if (
      frameBeforeLast > 0 &&
      (frames[currentFrame].getStrike() ||
        frames[currentFrame].getBallScore(1) > 0) &&
      frames[previousFrame].getStrike() &&
      frames[frameBeforeLast].getStrike() &&
      frames[frameBeforeLast].bonusScore === 0
    ) {
      let bonusScore =
        frames[currentFrame].frameScore() + frames[previousFrame].frameScore();
      frames[frameBeforeLast].setBonusScore(bonusScore);
    }
  }

  updatePendingSpares(frames, currentFrame) {
    const previousFrame = currentFrame - 1;
    if (previousFrame === 0) return;

    if (frames[previousFrame].getSpare()) {
      frames[previousFrame].setBonusScore(frames[currentFrame].getBallScore(1));
    }
  }
}

module.exports = ScoreCard;
