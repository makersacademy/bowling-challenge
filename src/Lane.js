function Lane() {
  this.pins = 10;

  this.hit = function(number) {
    this.pins -= number;
  };

  this.resetPins = function() {
    this.pins = 10;
  };

};