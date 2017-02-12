class BowlingScoreboard {
  constructor(frameClass,rollClass) {
    this._framesClass = frameClass;
    this._rollClass = rollClass;
    this._activeFrameNumber = 0;

    this.frames = this._populateFrames();
  };

  activeFrame() {
    return this.frames[this._activeFrameNumber];
  };

  nextRoll() {
    try {
      this.activeFrame().nextRoll();
    } catch (err) {
      if (err == 'Cannot advance to the next roll: pins have finished for this frame!') {
        this._nextFrame();
      } else {
         throw(err); // pass exception object to error handler
      }
    }
  }

  // PRIVATE
  _populateFrames() {
    var framesN = 10;
    var frames = new Array();
    for (var i = 0; i < framesN; i++) {
      frames.push(new this._framesClass(this._rollClass));
    }
    return frames
  }

  _nextFrame() {
    this._referee.calculateScores();
    this._activeFrameNumber += 1;
  }

}
