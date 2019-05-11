function Frame() {
    this._frameNumber = 1
    this._playOne
    this._playTwo
};

Frame.prototype.setPlayOne = function (pin) {
  this._result = [
    `Frame: ${this._frameNumber}`
  ]
  this._playOne = pin;
  this._result.push(`Play 1: ${pin}`);
};

Frame.prototype.setPlayTwo = function (pin) {
  this._playTwo = pin;
  this._result.push(`Play 2: ${pin}`);
  this._result.push(`Frame score: ${this._playOne + this._playTwo}`);
  this.incrementFrameNumber();
  if (this._playOne + this._playTwo === 10) {
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

// Frame.prototype.getRoll = function () {
//   if(this._play === 1) {
//     this._roll = new Roll();
//
//     console.log(this.roll.roll(pin));
//     this._play = 2;
//   } else if(this._play === 2) {
//     this._play = 1;
//     console.log(this.roll.roll(pin))
//   };
// };
//
// Frame.prototype.Roll = function () {
//   this._roll = new Roll();
// };

module.exports = Frame;
