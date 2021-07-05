class Frame {
  constructor() {
    this.bowlsLeft = 2;
  }

  bowl() {
   if (this.isFrameOver) {
     return;
   }
   return this.bowlsLeft -= 1;
  }

  get isFrameOver() {
    return this.bowlsLeft === 0;
  }
}