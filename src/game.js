"use strict";
class Game {
  constructor() {
    this._loadingFrames = new LoadingFrames();
    this._loadingFrames._gameToBeContinued();
    this._framesObjects = [];
    this._loadingFrames._loading(this);
    this._bonusFutureRolls = 0;
    this._bonusPrevFrames = [];
  }

  _registerPins(many) {
    const frame = this._getFrame(this);
    //console.log(frame);
    if (frame === "ended") return frame;
    let returnAddRoll = frame._addRollAndReturnBonusForPrevFrames(many);
    this._bonusFutureRolls = returnAddRoll.bonusFutureRolls;
    returnAddRoll.bonusPrevFrames.forEach((value, index) => {
      let frameIndex = this._framesObjects.length - index - 1 - 1;
      this._framesObjects[frameIndex].addBonusSentFromFutureRolls(value);
      this._loadingFrames._updateFrame(this._framesObjects[frameIndex], this);
    });
    this._loadingFrames._updateFrame([0], this);
  }

  _getScore(frame) {
    if (isNaN(frame))
      return this._framesObjects
        .map((value) => {
          return value.points;
        })
        .reduce((a, b) => a + b, 0);
    else if (parseInt(frame) < this._framesObjects.length)
      return this._framesObjects(parseInt(frame)).points;
    else return "frame out of game";
  }

  _getFrame() {
    let storage = localStorage.getItem("frames");
    if (storage !== null && JSON.parse(storage).length > 10) return "ended";
    if (this._framesObjects.length == 0)
      this._framesObjects.push(new FrameNotTen(1, 0));
    if (
      this._framesObjects[this._framesObjects.length - 1].frameEnded() === true
    )
      this._framesObjects.push(
        new FrameNotTen(this._framesObjects.length + 1, this._bonusFutureRolls)
      );
    return this._framesObjects[this._framesObjects.length - 1];
  }
}
