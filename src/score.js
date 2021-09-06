class Score {

  constructor() {
    this.frameScore = 0;
    this.totalScore = 0;
  }

  currentFrame(frame_rolls) {
    this.frameScore = (frame_rolls.roll_one + frame_rolls.roll_two);
  }

  scoreSoFar(frames_played) {
    let initialValue = 0
    this.totalScore = frames_played.reduce(function (previousValue, currentValue) {
    return previousValue + (currentValue.roll_one + currentValue.roll_two)
    }, initialValue)
  }

}
