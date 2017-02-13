var Player = class {
  constructor(frameClass, rollClass, refereeObject) {
    this._framesClass = frameClass;
    this._rollClass = rollClass;
    this._activeFrameNumber = -1;
    this._referee = refereeObject

    this.rolls = new Array();
    this.frames = new Array();
    this.maxFrames = 10;
  };

  activeFrame() {
    if (this._activeFrameNumber == -1) {
      throw('Cannot call activeFrame(): no frames available')};
    return this.frames[this._activeFrameNumber];
  };

  nextRoll() {
    try {
      this.activeFrame().nextRoll();
    } catch (err) {
      switch (err) {
        case 'Cannot call activeFrame(): no frames available':
        case 'Cannot advance to the next roll: pins have finished for this frame!':
          // console.log(err);
          this._nextFrame();
          this.rolls.push(this.activeFrame().nextRoll());
          break;
        // case 'Dinosaur':
        default:
          throw(err);
      };

    };
  };

  createFrame() {
    // console.log("HI",this._rollClass);
    if (this.frames.length >= this.maxFrames) {throw('Cannot create frame: max number reached')};
    this.frames.push(new this._framesClass(this._activeFrameNumber, this._rollClass));
  };

  // PRIVATE
  _nextFrame() {
    // this._referee.calculateScores(this.frames);
    this._activeFrameNumber += 1;
    this.createFrame();
  }

}
