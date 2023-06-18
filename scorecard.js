class ScoreCard {
  constructor() {}

  formatScoreForDisplay(frame, frameNumber, ball) {
    if (frame.getStrike()) {
      if (ball === 1 || (ball > 1 && frameNumber === 10)) {
        return "X";
      } else if (ball > 1 && frameNumber === 10) {
        return frame.getBallScore(ball);
      }
    } else if (frame.getSpare() && ball > 1) {
      return "/";
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

    if (previousFrame === 0) {
      return;
    }

    if (
      frames[currentFrame].checkCompleteFrame() &&
      frames[previousFrame].getStrike() &&
      frames[previousFrame].bonusScore === 0
    ) {
      frames[previousFrame].setBonusScore(frames[currentFrame].frameScore());
    }

    if (frameBeforeLast === 0) {
      return;
    }

    if (
      frames[currentFrame].getStrike() == true &&
      frames[previousFrame].getStrike() == true &&
      frames[frameBeforeLast].getStrike() == true &&
      frames[frameBeforeLast].getBonusScore() == 0
    ) {
      frames[frameBeforeLast].setBonusScore(20);
    }

    if (
      frames[currentFrame].getBallScore(1) > 0 &&
      frames[previousFrame].getStrike() == true &&
      frames[frameBeforeLast].getStrike() == true &&
      frames[frameBeforeLast].getBonusScore() === 0
    ) {
      frames[frameBeforeLast].setBonusScore(
        10 + frames[currentFrame].frameScore()
      );
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
