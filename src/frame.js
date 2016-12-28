function Frame() {

  this.firstScore = 0
  this.secondScore = 0
  this._firstBowl = true


    Frame.prototype.checkPinValidity = function(pins) {
      if (pins < 0 || pins + this.firstScore > 10) {
        throw 'This number of pins is not valid';
      }
    }

  Frame.prototype.firstBowl = function(pins) {
    if (pins === 10) {
      return pins;
    } else {
      this._firstBowl = !this._firstBowl; return pins;
    }
  }

  Frame.prototype.secondBowl = function(pins) {
    if (this.firstScore + pins === 10) {
      return pins;
    } else {
      this._firstBowl = !this._firstBowl; return pins;
    }
  }

  Frame.prototype.bowl = function(pins) {
    if (this._firstBowl === true) {
      this.firstScore = this.firstBowl(pins)
    } else {
      this.secondScore = this.secondBowl(pins)
    }
  }

  Frame.prototype.reset = function() {
    this.firstScore = 0
    this.secondScore = 0
    this._firstBowl = true
  }

}
