'use strict';

function Frame() {
  this._pins = 10;
  this._bowls = [];
};

Frame.prototype = {
  
  bowls: function () {
    return this._bowls;
  },

  pinsRemaining: function () {
    return this._pins;
  },

  score: function () {
    if (!this.isFrameComplete() || this.isPendingBonus()) return '';
    return this._bowls.reduce(this._sum, 0);
  },

  bowl: function (pins) {
    if (pins > this.pinsRemaining()) throw new Error('number to knock down cannot be greater than the number of pins remaning')
    if (this.isFrameComplete()) throw new Error('cannot bowl more than twice for a frame');
    this._pins -= pins;
    this._bowls.push(pins);
  },

  round: function () {
    return this._bowls.length + 1;
  },

  isFrameComplete: function () {
    return this._bowls.length === 2 || this.pinsRemaining() === 0;
  },

  isPendingBonus: function () {
    return this.pinsRemaining() === 0 && this._bowls.length < 3;
  },

  addBonus: function (bonus) {
    if (!this.isPendingBonus()) throw new Error('Bonus cannot be added for this frame');
    this._bowls.push(bonus)
  },

  _sum: function (a, b) {
    return a + b;
  }

};
