class BowlingGame {
  constructor(frames = []){
    this.frames = frames;
  }

  addFrame = (frame) => {
    this.frames.push(frame);
  }

  spareBonus = (frame) => {
    return this.nextFrame(frame).rolls[0];
  }

  strikeBonus = (frame) => {
    if (this.nextFrame(frame).isStrike()) {
      return (frame.rolls[0] + this.nextFrame(this.nextFrame(frame)).rolls[0]);
    }
    else {
      return this.nextFrame(frame).frameSum();
    }
  }

  nextFrame = (frame) => {
    return this.frames[this.frames.indexOf(frame) + 1];
  }
  
  score = () => {
    let score = 0;
    this.frames.forEach(frame => {
      if (frame.isStrike() && frame != this.frames.at(-1)) {
        score += (frame.rolls[0] + this.strikeBonus(frame));
      } else if (frame.isSpare() && frame != this.frames.at(-1)) {
        score += (frame.frameSum() + this.spareBonus(frame));
      } else {
        score += frame.frameSum();
      }
    });
    return score;
  }
}

module.exports = BowlingGame;