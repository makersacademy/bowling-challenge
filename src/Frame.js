//Understands a bowling frame

function Frame (){
  this._startPins = 10;
  this._pinsKnocked = null;
}

Frame.prototype = {
  currPins: function() {
    return this._startPins
  },

  knockedPins: function () {
    return Math.floor(Math.random() * (this._startPins + 1));
  },

  remainingPins: function() {
    return this._startPins -= this.knockedPins();
  }

};
