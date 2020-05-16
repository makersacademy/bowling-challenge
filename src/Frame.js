class Frame {
  constructor(index) {
    this.index  = index
    this.first  = 0;
    this.second = 0;
  }

  hasStrike() {
    if (this.first == 10) return true;
    return false;
  }

};
