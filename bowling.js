class Bowling {
  constructor() {
    this.frames = [];
    this.currentframe = [];
    this.score = 0;
    this.spare = "off";
    this.sparebonus = "off";
    this.strike = "off";
    this.strikebonus = "off";
    this.strikes = "off";
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
      this.spare = "on";
    } else if (result === "false") {
      this.spare = "off";
    }
  }

  checkStrike() {
    // check if current frame is a strike
    let result = this.currentframe.map((frame) => frame.strike).toString();
    console.log(result);
    if (result === "true") {
      this.strike = "on";
    } else if (result === "false") {
      this.strike = "off";
      console.log(this.strike);
    }
  }

  sum() {
    console.log(`this strikes ${this.strikes}`);
    console.log(this.strike);
    if (this.strikes === "on" && this.strike === "on") {
      console.log("THIS STRIKES");
      this.strikeOrSpare();
      this.strikeOrSpare();
      this.strikeOrSpare();
      console.log(this.score);
    } else if (this.strikes === "on" && this.strike === "off") {
      ("not this strikes");
      this.strikes = "off";
      this.frameScore();
      console.log(this.score);
      this.spareScore();
      console.log(this.score);
      this.frameScore();
      console.log(this.score);
    } else if (this.spare === "on" && this.sparebonus === "on") {
      // if this frame is a spare and last frame was a spare
      console.log("SPARE BONUS & CURRENT SPARE");
      this.sparebonus = "on";
      this.spareScore();
      this.strikeOrSpare();
      console.log(this.score);
    } else if (this.strike === "on" && this.strikebonus === "on") {
      //if this frame was a strike and current frame is a strike
      this.strikes = "on";
      console.log("STRIKE BONUS & CURRENT STRIKE");
      this.strikeOrSpare(); // 10 bonus for last frame
      this.strikeOrSpare(); // 10 norm for this frame
      console.log(this.score);
    } else if (this.sparebonus === "on") {
      // if last frame was a spare
      console.log("SPARE BONUS SCORE");
      this.spareScore();
      this.frameScore();
      console.log(this.score);
      this.sparebonus = "off";
    } else if (this.strikebonus === "on") {
      // if last frame was a strike
      console.log("STRIKE BONUS SCORE");
      console.log(this.score);
      this.frameScore();
      this.frameScore();
      console.log(this.score);
      this.strikebonus = "off";
      if (this.strikes === "on") {
        this.spareScore();
      }
    } else if (this.spare === "on") {
      // if this frame is a spare
      console.log("CURRENT SPARE");
      this.sparebonus = "on";
      this.strikeOrSpare();
      console.log(this.score);
      this.spare = "off";
    } else if (this.strike === "on") {
      // if this frame is a strike
      console.log("CURRENT STRIKE");
      this.strikebonus = "on";
      this.strikeOrSpare();
      console.log(this.score);
    } else {
      // no spares or strikes this round or last
      console.log("NORMAL");
      this.frameScore();
      console.log(this.score);
    }
  }

  spareScore() {
    this.currentframe.map((frame) => (this.score += frame.roll1));
  }

  frameScore() {
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
