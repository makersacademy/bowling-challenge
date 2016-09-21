//Understands a bowling frame

function Frame (){
  this._standingPins = 10;
  this._pinsKnocked = 0;
}

Frame.prototype = {


  rollOne: function() {
     return Math.floor(Math.random() * (this._standingPins + 1));
  },

  rollTwo: function() {
     return Math.floor(Math.random() * (this._standingPins + 1));
  },

  knockedPins: function () {
    this._pinsKnocked = this.rollOne() + this.rollTwo();
  },

  remainingPins: function() {
    return this._standingPins -= this._pinsKnocked;
  },

};
