class BowlingGame {
  constructor(frames = []){
    this.frames = frames;
  }

  addFrame(frame) {
    this.frames.push(frame);
  }

  spareBonus(frame){
    return this.nextFrame(frame).rolls[0];
  }

  strikeBonus(frame){
    if (nextFrame(frame).isStrike()) {
      return (frame.rolls[0] + this.nextFrame(this.nextFrame(frame)));
    }
    else {
      return this.nextFrame(frame).frameSum;
    }
  }

  nextFrame(frame){
    return this.frames[this.frames.indexOf(frame) + 1];
  }
  
  score(){
    score = 0;
    this.frames.forEach(frame => {
      if (frame.isStrike() && frame != this.frames.at(-1)) {
        score += frame.rolls[0] + this.strikeBonus(frame);
      } else if (frame.isSpare() && frame != this.frames.at(-1)) {
        score += frame.frameSum() + this.spareBonus(frame);
      } else {
        score += frame.frameSum()
      }
    })
    return this.score
  }
}

module.exports = BowlingGame;