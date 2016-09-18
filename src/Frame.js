//Understands a bowling frame

function Frame (){
  this._pins = 10;
}

Frame.prototype = {
  currPins: function() {
    return this._pins
  }

};
