'use strict'

describe("Pins", function() {
var pins;

  beforeEach(function() {
    pins = new Pins();
  });

  it("exist!", function() {
    expect(pins).toBeDefined();
  });

  it("have 10 pins up at start", function(){
    expect(pins.pinsUp).toEqual(10);
  });

  it("can be knocked down to 5 pins", function(){
    pins.knockdown(5);
    expect(pins.pinsUp).toEqual(5);
  });

  it("can be reset back to 10 pins", function(){
    pins.knockdown(5);
    pins.reset();
    expect(pins.pinsUp).toEqual(10);
  });

});
