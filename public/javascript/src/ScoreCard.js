class ScoreCard {
  constructor() {
    this.frames = [];
  };

  totalScore() {
    let gameScore = 0;

    for (let i = 0; i < this.frames.length; i++) {
      gameScore += this.frames[i].frameScore();
    };

    return gameScore;
  };

  addRoll(pinsFelled) {
    if (this.frames.length === 9 && this.frames[this.frames.length - 1].frameCompleted()) {
      this.frames.push(new TenthFrame());
    } else if (this.frames.length === 0 || this.frames[this.frames.length - 1].frameCompleted()) {
      this.frames.push(new Frame());
    };

    this.frames[this.frames.length - 1].addRoll(pinsFelled);


    if (this.frames.length > 1) {
      this.frames[this.frames.length - 2].addFollowingFrameRoll(pinsFelled);
      if (this.frames.length > 2) {
        this.frames[this.frames.length - 3].addFollowingFrameRoll(pinsFelled);
      };
    };
  };
};
