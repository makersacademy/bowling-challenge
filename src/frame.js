function Frame() {

  this.firstScore = 0
  this.secondScore = 0
  this._attempts = 0;

  Frame.prototype.isDone = function() { return this.firstScore==10 || this._attempts==2; }

    Frame.prototype.checkPinValidity = function(pins) {
      if (pins < 0 || pins + this.firstScore > 10) {
        throw 'This number of pins is not valid';
      }
    }

  Frame.prototype.doBowl = function(pins) {
    this._attempts+=1;
      return pins;
  }

  Frame.prototype.bowl = function(pins) {
    if (this._attempts === 0) {
      this.firstScore = this.doBowl(pins);
    } else {
      this.secondScore = this.doBowl(pins);
    }
  }

  Frame.prototype.reset = function() {
    this.firstScore = 0
    this.secondScore = 0
  }

}
