class Game {

  constructor(score = new Score) {
    this.score = score;
    this.frames = [];
  }

  frameRolls(roll_one, roll_two) {
    this._newFrame();
    this._getPlayerRolls(roll_one, roll_two);
    this._isGameOver();
  } 

  frameScore() {
    this.score.currentFrame(this.frames[this.frames.length - 1]);
    return this.score.frameScore;
  }

  totalScore() {
    this.score.scoreSoFar(this.frames);
    return this.score.totalScore;
  }

  _getPlayerRolls(roll_one, roll_two) {
    let current_frame = this.frames[this.frames.length - 1]
    current_frame.firstRoll(roll_one);
    current_frame.secondRoll(roll_two);
  }

  _newFrame() {
    if (this.frames.length <= 10) {
      this.frames.push(new Frame);
    }
  }

  _isGameOver() {
    if (this.frames.length === 10) {
      console.log('Game over!');
    }
  }

}
