class Bowling {

  constructor() {
    this.frames = [];
    this.currentFrame = new Frame;
  }

  roll(pinsDowned) {
    if (if this.currentFrame.inTurn === false) {
      this.frames.push(this.currentFrame); this.currentFrame = new Frame;
    }
    this.currentFrame.addTurn(pinsDowned);
  }

}
