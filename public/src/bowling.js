class Bowling {
  constructor() {
    this.frame = []
  }

  bowl1(score) {
    if (score === 10)  {
      return 'strike'
    }
    else {
      this.frame.push(score)
      return score
    };
  };

  bowl2(score) {
      if (Number(this.frame) + Number(score) === 10) {
        return 'spare'
      }
    else {
      this.frame.push(score)
      return this.frame
    };
  };
};
