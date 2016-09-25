// responsible for # of pins hit

'use-strict';

function Roll(pins) {
  this._pinsHit = 0;
  this._roll(pins);
}

Roll.prototype = {

  showPinsHit: function() {

    return this._pinsHit;
  },

  _roll: function (pins) {
    this._pinsHit = Math.floor(Math.random() * (pins + 1));
  }

};
