'use strict'

describe("Pins", function() {
var pins;
var bowlingBall;

  beforeEach(function() {
    pins = new Pins();
    bowlingBall = new BowlingBall();
  });

  it("exists!", function() {
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

  it("recognizes a valid roll", function(){
    expect(pins._isValidRoll(3)).toBe(true);
    expect(pins.pinsUp).toEqual(7);

  });

  it("recognizes an invalid roll", function(){
    expect(pins._isValidRoll(16)).toBe(false);
    expect(pins.pinsUp).toEqual(10);
  });

});
