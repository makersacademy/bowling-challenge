function Frame() {
    this._frameNumber = 1
    this._playOne
    this._playTwo
    this._lastStrike = false
};

Frame.prototype.setPlayOne = function (pin) {
  if (pin === 10) {
    this._result = [
      `Frame: ${this._frameNumber}`
    ]
    this._result.push(`Play 1: X`);
    this._result.push(`Play 2: -`);
    this._result.push(`Frame score: 10`);
    this.incrementFrameNumber();
    this._lastStrike = true;
  } else if (pin < 10) {
    this._result = [
      `Frame: ${this._frameNumber}`
    ]
    this._playOne = pin;
    this._result.push(`Play 1: ${pin}`)};
};

Frame.prototype.setPlayTwo = function (pin) {
    this._playTwo = pin;
    this._result.push(`Play 2: ${pin}`);
    this._result.push(`Frame score: ${this._playOne + this._playTwo}`);
    this.incrementFrameNumber();
    if (this._playOne + this._playTwo === 10 && this._playOne !== 10) {
      this._lastSpare = true;
    } else {
      this._lastSpare = false;
    }
};

Frame.prototype.incrementFrameNumber = function () {
  this._frameNumber ++;
};

Frame.prototype.getFrameNumber = function () {
  this._frameNumber
};

Frame.prototype.getResult = function () {
  return this._result
};

Frame.prototype.lastSpare = function () {
  return this._lastSpare
};

Frame.prototype.lastStrike = function () {
  return this._lastStrike
};

module.exports = Frame;
