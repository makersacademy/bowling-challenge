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
    if (this.mode === 'extra 1') {;
      this.mode = 'finished'; 
      this.smallFrameArray.push(num);
      this.frameComplete = true;
    } else if (this.mode === 'extra 2') {
      this.mode = 'extra 1';
      this.smallFrameArray.push(num);
    } else if (this.mode === 'finished') {
      throw "Game is Over";
    } else {
      this.smallFrameArray.push(num);
      if (this.rollCount === 1 && num === 10) {
        this.mode = 'strike';
        this.frameComplete = true;
      };
      var z = num + this.smallFrameArray[0];
      if (this.rollCount === 2 && z === 10) {
        this.mode = 'spare';
      };
      if (this.mode === 'strike' && this.frameCount === 10) {
        this.mode = 'extra 2';
      }; 
      if (this.mode === 'spare' && this.frameCount === 10) {
        this.mode = 'extra 1';
      };
      this.rollCount ++;
    };
    this.counter();
  };

  counter() {
    if (this.rollCount === 3 ) {
      this.frameComplete = true;
    };
    if (this.mode === 'extra 1' || this.mode === 'extra 2') {
      this.frameComplete = false;
    };
    if (this.frameComplete === true) {
      if (this.strikeMode === true) {
        this.smallFrameArray[0] *= 2;
        if (this.smallFrameArray.length > 1) {
          this.smallFrameArray[1] *= 2;
        };
        this.strikeMode = false;
      };
      if (this.spareMode === true) {
        this.smallFrameArray[0] *= 2;
        this.spareMode = false;
      };
      this.reset();
      if (this.mode === 'strike') {
        this.strikeMode = true;
      };
      if (this.mode === 'spare') {
        this.spareMode = true;
      };
      this.total;
      if (this.mode !== 'finished') {
        this.mode = 'none'
      };
    };
  };

  reset() {
    this.score();
    this.bigFrameArray.push(this.smallFrameArray);
    this.frameCount ++;
    this.smallFrameArray = [];
    this.rollCount = 1;
    this.frameComplete = false
    if (this.frameCount === 11) {
      this.mode = 'finished';
    };
  };

  score() {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    this.total += this.smallFrameArray.reduce(reducer)
  };
};
