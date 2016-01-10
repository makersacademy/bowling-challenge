function Game() {

}

Game.prototype.enterPins = function(pins) {
  if(this._isPinsEnteredValid(pins)) {
    return "Thank you for your input";
  } else {
    throw "Invalid number of pins entered";
  }
};

Game.prototype._isPinsEnteredValid = function(pins) {
  if(typeof(pins) === 'number' && pins >= 0 && pins < 11) {
    return true;
  } else {
    return false;
  }
};
