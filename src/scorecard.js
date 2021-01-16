class Scorecard {
  constructor() {
    this._pinsKnocked = []
    this._frame = 0
    this._roll = 0
  };

  inputRoll(number) {
    if(this._frameNotExist) {
      this._pinsKnocked.push([])
    }
    this._pinsKnocked[this._frame].push(number)
    this._roll++
    if(this._isFrameComplete()) {
      this._frame++
    }
  };

  pinsKnocked() {
    return this._pinsKnocked
  }

  _frameNotExist() {
    return typeof this._pinsKnocked[this._frame] == "undefined"
  }

  _isFrameComplete(){
    return this._roll > 1 || this.sum(this._pinsKnocked[this._frame]) === 10
  }

  sum(array){
    return array.reduce(function(a,b){
      return a + b
    }, 0);
  }

};