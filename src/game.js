class Game {

  constructor() {
    this.frames = []
  }

  enterFrameRolls(roll_one, roll_two) {
    this._newFrame();
    this._getPlayerRolls(roll_one, roll_two);
    this._isGameOver();
  } 

  frameScore() {
    let score = new Score();
    return score.currentFrame(this.frames[this.frames.length - 1]);
  }

  _getPlayerRolls(roll_one, roll_two) {
    let current_frame = this.frames[this.frames.length - 1]
    current_frame.firstRoll(roll_one);
    current_frame.secondRoll(roll_two);
  }

  _isGameOver() {
    if (this.frames.length === 10) {
      console.log('Game over!');
    }
  }

  _newFrame() {
    if (this.frames.length <= 10) {
      this.frames.push(new Frame);
    }
  }

}