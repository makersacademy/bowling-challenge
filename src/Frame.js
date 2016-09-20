//Understands a bowling frame

function Frame (){
  this._standingPins = 10;
  this._pinsKnocked = 0;
}

Frame.prototype = {

  knockedPins: function () {
    this._pinsKnocked = Math.floor(Math.random() * (this._standingPins + 1));
  },

  remainingPins: function() {
    return this._standingPins -= this._pinsKnocked;
  },

  currPins: function() {
    return this._standingPins;
  },

};
