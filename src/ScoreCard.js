class ScoreCard {
  constructor () {
    this.score = 0;
    this.count = 0;
  };

  roll(num) {
    this.count ++
  };

  isComplete() {
    if (this.count < 20) {
      return false;
    } else {
      return true;
    };
  };
};
