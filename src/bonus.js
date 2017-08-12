function Bonus(type, frameIndex) {
  this._type = type;
  this._frameIndex = frameIndex;
}

Bonus.prototype.type = function () {
  return this._type;
};

Bonus.prototype.getFrameIndex = function() {
  return this._frameIndex;
};
