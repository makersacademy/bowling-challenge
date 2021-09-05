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
    this.checkFrameOver();
    this.addFrame();
  }

  addFrame() {
    let last = this.frames.length - 1; 
    if (this.frames[last].isStrike() === true || this.frames[last].currentRoll === 2) {
      if (this.frames.length != 10) {
        this.frames.push(new Frame());
      }
    }
  }

  checkFrameOver() {
    for (let i = 0; i < this.frames.length; i++) {
      if (this.frames[i].isFrameOver() === true && this.frames[i].closed === false) {
        this.frameScores.push(this.frames[i].frameScore);
        this.score += this.frames[i].frameScore;
        this.frames[i].closed = true;
      }
    }
  }
}
