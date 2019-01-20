class ScoreCard {
  constructor () {
    this.score = 0;
    this.rollCount = 1;
    this.frameCount = 1;
    this.frameComplete = false;
    this.bigFrameArray = []
    this.smallFrameArray = []
  };

  roll(num) {
    this.rollCount ++;
    this.score += num;
    this.smallFrameArray.push(num);
    this.counter();
  };

  isComplete() {
    if (this.frameCount < 11) {
      return false;
    } else {
      return true;
    };
  };

  counter() {
    if (this.rollCount ===2 ) {
      this.frameComplete = true;
    };
    if (this.frameComplete === true) {
      this.bigFrameArray.push(this.smallFrameArray);
      this.frameCount ++;
      this.smallFrameArray = [];
      this.rollCount = 1;
    };
  };
};
