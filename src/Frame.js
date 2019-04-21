class Frame {
  constructor (roll1, roll2 = 0, mode = 'none') {
    this.nextMode = 'none'
    this.mode = mode
    //this.frameComplete = false;
    //this.smallFrameArray = [roll1, roll2];
    this.roll1 = roll1
    this.roll2 = roll2
  }

  score() {
    if (this.roll1 + this.roll2 === 10) {
      this.nextMode = 'spare'
    }
    return this.roll1 + this.roll2
  }

}
