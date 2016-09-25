function Roll(pins) {
  this.startingPins = pins;
  this.finishingPins = this._roll();

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Roll.prototype._roll = function () {
   return getRandomInt(0,this.startingPins);
};
