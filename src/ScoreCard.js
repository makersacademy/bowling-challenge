class ScoreCard {
  constructor () {
    this.score = 0;
    this.rollCount = 1;
    this.frameCount = 1;
    this.frameComplete = false;
  };

  roll(num) {
    this.count ++;
    this.score += num;

  };

  isComplete() {
    if (this.frame < 10) {
      return false;
    } else {
      return true;
    };
  };
};
