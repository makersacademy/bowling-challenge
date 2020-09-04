class Player {
  constructor(name) {
    this.name = name;
    this.frames = [];
  }

  newFrame(frame) {
    this.frames.push(frame);
  }
}
