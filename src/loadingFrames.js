class LoadingFrames {
  constructor() {
    this.framesHtml = new FramesHtml();
  }

  _gameToBeContinued() {
    let thisFrames = localStorage.getItem("frames");
    if (thisFrames !== null) thisFrames = JSON.parse(thisFrames);
    if (Array.isArray(thisFrames)) this._frames = thisFrames;
    else this._frames = [];
  }

  _loading(game) {
    if (this._frames[this._frames.length - 1] === "ended") {
      this._frames.pop();
      localStorage.setItem("frames", JSON.stringify(this._frames));
    }
    this._frames.forEach((value, index) => {
      if (Array.isArray(value))
        value.forEach((pins) => {
          game._registerPins(pins);
        });
    });
  }

  _updateFrame(frame, game) {
    let frames = game._framesObjects;
    this._updateLocalStorage(frames);
    if (Array.isArray(frame)) frame = frames[frames.length - 1];
    if (frames.length > 1)
      this._frameUpdateView(frames[frames.length - 2], frames);
    this._frameUpdateView(frame, frames);
    if (JSON.parse(localStorage.getItem("frames")).length > 10)
      this._gameEndedFinalScore(frame, frames);
  }

  _gameEndedFinalScore(frame, frames) {
    this.framesHtml._doEndGame(this._totalScore(frame, frames));
  }

  _frameUpdateView(frame, frames) {
    const fEl = this.framesHtml._getElement(frame);
    this.framesHtml._doNumber(frame, fEl);
    this.framesHtml._doRoll(frame, fEl, 1);
    this.framesHtml._doRoll(frame, fEl, 2);
    if (frame.frameScore.length > 2) this.framesHtml._doRoll(frame, fEl, 3);
    this.framesHtml._doScore(frame, fEl, this._totalScore(frame, frames));
  }

  _totalScore(frame, frames, transfer) {
    frames = this._double(frames);
    let frameToCount = [];
    while (frames[0] !== frame) {
      transfer = frames.shift();
      if (transfer instanceof Object) frameToCount.push(transfer);
    }
    if (frame.frameEnded) frameToCount.push(frame);
    let value = frameToCount
      .map((frame) => {
        return frame.points();
      })
      .reduce((a, b) => a + b, 0);
    return value;
  }

  _double(array, newArray = []) {
    array.forEach((value) => {
      newArray.push(value);
    });
    return newArray;
  }

  _lastFrameFinished(frames) {
    if (frames.length > 0) return frames[frames.length - 1].frameEnded();
    else return false;
  }

  _newGame() {
    localStorage.removeItem("frames");
    // localStorage.setItem(
    //   "frames",
    //   JSON.stringify([
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //     [10],
    //   ])
    // );
    //[1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6]
    document.querySelector(".gameended").removeAttribute("data-gameended");
    location.reload();
  }

  _updateLocalStorage(frames, lastFrameStatus) {
    lastFrameStatus = this._lastFrameFinished(frames);
    frames = frames.map((frame) => frame.frameScore);
    if (frames.length >= 10 && lastFrameStatus) frames.push("ended");
    localStorage.setItem("frames", JSON.stringify(frames));
  }
}
