(function () {
   'use strict';
}());

// alternative way to make a constructor, use 'var' to reduce scope
var Frame = function(game) {
  this.game = game || new Game();
  this.MAX_PINS = 10;
  this.pins = this.MAX_PINS;
  this.knockedDownPins = [];
  this.FRAME_LENGTH = 2;
  this.TENTH_FRAME_MAX_LENGTH = 3;
};

Frame.prototype = {
  getPins: function() {
    return this.pins;
  },

  reducePins: function(number){
    if(this.pins === 0) {
      this.pins = this.getMaxPins();
    }
    this.pins -= number;
  },

  getKnockedDownPins: function() {
    return this.knockedDownPins;
  },

  setKnockedDownPins: function(number) {
    if(this._isTenthFrame()) {
      this.knockedDownPins.push(number);
      this.reducePins(number);
      if(this._isTenthFrameOver()) {
        this._pushFrame();
        this._resetDefaults();
      }
    } else {
    this.knockedDownPins.push(number);
    this.reducePins(number);
    if(this._isFrameOver()) {
      this._pushFrame();
      this._resetDefaults();
    }
   }
  },

  _resetDefaults: function(){
    this.pins = this.MAX_PINS;
    this.knockedDownPins = [];
  },

  getMaxPins: function(){
    return this.MAX_PINS;
  },

  getFrameLength: function(){
    return this.FRAME_LENGTH;
  },

  _isFrameOver: function(){
      return (this.getKnockedDownPins()[0] === this.getMaxPins() ||
      this.getKnockedDownPins().length === this.getFrameLength());
  },

  _pushFrame: function() {
    this.game.storeScores(this.getKnockedDownPins());
  },

  _isTenthFrame: function() {
    return (this.game.frameLength() === 9);
  },

  _isTenthFrameOver: function() {
    if (this.getKnockedDownPins().length === this.TENTH_FRAME_MAX_LENGTH) {
      return true;
    } else if (this.getKnockedDownPins().length === this.getFrameLength() &&
               this.knockedDownPins.reduce((a, b) => a + b) < 10) {
                 return true;
               }
  }
};
