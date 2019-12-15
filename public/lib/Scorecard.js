class Scorecard {
  constructor() {
    this.frames = [];
    this.currentFrame = "Ready for first frame";
    this.gotSpare = false
    this.gotStrike = false
  }

  addTurn(roll1, roll2, roll3) {
    if (this.frames.length < 9) {
      if (this.gotSpare === true) { 
        this._spareTurn(roll1, roll2)
      } else if (this.gotStrike === true) {
        this._strikeTurn(roll1, roll2)
      } else {
        this._addFrame(roll1, roll2, roll3);
        this._isSpare(roll1, roll2)
        this._isStrike(roll1)
      }
    } else if (this.frames.length = 9) {
      this._addFrame(roll1, roll2, roll3);
      return this.total();
    }
  }

  normalTotal() {
    return [].concat.apply([], this.frames).reduce((a, b) => a + b);
  }

  // specialTotal() {
  //   var specialFrames = this.frames.pop()
  //   return [].concat.apply([], specialFrames).reduce((a, b) => a + b);
  // }

  _addFrame(roll1, roll2, roll3) {
    // this.currentFrame = [roll1, roll2, roll3];
    this.frames.push([roll1, roll2, roll3]);
  }

  _isSpare(roll1, roll2) {
    if (roll1 < 10 && roll1 + roll2 === 10) {
      this.gotSpare = true
    } else this.gotSpare = false
  }

  _isStrike(roll1) {
    if (roll1 === 10) {
      this.gotStrike = true
    } else this.gotStrike = false
  }

  _spareTurn(roll1, roll2) {
    this._isSpare(roll1, roll2)
    this._isStrike(roll1)
    this.frames[this.frames.length-1][0] += roll1
    this._addFrame(roll1, roll2, 0)
  }

  _strikeTurn(roll1, roll2) {
    this._isSpare(roll1, roll2)
    this._isStrike(roll1)
    this.frames[this.frames.length-1][0] += roll1
    this.frames[this.frames.length-1][1] += roll2
    this._addFrame(roll1, roll2, 0)
  }
}
;




