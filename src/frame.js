class Frame {
  constructor() {
    this.bowlsLeft = 2;
    this.frameOver = false;
  }

  roll() {
   this.bowlsLeft -= 1;
  }
}