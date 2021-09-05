class Score {

  constructor() {
    this.frameScore = 0;
  }

  currentFrame(frame_rolls) {
    this.frameScore = 5;
    return (frame_rolls.roll_one + frame_rolls.roll_two);
  }

}
