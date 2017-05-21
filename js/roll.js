var Roll = function () {
  this._finished = false
  this._pinsDown = 0
}

Roll.prototype.knockPinsDown = function (pinsDown) {
  this._pinsDown = pinsDown;
};

module.exports = Roll;
