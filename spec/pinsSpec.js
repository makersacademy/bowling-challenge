(function () {
   'use strict';
}());

describe("pins", function() {
  var pins;

  beforeEach(function() {
    pins = new Pins();
  });

  describe("new set of pins", function() {
    // As a bowler,
    // I want to see all the pins in a frame,
    // so that I can take 2 shots and get points
    xit("at start of a frame", function() {
      expect(pins.pinsCount).toEqual(10);
    });
  });
});