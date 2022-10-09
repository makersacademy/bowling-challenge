class BowlingScoreboard {
  constructor(){
    this._board = [[],[],[],[],[],[],[],[],[],[]];
    this._frame = 0;   // up to 10 frames
    this._roll = 0;    // can be either 0 or 1 - 2 rolls per frame
  }
            
  getScoreboard() {
    return this._board;
  }

  getFrame() {
    return this._frame;
  }

  getRoll() {
    return this._roll;
  }

  update(pinsDown) {
    this.populate(pinsDown);
    this.frameRollLogic(pinsDown);
  }

  populate(pinsDown) {
    this._board[this._frame].push(pinsDown)
  }

  frameRollLogic(pinsDown) {
    if (this._frame < 9 ) {
      if (pinsDown === 10) {
        this._frame += 1;
      } else if (this._roll === 0) {
        this._roll += 1;
      } else {
        this._frame += 1;
        this._roll = 0;
      }
    } else {
      this._roll += 1;
    }
  }
}

module.exports = BowlingScoreboard;