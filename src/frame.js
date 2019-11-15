class Frame {
  constructor() {
    this.bowlsLeft = 2;
    this.frameOver = false;
  }

  roll() {
   this.bowlsLeft -= 1;
  }

  isFrameOver() {
    if (bowlsLeft === 0) {
      this.frameOver = false;
    }
  }
}