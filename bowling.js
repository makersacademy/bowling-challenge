class Bowling {
  constructor() {
    this.frames = [];
    this.currentframe = [];
    this.score = 0;
    this.spare = false;
    this.sparebonus = false;
    this.strike = false;
    this.strikebonus = false;
    this.strikes = false;
  }

  resetCurrentFrame() {
    // empties current frame array
    this.currentframe = [];
  }

  add(frame) {
    // adds a frame to the array of frames to build the game
    this.frames.push(frame);
    this.currentframe.push(frame);
  }

  checkSpare() {
    // check if current frame is a spare
    let result = this.currentframe.map((frame) => frame.spare).toString();
    if (result === "true") {
      this.spare = true;
    } else if (result === "false") {
      this.spare = false;
    }
  }

  checkStrike() {
    // check if current frame is a strike
    let result = this.currentframe.map((frame) => frame.strike).toString();
    if (result === "true") {
      this.strike = true;
    } else if (result === "false") {
      this.strike = false;
    }
  }

  sum() {
    console.log(this.strikebonus);
    if (this.strikes === true && this.strike === true) {
      console.log("1");
      for (let i = 0; i < 3; i++) {
        this.strikeOrSpare();
      }
    } else if (this.strikes === true && this.strike === false) {
      this.strikes = false;
      for (let i = 0; i < 2; i++) {
        this.frameScore();
        console.log("2");
      }
      this.spareScore();
    } else if (this.spare === true && this.sparebonus === true) {
      // if this frame is a spare and last frame was a spare
      this.sparebonus = true;
      this.spareScore();
      this.strikeOrSpare();
    } else if (this.strike === true && this.strikebonus === true) {
      //if this frame was a strike and current frame is a strike
      this.strikes = true;
      for (let i = 0; i < 2; i++) {
        this.strikeOrSpare();
      }
    } else if (this.sparebonus === true) {
      console.log("YES");
      // if last frame was a spare
      this.spareScore();
      console.log(this.score);
      this.frameScore();
      this.sparebonus = false;
    } else if (this.strikebonus === true) {
      // if last frame was a strike
      for (let i = 0; i < 2; i++) {
        this.frameScore();
      }
      this.strikebonus = false;
      if (this.strikes === true) {
        this.spareScore();
      }
    } else if (this.spare === true) {
      // if this frame is a spare
      this.sparebonus = true;
      this.strikeOrSpare();
      this.spare = true;
    } else if (this.strike === true) {
      console.log("9");
      // if this frame is a strike
      this.strikebonus = true;
      this.strikeOrSpare();
      this.strike = true;
    } else {
      // no spares or strikes this round or last
      this.frameScore();
    }
  }

  spareScore() {
    // roll1 bonus for spare
    this.currentframe.map((frame) => (this.score += frame.roll1));
  }

  frameScore() {
    // strike bonus/ total score of frame
    this.currentframe.map((frame) => (this.score += frame.roll1));
    this.currentframe.map((frame) => (this.score += frame.roll2));
  }

  strikeOrSpare() {
    this.score += 10;
  }

  totalScore() {
    return this.score;
  }
}

module.exports = Bowling;
