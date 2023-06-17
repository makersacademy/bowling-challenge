class ScoreCard {
  constructor() {}

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
