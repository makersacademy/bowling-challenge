class BowlingScoreboard {
  constructor(frameClass,rollClass) {
    this._framesClass = frameClass
    this._rollClass = rollClass

    this.frames = this._populateFrames()
  };

  // PRIVATE
  _populateFrames() {
    var framesN = 10;
    var frames = new Array();
    for (var i = 0; i < framesN; i++) {
      frames.push(new this._framesClass(this._rollClass));
    }
    return frames
  }

}
