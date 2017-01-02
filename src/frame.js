function Frame() {

  this.firstScore = 0
  this.secondScore = 0
  this._firstBowl = true
  this.frameIndex = 1

    Frame.prototype.checkPinValidity = function(pins) {
      if (pins < 0 || pins + this.firstScore > 10) {
        throw 'This number of pins is not valid';
      }
    }

    Frame.prototype.updateFrameIndex = function() {
      this.frameIndex +=1;
    }

  Frame.prototype.firstBowl = function(pins) {
    this.reset();
    if (pins === 10) {
      this.updateFrameIndex();
      return pins;
    } else {
      this._firstBowl = !this._firstBowl; return pins;
    }
  }

  Frame.prototype.secondBowl = function(pins) {
      this._firstBowl = !this._firstBowl;
      this.updateFrameIndex();
      return pins;
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
  }

  Frame.prototype.bowlIndex = function() {
      if (this._firstBowl === true) {
          return -1 + ((this.frameIndex) * 2)
        } else {
          return ((this.frameIndex) * 2)
        }
  }
}
