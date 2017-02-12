class BowlingScoreboard {
  // PRIVATE
  _populateFrames(frameClassAsVar) {
    var framesN = 10;
    var frames = new Array();
    for (var i = 0; i < framesN; i++) {
      frames.push(new frameClassAsVar);
    }
    return frames
  }

  constructor(frameClassAsVar) {
    this.frames = this._populateFrames(frameClassAsVar)
  };

}
