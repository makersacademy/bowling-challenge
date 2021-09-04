class Game {

  constructor() {
    let frame = new Frame();

    this.frames = [frame];
  } 

  addFrame() {
    this.framesCount ++;
    this.frames.push(new Frame());
  }
}
