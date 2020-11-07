class Game {

  constructor() {
    this.frames = []
  }

  roll(pinsKnockedDown) {
    this.addFrame(pinsKnockedDown);
  }


  addFrame(pinsKnockedDown) {
    var frame = new Frame();
    frame.roll(pinsKnockedDown)
    this.frames.push(frame);
  }

};
