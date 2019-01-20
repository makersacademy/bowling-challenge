class ScoreCard {
  constructor () {
    this.total = 0;
    this.rollCount = 1;
    this.frameCount = 1;
    this.frameComplete = false;
    this.bigFrameArray = [];
    this.smallFrameArray = [];
    this.mode = 'none';
    this.strikeMode = false;;
    this.spareMode = false;
  };

  roll(num) {
    this.smallFrameArray.push(num);
    if (this.rollCount === 1 && num === 10) {
      this.mode = 'strike';
      this.frameComplete = true;
    };
    var z = num + this.smallFrameArray[0];
    if (this.rollCount === 2 && z === 10) {
      this.mode = 'spare';
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
        this.smallFrameArray[0] *= 2;
        this.smallFrameArray[1] *= 2;
        this.mode = 'none';
        this.strikeMode = false;
      };
      if (this.spareMode === true) {
        this.smallFrameArray[0] *= 2;
        this.mode = 'none';
        this.spareMode = false;
      };
      this.reset();
      if (this.mode === 'strike') {
        this.strikeMode = true;
      };
      if (this.mode === 'spare') {
        this.spareMode = true;
      };
      return this.total;
    };
  };

  reset() {
    this.score();
    this.bigFrameArray.push(this.smallFrameArray);
    this.frameCount ++;
    this.smallFrameArray = [];
    this.rollCount = 1;
    this.frameComplete = false
  };

  score() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.total += this.smallFrameArray.reduce(reducer)
  };
};
