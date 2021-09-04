class Game {

  constructor() {
    let frame = new Frame();

    this.frames = [frame];
  } 

  addFrame() {
    if (this.frames.length < 10) {
      this.frames.push(new Frame());
    }
  }
}
