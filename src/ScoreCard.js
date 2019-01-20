class ScoreCard {
  constructor () {
    this.total = 0;
    this.rollCount = 1;
    this.frameCount = 1;
    this.frameComplete = false;
    this.bigFrameArray = [];
    this.smallFrameArray = [];
    this.strike = false;
    this.strikemode = false;
  };

  roll(num) {
    this.smallFrameArray.push(num);
    if (this.rollCount === 1 && num === 10) {
      this.strike = true;
      this.frameComplete = true;
    };
    this.rollCount ++;
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
    if (this.rollCount === 3 ) {
      this.frameComplete = true;
    };
    if (this.frameComplete === true) {
      if (this.strikeMode === true) {
        for (i=0; i<2; i++) {
          this.smallFrameArray[i] *= 2;
        };
        this.strike = false;
        this.strikemode = false;
      };
      this.score();
      this.bigFrameArray.push(this.smallFrameArray);
      this.frameCount ++;
      this.smallFrameArray = [];
      this.rollCount = 1;
      this.frameComplete = false
      if (this.strike === true) {
        this.strikeMode = true;
      };
      return this.total;
    };
  };

  score() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.total += this.smallFrameArray.reduce(reducer)
  };
};
