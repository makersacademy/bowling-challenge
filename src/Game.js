class Game {

  constructor() {
    let frame = new Frame();

    this.frames = [frame];
    this.score = 0;
    this.frameScores = [];
  } 

  roll(pins) {
    for (let i = 0; i < this.frames.length; i++) {
      this.frames[i].addRoll(pins);
    }
    checkFrameOver();
  }

  addFrame() {
    if (this.frames.length < 10) {
      this.frames.push(new Frame());
    }
  }

  checkFrameOver() {
    for (let i = 0; i < this.frames.length; i++) {
      if (this.frames[i].isFrameOver()) {
        this.frameScores.push(this.frames[i].frameScore);
        this.score += this.frames[i].frameScore;
      }
    }
  }
}
